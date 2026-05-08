"use client";

import { useEffect, useState } from "react";
import SectionCard from "@/components/ui/SectionCard";
import Badge from "@/components/ui/Badge";
import { getClubWithFallback } from "@/lib/hattrick/services/clubService";

export default function ChppClubPreview() {
  const [club, setClub] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function fetchClub() {
      try {
        const result = await getClubWithFallback();
        setClub(result);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }

    fetchClub();
  }, []);

  return (
    <SectionCard
      title="CHPP preview"
      description="Primer consumo interno simulando datos provenientes de Hattrick."
    >
      {status === "loading" && <p>Cargando datos CHPP...</p>}

      {status === "error" && (
        <Badge tone="danger">Error cargando datos CHPP</Badge>
      )}

      {status === "success" && club && (
        <div className="chpp-preview">
          <Badge tone={club.source === "api" ? "success" : "warning"}>
            {club.source === "api" ? "API interna conectada" : "Fallback local activo"}
          </Badge>

          <div className="chpp-preview__grid">
            <span>
              <strong>ID</strong>
              {club.data.id}
            </span>

            <span>
              <strong>Club</strong>
              {club.data.name}
            </span>

            <span>
              <strong>Liga</strong>
              {club.data.league}
            </span>

            <span>
              <strong>País</strong>
              {club.data.country}
            </span>
          </div>
        </div>
      )}
    </SectionCard>
  );
}