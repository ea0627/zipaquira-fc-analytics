"use client";

import { useEffect, useState } from "react";
import { getClubWithFallback } from "@/lib/hattrick/services/clubService";

export function useClubData() {
  const [club, setClub] = useState(null);
  const [source, setSource] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadClub() {
      try {
        const result = await getClubWithFallback();

        setClub(result.data);
        setSource(result.source);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }

    loadClub();
  }, []);

  return {
    club,
    source,
    status,
    isLoading: status === "loading",
    isError: status === "error",
    isSuccess: status === "success",
  };
}