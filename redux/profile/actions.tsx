import {
    REQUEST_PROFILE,
    RECEIVED_PROFILE,
    FAILURE_PROFILE,
    profileData,
    receivedProfileTypes,
} from './types';


export function requestProfile() {
    return {
        type: REQUEST_PROFILE,
    }
}

export function receivedProfile(data: profileData): receivedProfileTypes {
    return {
        type: RECEIVED_PROFILE,
        data,
    }
}


export function failureProfile() {
    return {
        type: FAILURE_PROFILE,
    }
}
