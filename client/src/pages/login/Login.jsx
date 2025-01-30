import { Stack, Typography } from "@mui/material";
import React from "react";

function Login() {
  return (
    <>
      <div className="auth-container">
        <Stack direction={"column"} alignItems={"flex-start"} gap={"10px"}>
          <Typography variant="h5">შესვლა</Typography>
          <input type="text" placeholder="ელ-ფოსტა" className="input-field" />
          <input type="text" placeholder="პაროლი" className="input-field" />
          <button className="action-button">შესვლა</button>
        </Stack>
      </div>
    </>
  );
}

export default Login;
