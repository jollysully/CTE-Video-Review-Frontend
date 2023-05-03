import client from "./client";

export const createUser = async (userInfo) => {
  try {
    const { data } = await client.post("/user/create", userInfo);
    return data;

  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};

export const verifyUserEmail = async (userInfo) => {
    try {
      const { data } = await client.post("/user/verify-email", userInfo);
      return data;
      
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };

  //signin with authprovider.jsx
  export const signInUser = async (userInfo) => {
    try {
      const { data } = await client.post("/user/sign-in", userInfo);
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };

  //loginauthorization
  export const getIsAuth = async (token) => {
    try {
      const { data } = await client.get("/user/is-auth", {
        headers: {
          Authorization: "Bearer " + token,
          accept: "application/json",
        },
      });
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };
  //forgotten pasword
  export const forgetPassword = async (email) => {
    try {
      const { data } = await client.post("/user/forget-password", { email });
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };
  
  //password rest token verification
  export const verifyPasswordResetToken = async (token, userId) => {
    try {
      const { data } = await client.post("/user/verify-pass-reset-token", {
        token,
        userId
      });
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };

  //sendingthereset passwword to the db
  export const resetPassword = async (passwordInfo) => {
    try {
      const { data } = await client.post("/user/reset-password", passwordInfo);
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };
//new otp for user not logged in
  export const resendEmailVerificationToken = async (userId) => {
    try {
      const { data } = await client.post(
        "/user/resend-email-verification-token",
        { userId }
      );
      return data;
    } catch (error) {
      const { response } = error;
      if (response?.data) return response.data;
  
      return { error: error.message || error };
    }
  };
  