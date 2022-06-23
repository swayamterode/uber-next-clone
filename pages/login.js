import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  return (
    <Wrapper>
      <SignInButton>Sign in wiht Google</SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
flex felx-col bg-gray-200`;

const SignInButton = tw.Button``;
