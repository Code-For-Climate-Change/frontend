export interface UserState {
    tokens: string,
    id: string,
}

const initialState = {
    tokens: "",
    id: "",
}

export const reducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return {
                ...state,
                tokens: action.payload
            }
        }
        case "ADD_ID": {
            return {
                ...state,
                id: action.payload
            }
        }
        default:
            return state
    }
}