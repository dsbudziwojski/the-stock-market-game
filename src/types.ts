export interface GameInfo {
  money: number,
  date: string,
  portfolio: Array<{name: string, amount: number, buyPrice: number}>
}

export interface GameProps {
  gameState:GameInfo,
  setGameState: (curGame: GameInfo) => void,
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