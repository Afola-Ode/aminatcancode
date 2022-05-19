import axios from "axios";

export const loginUser = (userObj) => {
  return (dispatch) => {
    axios
      .post("https://storeapp-bi.azurewebsites.net/api/login", userObj)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.token,
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_ERROR",
          error,
        });
        console.log(error);
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT_SUCCESS",
    });
  };
};
