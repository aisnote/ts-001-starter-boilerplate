import { MemberEntity } from "../model/member"

import Axios, { AxiosResponse } from 'axios';

const gitHubURL = 'https://api.github.com';
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getMembersCollection = (): Promise<MemberEntity[]> => {
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {

        try {
            Axios.get<MemberEntity[]>(gitHubMembersUrl)
            .then(response => resolve(mapMemberListApiToModel(response)))
        } catch (error) {
            reject(error)
        }

        // setTimeout(() => resolve(
        //     [
        //         {
        //             id: 1475912,
        //             login: "brauliodiez",
        //             avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
        //         },
        //         {
        //             id: 4374977,
        //             login: "Nasdan",
        //             avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
        //         }
        //     ]), 500);
    });

    return promise;
}

const mapMemberListApiToModel = ({data}: AxiosResponse<any[]>): MemberEntity[] => 
data.map(getHubMember => ({
    id: getHubMember.id,
    login: getHubMember.login,
    avatar_url: getHubMember.avatar_url
}));