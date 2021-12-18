interface WalletInfo {
  Address: string
}

interface CreateWalletRequest {
  Name: string
}

interface CreateWalletResponse {
  Info: WalletInfo
}

interface CreateTransactionRequest {
  TransactionID: string
  Name: string
  From: string
  To: string
  Amount: number
}

type CreateTransactionResponse = Record<string, unknown>

interface GetTransactionRequest {
  TransactionID: string
}

interface TransactionInfo {
  TransactionID: string
  Name: string
  Amount: number
  From: string
  To: string
  CID: string
  ExitCode: string
  CreatedAt: number
  UpdatedAt: number
}

interface GetTransactionResponse {
  Info: TransactionInfo
}

export {
  CreateWalletRequest, CreateWalletResponse,
  CreateTransactionRequest, CreateTransactionResponse,
  GetTransactionRequest, GetTransactionResponse
}
