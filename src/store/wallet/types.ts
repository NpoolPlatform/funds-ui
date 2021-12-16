interface WalletInfo {
  Address: string
}

interface BalanceInfo {
  Balance: number
  BalanceStr: string
}

interface CreateWalletRequest {
  Name: string
}

interface CreateWalletResponse {
  Info: WalletInfo
}

interface CreateTransactionRequest {
  Name: string
  From: string
  To: string
  Amount: number
}

interface CreateTransactionResponse {
  x: string
}

export {
  CreateWalletRequest, CreateWalletResponse
}
