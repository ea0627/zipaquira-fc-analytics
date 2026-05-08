export function adaptClub(data) {
  const team = data.HattrickData.Team;

  return {
    id: team.TeamID,
    name: team.TeamName,
    league: team.LeagueName,
    country: team.CountryName,
  };
}