export async function getClubFromInternalApi() {
  const response = await fetch("/api/hattrick/club");

  if (!response.ok) {
    throw new Error("Error fetching club data from internal API");
  }

  return response.json();
}