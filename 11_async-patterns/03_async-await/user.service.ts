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

    async getAllUsers(): Promise<User[] | void> {
        const url = 'http://localhost:3001/api/user';
        try {
            const response: AxiosResponse<User[]> = await axios.get<User[]>(url);
            const updatedUsers =  await this.getUsersSkillSets(response.data);
            return updatedUsers;
        } catch (ex) {
            console.log('error caught: ', ex);
        };
    }

    async getUsersSkillSets(users: User[]): Promise<User[]> {
        const promises = users.map((user: User) => {
            return axios.get<UserSkillset[]>(`http://localhost:3001/user/${user.id}/skillsets`)
        });
        const responses: AxiosResponse<UserSkillset[]>[] = await Promise.all(promises);
        const skillsets = responses.map(response => response.data);
        users.forEach((user, index) => {
            user.skillsets = skillsets[index];
        });
        return users;
    }
}
