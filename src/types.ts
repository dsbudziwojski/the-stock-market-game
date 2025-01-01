export interface GameInfo {
  money: number,
  date: string
  portfolio: Map<string, Array<{amount: number, buyPrice: number}>>,
}


export interface GameProps {
  gameState:GameInfo,
  setGameState: (curGame: GameInfo) => void,
  resetGameState: () => void,
}

export interface Stock {
  afterHours: number,
  close: number,
  date: string,
  high: number,
  low: number,
  open: number,
  preMarket: number,
  volume: number
}

export interface StockInfo {
  name: string;
  ticker: string;
  currency: string;
  market: string;
  exchange: string;
  id: string;
}