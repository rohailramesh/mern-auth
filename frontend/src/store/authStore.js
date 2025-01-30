import { create } from "zustand";
import axios from "../utils/axios";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: false,
  message: null,

  signup: async (email, name, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post("/signup", { email, name, password });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.response.data.message });
      throw error;
    }
  },
  login: async (email, password) => {},
  logout: async () => {},
  verifyEmail: async (code) => {},
  forgetPassword: async (email) => {},
  resetPassword: async (token, password) => {},
  checkAuth: async () => {},
}));
