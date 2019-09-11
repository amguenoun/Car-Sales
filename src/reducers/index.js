import { ADD_FEATURE, REMOVE_FEATURE, CHANGE_CAR } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    carList: [
        {
            id: 0,
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        },
        {
            id: 1,
            price: 107080,
            name: '2020 Ford Shelby',
            image:
                'https://cdn.motor1.com/images/mgl/417eo/s1/2020-ford-shelby-gt500.jpg',
            features: []
        },
        {
            id: 2,
            price: 80230,
            name: '2019 Ford Focus',
            image:
                'https://cdn.motor1.com/images/mgl/Eblnq/s2/2019-ford-focus-in-depth-video.jpg',
            features: []
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, state.store[action.payload - 1]]
                },
                additionalPrice: state.additionalPrice + state.store[action.payload - 1].price
            };
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload)
                },
                additionalPrice: state.additionalPrice - state.store[action.payload - 1].price
            };
        case CHANGE_CAR:
            return {
                ...state,
                car: action.payload
            }
        default:
            return state;
    }
}