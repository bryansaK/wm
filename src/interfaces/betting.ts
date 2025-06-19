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
  hot?: boolean;
}

export interface Filters {
  sport?: string;
  pagination? : number;
  desc?: boolean;
  search?: string;
  country?: string;
  minCote: number;
  maxCote: number;
  isActive: boolean;
}

export interface MatchedBetting {
  bets: Betting[]
}

export interface BettingContextType {
  bettingData: Betting[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}
