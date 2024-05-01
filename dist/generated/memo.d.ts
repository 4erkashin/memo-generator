import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export declare enum BlockchainType {
    BLOCKCHAIN_TYPE_UNSPECIFIED = 0,
    BLOCKCHAIN_TYPE_EVM = 1,
    BLOCKCHAIN_TYPE_COSMOS = 2,
    UNRECOGNIZED = -1
}
export declare function blockchainTypeFromJSON(object: any): BlockchainType;
export declare function blockchainTypeToJSON(object: BlockchainType): string;
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
export declare const Output: {
    encode(message: Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Output;
    fromJSON(object: any): Output;
    toJSON(message: Output): unknown;
    create<I extends {
        amount?: number | undefined;
        script?: Uint8Array | undefined;
    } & {
        amount?: number | undefined;
        script?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof Output>]: never; }>(base?: I): Output;
    fromPartial<I_1 extends {
        amount?: number | undefined;
        script?: Uint8Array | undefined;
    } & {
        amount?: number | undefined;
        script?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Output>]: never; }>(object: I_1): Output;
};
export declare const DestinationInfo: {
    encode(message: DestinationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DestinationInfo;
    fromJSON(object: any): DestinationInfo;
    toJSON(message: DestinationInfo): unknown;
    create<I extends {
        chainType?: BlockchainType | undefined;
        chainId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
    } & {
        chainType?: BlockchainType | undefined;
        chainId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof DestinationInfo>]: never; }>(base?: I): DestinationInfo;
    fromPartial<I_1 extends {
        chainType?: BlockchainType | undefined;
        chainId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
    } & {
        chainType?: BlockchainType | undefined;
        chainId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DestinationInfo>]: never; }>(object: I_1): DestinationInfo;
};
export declare const Stake: {
    encode(message: Stake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stake;
    fromJSON(object: any): Stake;
    toJSON(message: Stake): unknown;
    create<I extends {
        destinationInfo?: {
            chainType?: BlockchainType | undefined;
            chainId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
        } | undefined;
        refundTo?: {
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        destinationInfo?: ({
            chainType?: BlockchainType | undefined;
            chainId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
        } & {
            chainType?: BlockchainType | undefined;
            chainId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["destinationInfo"], keyof DestinationInfo>]: never; }) | undefined;
        refundTo?: ({
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        }[] & ({
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        } & {
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["refundTo"][number], keyof Output>]: never; })[] & { [K_2 in Exclude<keyof I["refundTo"], keyof {
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Stake>]: never; }>(base?: I): Stake;
    fromPartial<I_1 extends {
        destinationInfo?: {
            chainType?: BlockchainType | undefined;
            chainId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
        } | undefined;
        refundTo?: {
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        destinationInfo?: ({
            chainType?: BlockchainType | undefined;
            chainId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
        } & {
            chainType?: BlockchainType | undefined;
            chainId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
        } & { [K_4 in Exclude<keyof I_1["destinationInfo"], keyof DestinationInfo>]: never; }) | undefined;
        refundTo?: ({
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        }[] & ({
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        } & {
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        } & { [K_5 in Exclude<keyof I_1["refundTo"][number], keyof Output>]: never; })[] & { [K_6 in Exclude<keyof I_1["refundTo"], keyof {
            amount?: number | undefined;
            script?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Stake>]: never; }>(object: I_1): Stake;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
