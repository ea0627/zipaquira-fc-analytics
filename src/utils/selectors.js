export const getSortedStandings = (standings) =>
  [...standings]
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) {
        return b.goalDifference - a.goalDifference;
      }
      return b.goalsFor - a.goalsFor;
    })
    .map((team, index) => ({
      ...team,
      position: index + 1,
    }));

export const getTeamContext = (standings, teamName) => {
  const sortedStandings = getSortedStandings(standings);

  const teamIndex = sortedStandings.findIndex(
    (team) => team.team === teamName
  );

  const team = sortedStandings[teamIndex];
  const leader = sortedStandings[0];
  const previousTeam = sortedStandings[teamIndex - 1];

  if (!team) return null;

  return {
    team,
    leader,
    pointsBehindLeader: leader.points - team.points,
    pointsBehindPrevious: previousTeam
      ? previousTeam.points - team.points
      : 0,
  };
};