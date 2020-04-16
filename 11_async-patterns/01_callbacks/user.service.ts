import { get as getRequest, RequestCallback, Response } from 'request';

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

    getAllUsers(usersSuccessCallback: ResponseSuccessCallback<User[]>, usersErrorCallback: ResponseErrorCallback) {
        const url = 'http://localhost:3001/api/users';

        // validating whether URL is a valid one.
        if (url.includes('users1')) {
            usersErrorCallback('Invalid URL.');
            return;
        }

        getRequest(url, (error: any, response: Response, body: any) => {
            const users = JSON.parse(body) as User[];
            this.getUsersSkillSets(users, function (usersSkillsets: UsersSkillsetsMap) {
                console.log(usersSkillsets);
                users.forEach((user: User) => {
                    user.skillsets = usersSkillsets[user.id]
                });
                // users + their skillsets
                usersSuccessCallback(users);
            });
        });
    }

    getUsersSkillSets(users: User[], callback) {
        const totalUsers = users.length;
        const usersSkillsets: UsersSkillsetsMap = {};
        let currentUserNumber = 0;

        /*
            {
                '1': [],
                '2': []
            }
        */

        function initiateRequest(user: User) {
            const url = `http://localhost:3001/user/${user.id}/skillsets`;
            getRequest(url, function (error: any, response: Response, body: any) {
                usersSkillsets[user.id].push(...JSON.parse(body));
                currentUserNumber++;
                if (currentUserNumber === totalUsers - 1) {
                    callback(usersSkillsets);
                }
            });
        }
        // 10
        users.forEach((user: User) => {
            usersSkillsets[user.id] = [];
            initiateRequest(user);
        });
    }
}
