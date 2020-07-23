import produce from 'immer';

const INITIAL_STATE = {
    profile: null
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, draft => {
                draft.profile = action.payload.user;
            });
        case '@user/UPDATE_MAIN_SCREEN':
            console.log("GAGAU");
            return produce(state, draft => {
                draft.profile.onze += action.payload.onze;
                draft.profile.doze += action.payload.doze;
                draft.profile.treze += action.payload.treze;
                draft.profile.quatorze += action.payload.quatorze;
                draft.profile.quinze += action.payload.quinze;
            });
        default:
            return state;
    }
}