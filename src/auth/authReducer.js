import { types } from "../types/types";

export const authReducer = (state = {}, actions) => {
  switch (actions.type) {
    case types.login:
      return {
        ...actions.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
