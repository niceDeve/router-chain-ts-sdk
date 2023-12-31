import BaseRestConsumer from '../../BaseRestConsumer'
import {
  BlockLatestRestResponse,
  NodeInfoRestResponse,
} from '../types/custom/tendermint-rest';

/**
 * @group REST API
 */
export class ChainRestTendermintApi extends BaseRestConsumer {
         /**
          * Fetches latest block.
          */
         async fetchLatestBlock(): Promise<BlockLatestRestResponse['block']> {
           const { data } = (await this.client.get(
             `cosmos/base/tendermint/v1beta1/blocks/latest`
           )) as { data: BlockLatestRestResponse };

           return data.block;
         }
         /**
          * Fetches node info.
          */
         async fetchNodeInfo(): Promise<{
           nodeInfo: NodeInfoRestResponse['default_node_info'];
           applicationVersion: NodeInfoRestResponse['application_version'];
         }> {
           const { data } = (await this.client.get(
             `cosmos/base/tendermint/v1beta1/node_info`
           )) as { data: NodeInfoRestResponse };

           return {
             nodeInfo: data.default_node_info,
             applicationVersion: data.application_version,
           };
         }
       }
