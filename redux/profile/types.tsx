export const REQUEST_PROFILE = "user/REQUEST_PROFILE ";
export const RECEIVED_PROFILE = "user/RECEIVED_PROFILE ";
export const FAILURE_PROFILE = "user/FAILURE_PROFILE";
import { profileTypes } from '../../types';

export type profileData = profileTypes

export interface receivedProfileTypes {
    type: typeof RECEIVED_PROFILE,
    data: profileData
}


export interface requestProfileTypes {
    type: typeof REQUEST_PROFILE,
}

export interface failureProfileTypes {
    type: typeof FAILURE_PROFILE,
}

export interface userState {
    user: profileData | null,
    spinner: boolean,
    failure: boolean
}

export type profileActions = receivedProfileTypes | requestProfileTypes | failureProfileTypes

