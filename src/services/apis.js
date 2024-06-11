const BASE_URL = process.env.REACT_APP_BASE_URL

//Auth Endpoints
export const endpoints = {
    SIGNUP_API: BASE_URL + "/signup",
    LOGIN_API: BASE_URL + "/login",
}

// Owner Endpoints 
export const ownerEndpoints = {
    CREATE_CANTEEN_API: BASE_URL + "/owner/addCanteen",
    GET_ALL_CANTEEN_API: BASE_URL + "/owner/getAllCanteen",
    GET_CANTEEN_DETAILS_API: BASE_URL + "/owner/getCanteenDetails",
    EDIT_CANTEEN_API: BASE_URL + "/owner/editCanteen",
    CREATE_ITEM_API: BASE_URL + "/owner/addItem",
    EDIT_ITEM_API: BASE_URL + "/owner/editItem",
    DELETE_ITEM_API: BASE_URL + "/owner/deleteItem",
    DELETE_CANTEEN_API: BASE_URL + "/owner/deleteCanteen" 
}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    UPDATE_AUTH_API: BASE_URL + "/profile/updateAuth",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}