import { profileReducer } from '../reducers'
import {
    REQUEST_PROFILE,
    RECEIVED_PROFILE,
    FAILURE_PROFILE,
} from '../types';

describe('profile reducer ', () => {
    const initialState = {
        user: null,
        spinner: false,
        failure: false,
    }

    it('should provide the initial state,', () => {
        expect(profileReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle REQUEST_PROFILE action', () => {

        const state = {
            spinner: true,
        }

        expect(profileReducer({}, { type: REQUEST_PROFILE })).toEqual(state)
    })

    it('should handle RECEIVED_PROFILE action', () => {
        const data = { fullName: "Janet Stevans", email: "email@mail.com" }
        const state = {
            user: data,
            spinner: false,
        }

        expect(profileReducer({}, { type: RECEIVED_PROFILE, data: data })).toEqual(state)
    })


    it('should handle FAILURE_WEATHER action', () => {
        const state = {
            spinner: false,
            failure: true
        }
        expect(profileReducer({}, { type: FAILURE_PROFILE, failure: true, spinner: false })).toEqual(state)
    })
})