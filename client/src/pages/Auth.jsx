import { useState } from "react";
import axios from "axios";

const Auth = ({ setAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/users/login" : "/api/users/register";
    try {
      const { data } = await axios.post(
        `http://localhost:8000${endpoint}`,
        formData,
      );
      if (isLogin) {
        localStorage.setItem("token", data.token);
        setAuthenticated(true);
      } else {
        alert("Registered! Now log in.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.error || "Auth failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-xl font-bold">{isLogin ? "Login" : "Register"}</h2>
      <input
        className="block border m-2"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        className="block border m-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button className="bg-green-500 text-white p-2">
        {isLogin ? "Login" : "Sign Up"}
      </button>
      <p
        className="cursor-pointer underline"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Need an account?" : "Already have one?"}
      </p>
    </form>
  );
};

export default Auth;
