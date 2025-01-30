import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import useRegistration from "../../hooks/auth/useRegistration";

function Signup() {
  const { loading, error, handle } = useRegistration();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    handle(formData);
  };

  return (
    <div className="auth-container">
      <Stack direction="column" alignItems="flex-start" gap="10px">
        <Typography variant="h5">რეგისტრაცია</Typography>
        <input
          type="email"
          name="email"
          placeholder="ელ-ფოსტა"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="პაროლი"
          className="input-field"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="გაიმეორეთ პაროლი"
          className="input-field"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <Typography color="error">{error.error}</Typography>}
        <button className="action-button" onClick={handleSignUp}>
          რეგისტრაცია
        </button>
      </Stack>
    </div>
  );
}

export default Signup;
