export interface Outcome {
  outcomeId: number;
  odds: number;
  label: string;
}

export interface Betting {
  matchId: number;
  sportName: string;
  flag: string | null;
  tournamentName: string;
  competitor1Name: string;
  competitor1Flag: string | null;
  competitor2Name: string;
  competitor2Flag: string | null;
  startDate: string;
  outcomes: Outcome[];
}