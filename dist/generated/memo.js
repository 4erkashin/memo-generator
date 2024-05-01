"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stake = exports.DestinationInfo = exports.Output = exports.blockchainTypeToJSON = exports.blockchainTypeFromJSON = exports.BlockchainType = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const Long = require("long");
exports.protobufPackage = "";
var BlockchainType;
(function (BlockchainType) {
    BlockchainType[BlockchainType["BLOCKCHAIN_TYPE_UNSPECIFIED"] = 0] = "BLOCKCHAIN_TYPE_UNSPECIFIED";
    BlockchainType[BlockchainType["BLOCKCHAIN_TYPE_EVM"] = 1] = "BLOCKCHAIN_TYPE_EVM";
    BlockchainType[BlockchainType["BLOCKCHAIN_TYPE_COSMOS"] = 2] = "BLOCKCHAIN_TYPE_COSMOS";
    BlockchainType[BlockchainType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockchainType || (exports.BlockchainType = BlockchainType = {}));
function blockchainTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCKCHAIN_TYPE_UNSPECIFIED":
            return BlockchainType.BLOCKCHAIN_TYPE_UNSPECIFIED;
        case 1:
        case "BLOCKCHAIN_TYPE_EVM":
            return BlockchainType.BLOCKCHAIN_TYPE_EVM;
        case 2:
        case "BLOCKCHAIN_TYPE_COSMOS":
            return BlockchainType.BLOCKCHAIN_TYPE_COSMOS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockchainType.UNRECOGNIZED;
    }
}
exports.blockchainTypeFromJSON = blockchainTypeFromJSON;
function blockchainTypeToJSON(object) {
    switch (object) {
        case BlockchainType.BLOCKCHAIN_TYPE_UNSPECIFIED:
            return "BLOCKCHAIN_TYPE_UNSPECIFIED";
        case BlockchainType.BLOCKCHAIN_TYPE_EVM:
            return "BLOCKCHAIN_TYPE_EVM";
        case BlockchainType.BLOCKCHAIN_TYPE_COSMOS:
            return "BLOCKCHAIN_TYPE_COSMOS";
        case BlockchainType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockchainTypeToJSON = blockchainTypeToJSON;
function createBaseOutput() {
    return { amount: 0, script: new Uint8Array(0) };
}
exports.Output = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== 0) {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.script.length !== 0) {
            writer.uint32(18).bytes(message.script);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.amount = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.script = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
            script: isSet(object.script) ? bytesFromBase64(object.script) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount !== 0) {
            obj.amount = Math.round(message.amount);
        }
        if (message.script.length !== 0) {
            obj.script = base64FromBytes(message.script);
        }
        return obj;
    },
    create(base) {
        return exports.Output.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseOutput();
        message.amount = object.amount ?? 0;
        message.script = object.script ?? new Uint8Array(0);
        return message;
    },
};
function createBaseDestinationInfo() {
    return { chainType: 0, chainId: new Uint8Array(0), address: new Uint8Array(0) };
}
exports.DestinationInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainType !== 0) {
            writer.uint32(8).int32(message.chainType);
        }
        if (message.chainId.length !== 0) {
            writer.uint32(18).bytes(message.chainId);
        }
        if (message.address.length !== 0) {
            writer.uint32(26).bytes(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestinationInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.chainType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.address = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            chainType: isSet(object.chainType) ? blockchainTypeFromJSON(object.chainType) : 0,
            chainId: isSet(object.chainId) ? bytesFromBase64(object.chainId) : new Uint8Array(0),
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chainType !== 0) {
            obj.chainType = blockchainTypeToJSON(message.chainType);
        }
        if (message.chainId.length !== 0) {
            obj.chainId = base64FromBytes(message.chainId);
        }
        if (message.address.length !== 0) {
            obj.address = base64FromBytes(message.address);
        }
        return obj;
    },
    create(base) {
        return exports.DestinationInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDestinationInfo();
        message.chainType = object.chainType ?? 0;
        message.chainId = object.chainId ?? new Uint8Array(0);
        message.address = object.address ?? new Uint8Array(0);
        return message;
    },
};
function createBaseStake() {
    return { destinationInfo: undefined, refundTo: [] };
}
exports.Stake = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.destinationInfo !== undefined) {
            exports.DestinationInfo.encode(message.destinationInfo, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.refundTo) {
            exports.Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStake();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.destinationInfo = exports.DestinationInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.refundTo.push(exports.Output.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            destinationInfo: isSet(object.destinationInfo) ? exports.DestinationInfo.fromJSON(object.destinationInfo) : undefined,
            refundTo: globalThis.Array.isArray(object?.refundTo) ? object.refundTo.map((e) => exports.Output.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.destinationInfo !== undefined) {
            obj.destinationInfo = exports.DestinationInfo.toJSON(message.destinationInfo);
        }
        if (message.refundTo?.length) {
            obj.refundTo = message.refundTo.map((e) => exports.Output.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Stake.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStake();
        message.destinationInfo = (object.destinationInfo !== undefined && object.destinationInfo !== null)
            ? exports.DestinationInfo.fromPartial(object.destinationInfo)
            : undefined;
        message.refundTo = object.refundTo?.map((e) => exports.Output.fromPartial(e)) || [];
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
