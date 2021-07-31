export const Types = {
  SET_RESTAURANTS: 'SET_RESTAURANTS',
  SET_RESTAURANT: 'SET_RESTAURANT',
}

const initialState = {
  restaurants: [],
  restaurantSelected: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      }
    case Types.SET_RESTAURANT:
      return {
        ...state,
        restaurantSelected: action.restaurant,
      }
    default:
      return state
  }
}

export function setRestaurants(restaurants) {
  return {
    type: Types.SET_RESTAURANTS,
    restaurants,
  }
}

export function setRestaurant(restaurant) {
  return {
    type: Types.SET_RESTAURANT,
    restaurant,
  }
}
