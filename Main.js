import React from "react";
import { AuthStack, UserStack } from "./app/route/routes";

const Main = () => {
  return false ? <AuthStack /> : <UserStack />;
};

export default Main;
