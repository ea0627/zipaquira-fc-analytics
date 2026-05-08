import clubFallback from "@/data/club";

export async function getClubFromInternalApi() {
  const response = await fetch("/api/hattrick/club");

  if (!response.ok) {
    throw new Error("Error fetching club data from internal API");
  }

  return response.json();
}

export async function getClubWithFallback() {
  try {
    const club = await getClubFromInternalApi();

    return {
      source: "api",
      data: club,
    };
  } catch (error) {
    console.error("Using local club fallback:", error);

    return {
      source: "fallback",
      data: {
        id: "540521",
        name: clubFallback.name,
        league: clubFallback.league,
        country: clubFallback.country,
      },
    };
  }
}