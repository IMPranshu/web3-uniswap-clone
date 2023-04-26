import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9d473b732a27efa513ede7bdf54eb6df239e8d4e";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-sepolia.g.alchemy.com/v2/LP7UddX2G-q4_3Zvw6VLFBL_0Rgr3aLn",
  },
};