import { Query as WasmQuery } from '@routerprotocol/chain-api/cosmwasm/wasm/v1/query_pb_service';
import {
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
  QueryContractInfoRequest,
  QueryContractInfoResponse,
  QueryContractHistoryRequest,
  QueryContractHistoryResponse,
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
  QueryCodeRequest,
  QueryCodeResponse,
  QueryCodesRequest,
  QueryCodesResponse,
  QueryContractsByCodeRequest,
  QueryContractsByCodeResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
} from '@routerprotocol/chain-api/cosmwasm/wasm/v1/query_pb';
import BaseConsumer from '../../BaseGrpcConsumer';
import { ChainGrpcWasmTransformer } from '../transformers';
import { PaginationOption } from '../../../types/pagination';
import { paginationRequestFromPagination } from '../../../utils/pagination';
import { ChainModule } from '../types';
import {
  GrpcUnaryRequestException,
  UnspecifiedErrorCode,
} from '../../../exceptions';
import { fromBase64 } from '../../../utils';

/**
 * The Wasm module manages contract state and info.
 * 
 * @group gRPC API
 * 
 * @example
 * To use Wasm methods, initialise a {@link ChainGrpcWasmApi} object to with a gRPC endpoint. An endpoint can be retrieved by using {@link networkEndpoints}.
 * ```ts
 * const endpoint =  getEndpointsForNetwork(Network.Devnet).grpcEndpoint;
 * const client = new ChainGrpcWasmApi(endpoint);
 * const response = await client.fetchContractInfo(<contract-address>);
 * ```
 */
export class ChainGrpcWasmApi extends BaseConsumer {
  protected module: string = ChainModule.Wasm;
  /**
   * Get balance of a contract.
   *
   * @param contractAddress contract address.
   * @returns balance.
   */
  async fetchContractAccountsBalance({
    contractAddress,
    pagination,
  }: {
    contractAddress: string;
    pagination?: PaginationOption;
  }) {
    const request = new QueryAllContractStateRequest();
    request.setAddress(contractAddress);

    const paginationForRequest = paginationRequestFromPagination(pagination);

    if (paginationForRequest) {
      request.setPagination(paginationForRequest);
    }

    try {
      const response = await this.request<
        QueryAllContractStateRequest,
        QueryAllContractStateResponse,
        typeof WasmQuery.AllContractState
      >(request, WasmQuery.AllContractState);
      return ChainGrpcWasmTransformer.allContractStateResponseToContractAccountsBalanceWithPagination(
        response
      );
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }
  /**
   * Get contract info.
   *
   * @param contractAddress contract address.
   * @returns contract info.
   */
  async fetchContractInfo(contractAddress: string) {
    const request = new QueryAllContractStateRequest();
    request.setAddress(contractAddress);

    try {
      const response = await this.request<
        QueryContractInfoRequest,
        QueryContractInfoResponse,
        typeof WasmQuery.ContractInfo
      >(request, WasmQuery.ContractInfo);
      const contractInfo = response.getContractInfo();

      if (!contractInfo) {
        return;
      }

      return ChainGrpcWasmTransformer.contactInfoResponseToContractInfo(
        contractInfo
      );
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }
  /**
   * Get contract's history.
   *
   * @param contractAddress contract address.
   * @returns contract history.
   */
  async fetchContractHistory(contractAddress: string) {
    const request = new QueryContractHistoryRequest();
    request.setAddress(contractAddress);

    try {
      const response = await this.request<
        QueryContractHistoryRequest,
        QueryContractHistoryResponse,
        typeof WasmQuery.ContractHistory
      >(request, WasmQuery.ContractHistory);

      return ChainGrpcWasmTransformer.contactHistoryResponseToContractHistory(
        response
      );
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }

  /**
   * Get contract's state of the query made.
   *
   * @param contractAddress contract address.
   * @param queryData query data.
   * @returns smart contract state data.
   */
  async fetchSmartContractState(
    contractAddress: string,
    query?: string | Uint8Array
  ) {
    const request = new QuerySmartContractStateRequest();
    request.setAddress(contractAddress);

    if (query) {
      request.setQueryData(query);
    }

    try {
      const response = await this.request<
        QuerySmartContractStateRequest,
        QuerySmartContractStateResponse,
        typeof WasmQuery.SmartContractState
      >(request, WasmQuery.SmartContractState);

      const { data } = response.toObject();
      const responseText = fromBase64(data.toString());
      return {
        data: responseText,
      };
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }

  /**
   *
   * @param contractAddress contract address.
   * @param queryData query data.
   * @returns raw contract state data.
   */
  async fetchRawContractState(
    contractAddress: string,
    query?: string | Uint8Array
  ) {
    const request = new QueryRawContractStateRequest();
    request.setAddress(contractAddress);

    if (query) {
      request.setQueryData(query);
    }

    try {
      const response = await this.request<
        QueryRawContractStateRequest,
        QueryRawContractStateResponse,
        typeof WasmQuery.RawContractState
      >(request, WasmQuery.RawContractState);

      return response.toObject();
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }

  async fetchContractCodes(pagination?: PaginationOption) {
    const request = new QueryCodesRequest();

    const paginationForRequest = paginationRequestFromPagination(pagination);

    if (paginationForRequest) {
      request.setPagination(paginationForRequest);
    }

    try {
      const response = await this.request<
        QueryCodesRequest,
        QueryCodesResponse,
        typeof WasmQuery.Codes
      >(request, WasmQuery.Codes);

      return ChainGrpcWasmTransformer.contractCodesResponseToContractCodes(
        response
      );
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }

  async fetchContractCode(codeId: number) {
    const request = new QueryCodeRequest();
    request.setCodeId(codeId);

    try {
      const response = await this.request<
        QueryCodeRequest,
        QueryCodeResponse,
        typeof WasmQuery.Code
      >(request, WasmQuery.Code);

      return ChainGrpcWasmTransformer.contractCodeResponseToContractCode(
        response
      );
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }

  async fetchContractCodeContracts(
    codeId: number,
    pagination?: PaginationOption
  ) {
    const request = new QueryContractsByCodeRequest();
    request.setCodeId(codeId);

    const paginationForRequest = paginationRequestFromPagination(pagination);

    if (paginationForRequest) {
      request.setPagination(paginationForRequest);
    }

    try {
      const response = await this.request<
        QueryContractsByCodeRequest,
        QueryContractsByCodeResponse,
        typeof WasmQuery.ContractsByCode
      >(request, WasmQuery.ContractsByCode);

      return ChainGrpcWasmTransformer.contractByCodeResponseToContractByCode(
        response
      );
    } catch (e) {
      if (e instanceof GrpcUnaryRequestException) {
        throw e;
      }

      throw new GrpcUnaryRequestException(e as Error, {
        code: UnspecifiedErrorCode,
        contextModule: this.module,
      });
    }
  }
}
