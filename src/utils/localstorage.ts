// src/utils/localStorage.ts

import { User } from "../redux/models/app-model";

export const saveUserData = (user: User) => {
  localStorage.setItem(user.email, JSON.stringify(user));
};

export const getUserData = (email: string): User | null => {
  const userData = localStorage.getItem(email);
  return userData ? JSON.parse(userData) : null;
};

export const saveCurrentUser = (user: User) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = (): User | null => {
  const currentUserData = localStorage.getItem("currentUser");
  return currentUserData ? JSON.parse(currentUserData) : null;
};

export const clearCurrentUser = () => {
  localStorage.removeItem("currentUser");
};
export const getUsername = (email: string): string => {
    return email.split('@')[0];
  };
