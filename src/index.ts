import {BlockchainType, Stake } from "./generated/memo";

export function createEvmMemo(address: string, chainId: BigInt): string {
  const stk: Stake = {
    destinationInfo: {
      chainType: BlockchainType.BLOCKCHAIN_TYPE_EVM,
      chainId: bigToUint8Array(chainId),
      address: addressToUint8Array(address),
    },
    refundTo: []
  }

  const bytes = Stake.encode(stk).finish();
  return Buffer.from(bytes).toString('hex');
}

function bigToUint8Array(big: BigInt): Uint8Array {
  let hex = big.toString(16)
  if (hex.length % 2) {
    hex = '0' + hex
  }
  const len = hex.length / 2
  const u8 = new Uint8Array(len)
  var i = 0
  var j = 0
  while (i < len) {
    u8[i] = parseInt(hex.slice(j, j + 2), 16)
    i += 1
    j += 2
  }
  return u8
}

function addressToUint8Array(hex: string): Uint8Array {
  // remove 0x at beginning
  hex = hex.replace("0x", "");
  if (hex.length % 2) {
    hex = '0' + hex
  }
  const len = hex.length / 2
  const u8 = new Uint8Array(len)
  var i = 0
  var j = 0
  while (i < len) {
    u8[i] = parseInt(hex.slice(j, j + 2), 16)
    i += 1
    j += 2
  }
  return u8
}