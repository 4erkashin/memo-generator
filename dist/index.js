"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvmMemo = void 0;
const memo_1 = require("./generated/memo");
function createEvmMemo(address, chainId) {
    const stk = {
        destinationInfo: {
            chainType: memo_1.BlockchainType.BLOCKCHAIN_TYPE_EVM,
            chainId: bigToUint8Array(chainId),
            address: addressToUint8Array(address),
        },
        refundTo: []
    };
    const bytes = memo_1.Stake.encode(stk).finish();
    return Buffer.from(bytes).toString('hex');
}
exports.createEvmMemo = createEvmMemo;
function bigToUint8Array(big) {
    let hex = big.toString(16);
    if (hex.length % 2) {
        hex = '0' + hex;
    }
    const len = hex.length / 2;
    const u8 = new Uint8Array(len);
    var i = 0;
    var j = 0;
    while (i < len) {
        u8[i] = parseInt(hex.slice(j, j + 2), 16);
        i += 1;
        j += 2;
    }
    return u8;
}
function addressToUint8Array(hex) {
    // remove 0x at beginning
    hex = hex.replace("0x", "");
    if (hex.length % 2) {
        hex = '0' + hex;
    }
    const len = hex.length / 2;
    const u8 = new Uint8Array(len);
    var i = 0;
    var j = 0;
    while (i < len) {
        u8[i] = parseInt(hex.slice(j, j + 2), 16);
        i += 1;
        j += 2;
    }
    return u8;
}
