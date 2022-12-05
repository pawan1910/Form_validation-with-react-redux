import { USER_DETAILS } from "./userTypes";

const initialState = {};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case USER_DETAILS:
      const initialData = actions.payload;
      return initialData;

    default:
      return state;
  }
};

export default userReducer;