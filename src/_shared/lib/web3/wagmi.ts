import { mainnet, sepolia, Chain as WagmiChain } from "wagmi";
import {
  arbitrum,
  goerli,
  bsc,
  optimism,
  polygon,
  zkSync,
  avalanche,
  bscTestnet
} from "viem/chains";

import { Chain } from "./chains";

const ChainWagmiMap: Record<Chain, WagmiChain> = {
  [Chain.ARBITRUM]: arbitrum,
  [Chain.BSC]: bsc,
  [Chain.OPTIMISM]: optimism,
  [Chain.POLYGON]: polygon,
  [Chain.ZKSYNC]: zkSync,
  [Chain.AVALANCHE]: avalanche,
  [Chain.ETHEREUM]: mainnet,
  [Chain.ETH_GOERLI]: goerli,
  [Chain.ETH_SEPOLIA]: sepolia,
  [Chain.BSCTEST]: bscTestnet
};

export const toWagmiChain = (chain: Chain) => ChainWagmiMap[chain];
