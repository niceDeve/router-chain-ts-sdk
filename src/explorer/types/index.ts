export interface KeyValueString {
  [key: string]: string;
}

export interface KeyValueAny {
  [key: string]: any;
}

export interface TransactionType {
  _id: string;
  height: number;
  sender: string;
  status: string;
  receiver: string;
  timestamp: number;
  gasWanted: string;
  gasUsed: string;
  fee: string;
  event_logs: string;
  success: string;
  txnRaw: string;
  rawLog: string;
  routePrice: string;
}

export interface BlockType {
  _id: number;
  hash: string;
  proposer: string;
  txn_count: number;
  timestamp: number;
  total_gas: string;
  block_reward: string;
  processed: number;
  transactions: TransactionType[];
}

export interface PaginatedBlock {
  totalRecords: number;
  blocks: BlockType[];
}

export interface PaginatedTransaction {
  totalRecords: number;
  transactions: TransactionType[];
}

export interface EventHistory {
  name: string;
  height: number;
  timestamp: number;
  txnHash: string;
}

export interface HistoryStatusType {
  status: string;
  txnHash: string;
  timestamp: number;
}

export interface EventSignatureType {
  validator: string;
  txnHash: string;
  timestamp: number;
  blockHeight: number;
  signature: string;
  ethSigner: string;
}

export interface ContractExecutionType {
  destContractAddress: string;
  status: boolean;
  payload: string;
  requestPayload: string;
  responsePayload: string;
}

export interface CrosschainRouterPacket {
  handler: string;
  payload: string;
}

export interface EvmContractMetadata {
  destGasLimit: number;
  destGasPrice: number;
  ackGasLimit: number;
  ackGasPrice: number;
  ackType: number;
  isReadCall: boolean;
  asmAddress: string;
}

export interface EventCrosschainAckReceiptCreated {
  attestationId: string[];
  ackReceiptSrcChainId: string;
  ackReceiptIdentifier: number;
  ackReceiptBlockHeight: number;
  ackReceiptTxHash: string;
  relayerRouterAddress: string;
  requestIdentifier: number;
  status: string;
}

export interface AckReceiptRequest {
  ackReceipt: EventCrosschainAckReceiptCreated;
  historyStatus: HistoryStatusType[];
  relayerFeeInRoute: string;
  refundFeeInRoute: string;
  ackReceiptKey: string;
  status: string;
  claimHash: string;
}

export interface EventCrosschainAckRequestCreated {
  AttestationId: string;
  AckSrcChainId: string;
  AckRequestIdentifier: number;
  BlockHeight: number;
  DestTxHash: string;
  RelayerRouterAddress: string;
  AckDestChainId: string;
  RequestSender: string;
  RequestIdentifier: number;
  AckSrcChainType: number;
  AckDestChainType: number;
  ExecData: string;
  ExecStatus: Boolean;
  Status: string;
}

export interface EventAttestationVote {
  attestationType: number;
  attestationId: string;
  chainType: number;
  chainId: string;
  eventNonce: number;
  voter: string;
}

export interface EventCrosschainAckRequestConfirm {
  ackSrcChainId: string;
  ackRequestIdentifier: number;
  claimHash: string;
  ethSigner: string;
  signature: string;
  orchestrator: string;
}

export interface AckRequest {
  eventAckRequestCreated: EventCrosschainAckRequestCreated;
  eventAttestationVote: EventAttestationVote[];
  eventAckRequestConfirm: EventCrosschainAckRequestConfirm;
  status: string;
  historyStatus: HistoryStatusType[];
  voter: string[];
  claimHash: string;
  txFeeInRoute: string;
  chainType: string;
  chainId: string;
  requestIdentifier: number;
  customFormAttestationId: string;
  ackReceiptRequest: AckReceiptRequest;
  ackGasLimit: number;
  ackGasPrice: number;
  feePayer: string;
}

export interface CrosschainType {
  id: string;
  attestationId: string;
  srcChainId: string;
  requestIdentifier: number;
  blockHeight: number;
  sourceTxHash: string;
  srcTimestamp: number;
  srcTxOrigin: string;
  routeAmount: string;
  routeRecipient: string;
  destChainId: string;
  requestSender: string;
  requestMetadata: EvmContractMetadata;
  requestPacket: CrosschainRouterPacket;
  srcChainType: string;
  destChainType: string;
  status: string;
  eventHistory: EventHistory[];
  historyStatus: HistoryStatusType[];
  eventConfirmSignatures: EventSignatureType[];
  voter: string;
  ackRequest: AckRequest;
  customFormAttestationId: string;
  destinationTxHash: string;
  createdAt: number;
  updatedAt: number;
  relayerFee: string;
}

export interface PaginatedCrosschain {
  totalRecords: number;
  crossTalks: CrosschainType[];
}
