import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = (props) => {
  const { token } = props;
  if (!token) return <Navigate to='/login' />;
  return <div>Home</div>;
};
const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};
export default connect(mapStateToProps)(Home);
