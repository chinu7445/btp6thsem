const UserReducer = (userState, action) => {
  switch (action.type) {
    case "_id":
      return {
        ...userState,
        _id: action.payload,
      };

    case "username":
      return {
        ...userState,
        username: action.payload,
      };

    case "loginStatus":
      return {
        ...userState,
        loginStatus: action.payload,
      };

    case "isAdmin":
      return {
        ...userState,
        isAdmin: action.payload,
      };

    case "generated":
      return {
        ...userState,
        generated: [...userState.generated, action.payload],
      };

    case "favourites":
      return {
        ...userState,
        favourites: [...userState.favourites, action.payload],
      };

    default:
      return userState;
  }
};

export default UserReducer;
