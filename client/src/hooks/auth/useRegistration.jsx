import React, { useState } from "react";
import { API } from "../../api/api";

function useRegistration() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ error: "", statusCode: "" });
  const handle = async (params) => {
    try {
      await API.post(
        "/register",
        { data: params },
      ).then((res) => {
        console.log(res);
      });
    } catch (err) {
      setError({
        error: "გვერდი არ არის ნაპოვნი",
        statusCode: err.response.status,
      });
      throw err;
    }
  };
  return { loading, error, handle };
}

export default useRegistration;
