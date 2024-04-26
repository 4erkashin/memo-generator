/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "finance.lombard.memo";

export enum BlockchainType {
  BLOCKCHAIN_TYPE_UNSPECIFIED = 0,
  BLOCKCHAIN_TYPE_EVM = 1,
  BLOCKCHAIN_TYPE_COSMOS = 2,
  UNRECOGNIZED = -1,
}

export function blockchainTypeFromJSON(object: any): BlockchainType {
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

export function blockchainTypeToJSON(object: BlockchainType): string {
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

export interface Output {
  amount: number;
  script: Uint8Array;
}

export interface DestinationInfo {
  chainType: BlockchainType;
  chainId: Uint8Array;
  address: Uint8Array;
}

export interface Stake {
  destinationInfo: DestinationInfo | undefined;
  refundTo: Output[];
}

function createBaseOutput(): Output {
  return { amount: 0, script: new Uint8Array(0) };
}

export const Output = {
  encode(message: Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.script.length !== 0) {
      writer.uint32(18).bytes(message.script);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Output {
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

          message.amount = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): Output {
    return {
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      script: isSet(object.script) ? bytesFromBase64(object.script) : new Uint8Array(0),
    };
  },

  toJSON(message: Output): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.script.length !== 0) {
      obj.script = base64FromBytes(message.script);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Output>, I>>(base?: I): Output {
    return Output.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Output>, I>>(object: I): Output {
    const message = createBaseOutput();
    message.amount = object.amount ?? 0;
    message.script = object.script ?? new Uint8Array(0);
    return message;
  },
};

function createBaseDestinationInfo(): DestinationInfo {
  return { chainType: 0, chainId: new Uint8Array(0), address: new Uint8Array(0) };
}

export const DestinationInfo = {
  encode(message: DestinationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DestinationInfo {
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

          message.chainType = reader.int32() as any;
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

  fromJSON(object: any): DestinationInfo {
    return {
      chainType: isSet(object.chainType) ? blockchainTypeFromJSON(object.chainType) : 0,
      chainId: isSet(object.chainId) ? bytesFromBase64(object.chainId) : new Uint8Array(0),
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
    };
  },

  toJSON(message: DestinationInfo): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<DestinationInfo>, I>>(base?: I): DestinationInfo {
    return DestinationInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DestinationInfo>, I>>(object: I): DestinationInfo {
    const message = createBaseDestinationInfo();
    message.chainType = object.chainType ?? 0;
    message.chainId = object.chainId ?? new Uint8Array(0);
    message.address = object.address ?? new Uint8Array(0);
    return message;
  },
};

function createBaseStake(): Stake {
  return { destinationInfo: undefined, refundTo: [] };
}

export const Stake = {
  encode(message: Stake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destinationInfo !== undefined) {
      DestinationInfo.encode(message.destinationInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.refundTo) {
      Output.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stake {
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

          message.destinationInfo = DestinationInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.refundTo.push(Output.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Stake {
    return {
      destinationInfo: isSet(object.destinationInfo) ? DestinationInfo.fromJSON(object.destinationInfo) : undefined,
      refundTo: globalThis.Array.isArray(object?.refundTo) ? object.refundTo.map((e: any) => Output.fromJSON(e)) : [],
    };
  },

  toJSON(message: Stake): unknown {
    const obj: any = {};
    if (message.destinationInfo !== undefined) {
      obj.destinationInfo = DestinationInfo.toJSON(message.destinationInfo);
    }
    if (message.refundTo?.length) {
      obj.refundTo = message.refundTo.map((e) => Output.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stake>, I>>(base?: I): Stake {
    return Stake.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stake>, I>>(object: I): Stake {
    const message = createBaseStake();
    message.destinationInfo = (object.destinationInfo !== undefined && object.destinationInfo !== null)
      ? DestinationInfo.fromPartial(object.destinationInfo)
      : undefined;
    message.refundTo = object.refundTo?.map((e) => Output.fromPartial(e)) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
