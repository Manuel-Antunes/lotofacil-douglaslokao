export function updateMainScreen(onze, doze, treze, quatorze, quinze) {
    return {
        type: "@user/UPDATE_MAIN_SCREEN",
        payload: { onze, doze, treze, quatorze, quinze }
    };
}