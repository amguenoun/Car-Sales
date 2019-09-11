export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = featureID => {
    return {
        type: ADD_FEATURE,
        payload: featureID
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = featureID => {
    return {
        type: REMOVE_FEATURE,
        payload: featureID
    }
}

export const CHANGE_CAR = 'CHANGE_CAR';
export const changeCar = car => {
    return {
        type: CHANGE_CAR,
        payload: car
    }
}