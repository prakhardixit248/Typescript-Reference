import axios, { AxiosResponse, AxiosError } from 'axios';


export interface User {
    id: string;
    name: string;
    email: string;
    skillsets: any[];
}

export interface UserSkillset {
    userId: string;
    report: UserSkillsetReport[]
}

export interface UserSkillsetReport {
    techId: string;
    marks: number;
}

export interface ResponseSuccessCallback<T> {
    (body: T): void;
}

export interface ResponseErrorCallback {
    (msg?: string): void;
}

export interface UsersSkillsetsMap {
    [key: string]: UserSkillset[];
}

export class UserService {

    getAllUsers(): Promise<User[] | void> {
        const url = 'http://localhost:3001/api/user';
        return axios.get<User[]>(url)
            .then(function (response: AxiosResponse) {
                return response.data;
            })
            .then((users) => {
                return this.getUsersSkillSets(users);
            })
            .catch(function (error: AxiosError) {
                console.log('error caught: ', error.code);
            });
    }

    getUsersSkillSets(users: User[]): Promise<User[]> {
        const promises = users.map((user: User) => {
            return axios.get<UserSkillset[]>(`http://localhost:3001/user/${user.id}/skillsets`)
        });
        return Promise.all(promises)
            .then((responses: AxiosResponse<UserSkillset[]>[]) => {
                const skillsets = responses.map(response => response.data);
                users.forEach((user, index) => {
                    user.skillsets = skillsets[index];
                });
                return users;
            });
    }
}
