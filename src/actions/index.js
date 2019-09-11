export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = featureID => {
    return {
        type: ADD_FEATURE,
        payload: featureID
    }
}