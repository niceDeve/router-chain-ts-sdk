import { DirectSignResponse } from '@cosmjs/proto-signing'
import { TxRaw } from '@routerprotocol/chain-api/cosmos/tx/v1beta1/tx_pb'
import {
  CosmosChainId,
  ChainId,
  EthereumChainId,
  Msgs,
} from '../../../'
import type Web3 from 'web3'
import { Wallet, WalletDeviceType } from '../../types/enums'
import { TxToSend } from '../../../tx-ts/ethermint/types'

export type onAccountChangeCallback = (account: string) => void
export type onChainIdChangeCallback = () => void

export interface WalletStrategyEthereumOptions {
  ethereumChainId: EthereumChainId
  rpcUrl: string
  wsRpcUrl: string
}

export interface EthereumWalletStrategyArgs {
  chainId: ChainId
  ethereumOptions: WalletStrategyEthereumOptions
  web3: Web3
}

export interface ConcreteCosmosWalletStrategy {
  /**
   * The the accounts from the wallet (addresses)
   */
  getAddresses(): Promise<string[]>

  /**
   * Return the WalletDeviceType connected on the
   * wallet provider (extension, mobile, hardware wallet)
   */
  getWalletDeviceType(): Promise<WalletDeviceType>

  /**
   * Get the PubKey from the wallet
   * in base64 for Cosmos native wallets
   */
  getPubKey(): Promise<string>

  /**
   * Sends Cosmos transaction. Returns a transaction hash
   * @param transaction should implement TransactionConfig
   * @param options
   */
  sendTransaction(transaction: DirectSignResponse | TxRaw): Promise<string>

  isChainIdSupported(chainId?: CosmosChainId): Promise<boolean>

  signTransaction(
    transaction: { txRaw: TxRaw; chainId: string; accountNumber: number },
    address: string,
  ): Promise<DirectSignResponse>
}

export interface CosmosWalletStrategyArguments {
  chainId: CosmosChainId
  endpoints?: { rpc: string; rest: string }
  wallet?: Wallet
}

export interface WalletStrategyArguments
  extends Omit<CosmosWalletStrategyArguments, 'endpoints' | 'chainId'> {
  chainId: ChainId
  ethereumOptions?: WalletStrategyEthereumOptions
  disabledWallets?: Wallet[]
  wallet?: Wallet
}

export interface ConcreteWalletStrategy
  extends Omit<
    ConcreteCosmosWalletStrategy,
    'sendTransaction' | 'signTransaction' | 'isChainIdSupported'
  > {
  /**
   * Sends Cosmos transaction. Returns a transaction hash
   * @param transaction should implement TransactionConfig
   * @param options
   */
  sendTransaction(
    transaction: DirectSignResponse | TxRaw,
    options: { address: string; chainId: ChainId },
  ): Promise<string>

  /**
   * Confirm the address on the wallet
   * @param address address
   */
  confirm(address: string): Promise<string>

  /**
   * Sends Ethereum transaction. Returns a transaction hash
   * @param transaction should implement TransactionConfig
   * @param options
   */
  sendEthereumTransaction(
    transaction: unknown,
    options: { address: string; ethereumChainId: EthereumChainId },
  ): Promise<string>

  /** @deprecated * */
  signTransaction(
    data:
      | string /* EIP712 Typed Data in JSON */
      | { txRaw: TxRaw; accountNumber: number; chainId: string },
    address: string,
  ): Promise<string | DirectSignResponse>

  /**
   * Sign a cosmos transaction using the wallet provider
   *
   * @param transaction
   * @param address - router address
   */
  signCosmosTransaction(
    transaction: { txRaw: TxRaw; accountNumber: number; chainId: string },
    address: string,
  ): Promise<DirectSignResponse>

  /**
   * Sign EIP712 TypedData using the wallet provider
   * @param eip712TypedData
   * @param address - ethereum address
   */
  signEip712TypedData(eip712TypedData: string, address: string): Promise<string>

  simulateTransaction(signedTx: TxToSend, nodeUrl: string) : Promise<any>
  broadcastTransaction(signedTx: TxToSend, nodeUrl: string) : Promise<any>
  /**
   * Will create an EIP712 json for tx according to Tx Msg sent
   * Will sign that EIP712 json and prepare rawtx
   * Will broadcast the signed tx to the network
   * @param ethChainId - Ethereum Chain Id of Router Chain
   * @param cosmosChainId - Cosmos Chain Id of Router Chain
   * @param txMsg -  Transaction Message 
   * @param nodeUrl - LCD node Url 
   * @param memo - String
   */
  simulateSignAndBroadcast(
    {
    ethChainId,
cosmosChainId,
    txMsg,
    nodeUrl,
    memo,
  }: {
   ethChainId: string;
cosmosChainId: string;
    txMsg: Msgs;
    nodeUrl: string;
    memo?: string;
  }
  ): Promise<any>

  getNetworkId(): Promise<string>

  getChainId(): Promise<string>

  getEthereumTransactionReceipt(txHash: string): void

  onAccountChange?(callback: onAccountChangeCallback): void

  onChainIdChange?(callback: onChainIdChangeCallback): void

  cancelOnChainIdChange?(): void

  cancelOnAccountChange?(): void

  cancelAllEvents?(): void

  disconnect?(): Promise<void>

  getWeb3(): Web3
}
