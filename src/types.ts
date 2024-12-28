export interface GameInfo {
  money: number,
  date: string,
  portfolio: Array<{name: string, amount: number, buyPrice: number}>
}

export interface GameProps {
  gameState:GameInfo,
  setGameState: (curGame: GameInfo) => void,
}