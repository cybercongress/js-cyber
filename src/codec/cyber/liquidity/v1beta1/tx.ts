/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cyber.liquidity.v1beta1";

/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create
 * liquidity pool tx.
 *
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePool {
  poolCreatorAddress: string;
  /**
   * id of the target pool type, must match the value in the pool. Only
   * pool-type-id 1 is supported.
   */
  poolTypeId: number;
  /** reserve coin pair of the pool to deposit. */
  depositCoins: Coin[];
}

/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {}

/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatch {
  depositorAddress: string;
  /** id of the target pool */
  poolId: Long;
  /** reserve coin pair of the pool to deposit */
  depositCoins: Coin[];
}

/**
 * MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response
 * type.
 */
export interface MsgDepositWithinBatchResponse {}

/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other
 * requests.
 *
 * See:
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatch {
  withdrawerAddress: string;
  /** id of the target pool */
  poolId: Long;
  poolCoin?: Coin;
}

/**
 * MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response
 * type.
 */
export interface MsgWithdrawWithinBatchResponse {}

/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap
 * offer request to the batch of the liquidity pool. Submit swap offer to the
 * liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current
 * `params.swap_fee_rate` and ceil for reservation to pay fees. This request is
 * stacked in the batch of the liquidity pool, is not processed immediately, and
 * is processed in the `endblock` at the same time as other requests. You must
 * request the same fields as the pool. Only the default `swap_type_id` 1 is
 * supported.
 *
 * See: https://github.com/gravity-devs/liquidity/tree/develop/doc
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatch {
  /** address of swap requester */
  swapRequesterAddress: string;
  /**
   * id of swap type, must match the value in the pool. Only `swap_type_id` 1 is
   * supported.
   */
  poolId: Long;
  /** id of swap type. Must match the value in the pool. */
  swapTypeId: number;
  /** offer sdk.coin for the swap request, must match the denom in the pool. */
  offerCoin?: Coin;
  /**
   * denom of demand coin to be exchanged on the swap request, must match the
   * denom in the pool.
   */
  demandCoinDenom: string;
  /**
   * half of offer coin amount * params.swap_fee_rate and ceil for reservation
   * to pay fees.
   */
  offerCoinFee?: Coin;
  /**
   * limit order price for the order, the price is the exchange ratio of X/Y
   * where X is the amount of the first coin and Y is the amount
   * of the second coin when their denoms are sorted alphabetically.
   */
  orderPrice: string;
}

/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponse {}

function createBaseMsgCreatePool(): MsgCreatePool {
  return { poolCreatorAddress: "", poolTypeId: 0, depositCoins: [] };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolCreatorAddress !== "") {
      writer.uint32(10).string(message.poolCreatorAddress);
    }
    if (message.poolTypeId !== 0) {
      writer.uint32(16).uint32(message.poolTypeId);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCreatorAddress = reader.string();
          break;
        case 2:
          message.poolTypeId = reader.uint32();
          break;
        case 4:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      poolCreatorAddress: isSet(object.poolCreatorAddress) ? String(object.poolCreatorAddress) : "",
      poolTypeId: isSet(object.poolTypeId) ? Number(object.poolTypeId) : 0,
      depositCoins: Array.isArray(object?.depositCoins)
        ? object.depositCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.poolCreatorAddress !== undefined && (obj.poolCreatorAddress = message.poolCreatorAddress);
    message.poolTypeId !== undefined && (obj.poolTypeId = Math.round(message.poolTypeId));
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.depositCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(object: I): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.poolCreatorAddress = object.poolCreatorAddress ?? "";
    message.poolTypeId = object.poolTypeId ?? 0;
    message.depositCoins = object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(_: I): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
};

function createBaseMsgDepositWithinBatch(): MsgDepositWithinBatch {
  return { depositorAddress: "", poolId: Long.UZERO, depositCoins: [] };
}

export const MsgDepositWithinBatch = {
  encode(message: MsgDepositWithinBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositorAddress !== "") {
      writer.uint32(10).string(message.depositorAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositWithinBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositWithinBatch {
    return {
      depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      depositCoins: Array.isArray(object?.depositCoins)
        ? object.depositCoins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgDepositWithinBatch): unknown {
    const obj: any = {};
    message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.depositCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositWithinBatch>, I>>(object: I): MsgDepositWithinBatch {
    const message = createBaseMsgDepositWithinBatch();
    message.depositorAddress = object.depositorAddress ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositCoins = object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgDepositWithinBatchResponse(): MsgDepositWithinBatchResponse {
  return {};
}

export const MsgDepositWithinBatchResponse = {
  encode(_: MsgDepositWithinBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositWithinBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositWithinBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDepositWithinBatchResponse {
    return {};
  },

  toJSON(_: MsgDepositWithinBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositWithinBatchResponse>, I>>(
    _: I,
  ): MsgDepositWithinBatchResponse {
    const message = createBaseMsgDepositWithinBatchResponse();
    return message;
  },
};

function createBaseMsgWithdrawWithinBatch(): MsgWithdrawWithinBatch {
  return { withdrawerAddress: "", poolId: Long.UZERO, poolCoin: undefined };
}

export const MsgWithdrawWithinBatch = {
  encode(message: MsgWithdrawWithinBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawWithinBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawerAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawWithinBatch {
    return {
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolCoin: isSet(object.poolCoin) ? Coin.fromJSON(object.poolCoin) : undefined,
    };
  },

  toJSON(message: MsgWithdrawWithinBatch): unknown {
    const obj: any = {};
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolCoin !== undefined &&
      (obj.poolCoin = message.poolCoin ? Coin.toJSON(message.poolCoin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawWithinBatch>, I>>(object: I): MsgWithdrawWithinBatch {
    const message = createBaseMsgWithdrawWithinBatch();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.poolCoin =
      object.poolCoin !== undefined && object.poolCoin !== null
        ? Coin.fromPartial(object.poolCoin)
        : undefined;
    return message;
  },
};

function createBaseMsgWithdrawWithinBatchResponse(): MsgWithdrawWithinBatchResponse {
  return {};
}

export const MsgWithdrawWithinBatchResponse = {
  encode(_: MsgWithdrawWithinBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawWithinBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawWithinBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawWithinBatchResponse {
    return {};
  },

  toJSON(_: MsgWithdrawWithinBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawWithinBatchResponse>, I>>(
    _: I,
  ): MsgWithdrawWithinBatchResponse {
    const message = createBaseMsgWithdrawWithinBatchResponse();
    return message;
  },
};

function createBaseMsgSwapWithinBatch(): MsgSwapWithinBatch {
  return {
    swapRequesterAddress: "",
    poolId: Long.UZERO,
    swapTypeId: 0,
    offerCoin: undefined,
    demandCoinDenom: "",
    offerCoinFee: undefined,
    orderPrice: "",
  };
}

export const MsgSwapWithinBatch = {
  encode(message: MsgSwapWithinBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapRequesterAddress !== "") {
      writer.uint32(10).string(message.swapRequesterAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapTypeId !== 0) {
      writer.uint32(24).uint32(message.swapTypeId);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }
    if (message.offerCoinFee !== undefined) {
      Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderPrice !== "") {
      writer.uint32(58).string(message.orderPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapWithinBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapWithinBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapRequesterAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.swapTypeId = reader.uint32();
          break;
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.demandCoinDenom = reader.string();
          break;
        case 6:
          message.offerCoinFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.orderPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapWithinBatch {
    return {
      swapRequesterAddress: isSet(object.swapRequesterAddress) ? String(object.swapRequesterAddress) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      swapTypeId: isSet(object.swapTypeId) ? Number(object.swapTypeId) : 0,
      offerCoin: isSet(object.offerCoin) ? Coin.fromJSON(object.offerCoin) : undefined,
      demandCoinDenom: isSet(object.demandCoinDenom) ? String(object.demandCoinDenom) : "",
      offerCoinFee: isSet(object.offerCoinFee) ? Coin.fromJSON(object.offerCoinFee) : undefined,
      orderPrice: isSet(object.orderPrice) ? String(object.orderPrice) : "",
    };
  },

  toJSON(message: MsgSwapWithinBatch): unknown {
    const obj: any = {};
    message.swapRequesterAddress !== undefined && (obj.swapRequesterAddress = message.swapRequesterAddress);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.swapTypeId !== undefined && (obj.swapTypeId = Math.round(message.swapTypeId));
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin ? Coin.toJSON(message.offerCoin) : undefined);
    message.demandCoinDenom !== undefined && (obj.demandCoinDenom = message.demandCoinDenom);
    message.offerCoinFee !== undefined &&
      (obj.offerCoinFee = message.offerCoinFee ? Coin.toJSON(message.offerCoinFee) : undefined);
    message.orderPrice !== undefined && (obj.orderPrice = message.orderPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapWithinBatch>, I>>(object: I): MsgSwapWithinBatch {
    const message = createBaseMsgSwapWithinBatch();
    message.swapRequesterAddress = object.swapRequesterAddress ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.swapTypeId = object.swapTypeId ?? 0;
    message.offerCoin =
      object.offerCoin !== undefined && object.offerCoin !== null
        ? Coin.fromPartial(object.offerCoin)
        : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.offerCoinFee =
      object.offerCoinFee !== undefined && object.offerCoinFee !== null
        ? Coin.fromPartial(object.offerCoinFee)
        : undefined;
    message.orderPrice = object.orderPrice ?? "";
    return message;
  },
};

function createBaseMsgSwapWithinBatchResponse(): MsgSwapWithinBatchResponse {
  return {};
}

export const MsgSwapWithinBatchResponse = {
  encode(_: MsgSwapWithinBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapWithinBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapWithinBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSwapWithinBatchResponse {
    return {};
  },

  toJSON(_: MsgSwapWithinBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapWithinBatchResponse>, I>>(_: I): MsgSwapWithinBatchResponse {
    const message = createBaseMsgSwapWithinBatchResponse();
    return message;
  },
};

/** Msg defines the liquidity Msg service. */
export interface Msg {
  /** Submit a create liquidity pool message. */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /** Submit a deposit to the liquidity pool batch. */
  DepositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
  /** Submit a withdraw from the liquidity pool batch. */
  WithdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
  /** Submit a swap to the liquidity pool batch. */
  Swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.DepositWithinBatch = this.DepositWithinBatch.bind(this);
    this.WithdrawWithinBatch = this.WithdrawWithinBatch.bind(this);
    this.Swap = this.Swap.bind(this);
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("cyber.liquidity.v1beta1.Msg", "CreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }

  DepositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse> {
    const data = MsgDepositWithinBatch.encode(request).finish();
    const promise = this.rpc.request("cyber.liquidity.v1beta1.Msg", "DepositWithinBatch", data);
    return promise.then((data) => MsgDepositWithinBatchResponse.decode(new _m0.Reader(data)));
  }

  WithdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse> {
    const data = MsgWithdrawWithinBatch.encode(request).finish();
    const promise = this.rpc.request("cyber.liquidity.v1beta1.Msg", "WithdrawWithinBatch", data);
    return promise.then((data) => MsgWithdrawWithinBatchResponse.decode(new _m0.Reader(data)));
  }

  Swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse> {
    const data = MsgSwapWithinBatch.encode(request).finish();
    const promise = this.rpc.request("cyber.liquidity.v1beta1.Msg", "Swap", data);
    return promise.then((data) => MsgSwapWithinBatchResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
