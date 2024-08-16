/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { MsgDepositWithinBatch, MsgSwapWithinBatch, MsgWithdrawWithinBatch } from "./tx";

export const protobufPackage = "cyber.liquidity.v1beta1";

/**
 * Structure for the pool type to distinguish the characteristics of the reserve
 * pools.
 */
export interface PoolType {
  /**
   * This is the id of the pool_type that is used as pool_type_id for pool
   * creation. In this version, only pool-type-id 1 is supported.
   * {"id":1,"name":"ConstantProductLiquidityPool","min_reserve_coin_num":2,"max_reserve_coin_num":2,"description":""}
   */
  id: number;
  /** name of the pool type. */
  name: string;
  /**
   * minimum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
   * are supported.
   */
  minReserveCoinNum: number;
  /**
   * maximum number of reserveCoins for LiquidityPoolType, only 2 reserve coins
   * are supported.
   */
  maxReserveCoinNum: number;
  /** description of the pool type. */
  description: string;
}

/** Params defines the parameters for the liquidity module. */
export interface Params {
  /** list of available pool types */
  poolTypes: PoolType[];
  /**
   * Minimum number of coins to be deposited to the liquidity pool on pool
   * creation.
   */
  minInitDepositAmount: string;
  /** Initial mint amount of pool coins upon pool creation. */
  initPoolCoinMintAmount: string;
  /**
   * Limit the size of each liquidity pool to minimize risk. In development, set
   * to 0 for no limit. In production, set a limit.
   */
  maxReserveCoinAmount: string;
  /** Fee paid to create a Liquidity Pool. Set a fee to prevent spamming. */
  poolCreationFee: Coin[];
  /** Swap fee rate for every executed swap. */
  swapFeeRate: string;
  /** Reserve coin withdrawal with less proportion by withdrawFeeRate. */
  withdrawFeeRate: string;
  /** Maximum ratio of reserve coins that can be ordered at a swap order. */
  maxOrderAmountRatio: string;
  /** The smallest unit batch height for every liquidity pool. */
  unitBatchHeight: number;
  /**
   * Circuit breaker enables or disables transaction messages in liquidity
   * module.
   */
  circuitBreakerEnabled: boolean;
}

/** Pool defines the liquidity pool that contains pool information. */
export interface Pool {
  /** id of the pool */
  id: Long;
  /** id of the pool_type */
  typeId: number;
  /** denoms of reserve coin pair of the pool */
  reserveCoinDenoms: string[];
  /** reserve account address of the pool */
  reserveAccountAddress: string;
  /** denom of pool coin of the pool */
  poolCoinDenom: string;
}

/**
 * Metadata for the state of each pool for invariant checking after genesis
 * export or import.
 */
export interface PoolMetadata {
  /** id of the pool */
  poolId: Long;
  /** pool coin issued at the pool */
  poolCoinTotalSupply?: Coin;
  /** reserve coins deposited in the pool */
  reserveCoins: Coin[];
}

/**
 * PoolBatch defines the batch or batches of a given liquidity pool that
 * contains indexes of deposit, withdraw, and swap messages. Index param
 * increments by 1 if the pool id is same.
 */
export interface PoolBatch {
  /** id of the pool */
  poolId: Long;
  /** index of this batch */
  index: Long;
  /** height where this batch is started */
  beginHeight: Long;
  /** last index of DepositMsgStates */
  depositMsgIndex: Long;
  /** last index of WithdrawMsgStates */
  withdrawMsgIndex: Long;
  /** last index of SwapMsgStates */
  swapMsgIndex: Long;
  /** true if executed, false if not executed */
  executed: boolean;
}

/**
 * DepositMsgState defines the state of deposit message that contains state
 * information as it is processed in the next batch or batches.
 */
export interface DepositMsgState {
  /** height where this message is appended to the batch */
  msgHeight: Long;
  /** index of this deposit message in this liquidity pool */
  msgIndex: Long;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  toBeDeleted: boolean;
  /** MsgDepositWithinBatch */
  msg?: MsgDepositWithinBatch;
}

/**
 * WithdrawMsgState defines the state of the withdraw message that contains
 * state information as the message is processed in the next batch or batches.
 */
export interface WithdrawMsgState {
  /** height where this message is appended to the batch */
  msgHeight: Long;
  /** index of this withdraw message in this liquidity pool */
  msgIndex: Long;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  toBeDeleted: boolean;
  /** MsgWithdrawWithinBatch */
  msg?: MsgWithdrawWithinBatch;
}

/**
 * SwapMsgState defines the state of the swap message that contains state
 * information as the message is processed in the next batch or batches.
 */
export interface SwapMsgState {
  /** height where this message is appended to the batch */
  msgHeight: Long;
  /** index of this swap message in this liquidity pool */
  msgIndex: Long;
  /** true if executed on this batch, false if not executed */
  executed: boolean;
  /** true if executed successfully on this batch, false if failed */
  succeeded: boolean;
  /** true if ready to be deleted on kvstore, false if not ready to be deleted */
  toBeDeleted: boolean;
  /**
   * swap orders are cancelled when current height is equal to or higher than
   * ExpiryHeight
   */
  orderExpiryHeight: Long;
  /** offer coin exchanged until now */
  exchangedOfferCoin?: Coin;
  /** offer coin currently remaining to be exchanged */
  remainingOfferCoin?: Coin;
  /** reserve fee for pays fee in half offer coin */
  reservedOfferCoinFee?: Coin;
  /** MsgSwapWithinBatch */
  msg?: MsgSwapWithinBatch;
}

function createBasePoolType(): PoolType {
  return { id: 0, name: "", minReserveCoinNum: 0, maxReserveCoinNum: 0, description: "" };
}

export const PoolType = {
  encode(message: PoolType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.minReserveCoinNum !== 0) {
      writer.uint32(24).uint32(message.minReserveCoinNum);
    }
    if (message.maxReserveCoinNum !== 0) {
      writer.uint32(32).uint32(message.maxReserveCoinNum);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.minReserveCoinNum = reader.uint32();
          break;
        case 4:
          message.maxReserveCoinNum = reader.uint32();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      minReserveCoinNum: isSet(object.minReserveCoinNum) ? Number(object.minReserveCoinNum) : 0,
      maxReserveCoinNum: isSet(object.maxReserveCoinNum) ? Number(object.maxReserveCoinNum) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: PoolType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.minReserveCoinNum !== undefined && (obj.minReserveCoinNum = Math.round(message.minReserveCoinNum));
    message.maxReserveCoinNum !== undefined && (obj.maxReserveCoinNum = Math.round(message.maxReserveCoinNum));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolType>, I>>(object: I): PoolType {
    const message = createBasePoolType();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.minReserveCoinNum = object.minReserveCoinNum ?? 0;
    message.maxReserveCoinNum = object.maxReserveCoinNum ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return {
    poolTypes: [],
    minInitDepositAmount: "",
    initPoolCoinMintAmount: "",
    maxReserveCoinAmount: "",
    poolCreationFee: [],
    swapFeeRate: "",
    withdrawFeeRate: "",
    maxOrderAmountRatio: "",
    unitBatchHeight: 0,
    circuitBreakerEnabled: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolTypes) {
      PoolType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minInitDepositAmount !== "") {
      writer.uint32(18).string(message.minInitDepositAmount);
    }
    if (message.initPoolCoinMintAmount !== "") {
      writer.uint32(26).string(message.initPoolCoinMintAmount);
    }
    if (message.maxReserveCoinAmount !== "") {
      writer.uint32(34).string(message.maxReserveCoinAmount);
    }
    for (const v of message.poolCreationFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapFeeRate !== "") {
      writer.uint32(50).string(message.swapFeeRate);
    }
    if (message.withdrawFeeRate !== "") {
      writer.uint32(58).string(message.withdrawFeeRate);
    }
    if (message.maxOrderAmountRatio !== "") {
      writer.uint32(66).string(message.maxOrderAmountRatio);
    }
    if (message.unitBatchHeight !== 0) {
      writer.uint32(72).uint32(message.unitBatchHeight);
    }
    if (message.circuitBreakerEnabled === true) {
      writer.uint32(80).bool(message.circuitBreakerEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTypes.push(PoolType.decode(reader, reader.uint32()));
          break;
        case 2:
          message.minInitDepositAmount = reader.string();
          break;
        case 3:
          message.initPoolCoinMintAmount = reader.string();
          break;
        case 4:
          message.maxReserveCoinAmount = reader.string();
          break;
        case 5:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.swapFeeRate = reader.string();
          break;
        case 7:
          message.withdrawFeeRate = reader.string();
          break;
        case 8:
          message.maxOrderAmountRatio = reader.string();
          break;
        case 9:
          message.unitBatchHeight = reader.uint32();
          break;
        case 10:
          message.circuitBreakerEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      poolTypes: Array.isArray(object?.poolTypes) ? object.poolTypes.map((e: any) => PoolType.fromJSON(e)) : [],
      minInitDepositAmount: isSet(object.minInitDepositAmount) ? String(object.minInitDepositAmount) : "",
      initPoolCoinMintAmount: isSet(object.initPoolCoinMintAmount) ? String(object.initPoolCoinMintAmount) : "",
      maxReserveCoinAmount: isSet(object.maxReserveCoinAmount) ? String(object.maxReserveCoinAmount) : "",
      poolCreationFee: Array.isArray(object?.poolCreationFee)
        ? object.poolCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
      swapFeeRate: isSet(object.swapFeeRate) ? String(object.swapFeeRate) : "",
      withdrawFeeRate: isSet(object.withdrawFeeRate) ? String(object.withdrawFeeRate) : "",
      maxOrderAmountRatio: isSet(object.maxOrderAmountRatio) ? String(object.maxOrderAmountRatio) : "",
      unitBatchHeight: isSet(object.unitBatchHeight) ? Number(object.unitBatchHeight) : 0,
      circuitBreakerEnabled: isSet(object.circuitBreakerEnabled) ? Boolean(object.circuitBreakerEnabled) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.poolTypes) {
      obj.poolTypes = message.poolTypes.map((e) => e ? PoolType.toJSON(e) : undefined);
    } else {
      obj.poolTypes = [];
    }
    message.minInitDepositAmount !== undefined && (obj.minInitDepositAmount = message.minInitDepositAmount);
    message.initPoolCoinMintAmount !== undefined && (obj.initPoolCoinMintAmount = message.initPoolCoinMintAmount);
    message.maxReserveCoinAmount !== undefined && (obj.maxReserveCoinAmount = message.maxReserveCoinAmount);
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.poolCreationFee = [];
    }
    message.swapFeeRate !== undefined && (obj.swapFeeRate = message.swapFeeRate);
    message.withdrawFeeRate !== undefined && (obj.withdrawFeeRate = message.withdrawFeeRate);
    message.maxOrderAmountRatio !== undefined && (obj.maxOrderAmountRatio = message.maxOrderAmountRatio);
    message.unitBatchHeight !== undefined && (obj.unitBatchHeight = Math.round(message.unitBatchHeight));
    message.circuitBreakerEnabled !== undefined && (obj.circuitBreakerEnabled = message.circuitBreakerEnabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.poolTypes = object.poolTypes?.map((e) => PoolType.fromPartial(e)) || [];
    message.minInitDepositAmount = object.minInitDepositAmount ?? "";
    message.initPoolCoinMintAmount = object.initPoolCoinMintAmount ?? "";
    message.maxReserveCoinAmount = object.maxReserveCoinAmount ?? "";
    message.poolCreationFee = object.poolCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    message.swapFeeRate = object.swapFeeRate ?? "";
    message.withdrawFeeRate = object.withdrawFeeRate ?? "";
    message.maxOrderAmountRatio = object.maxOrderAmountRatio ?? "";
    message.unitBatchHeight = object.unitBatchHeight ?? 0;
    message.circuitBreakerEnabled = object.circuitBreakerEnabled ?? false;
    return message;
  },
};

function createBasePool(): Pool {
  return { id: Long.UZERO, typeId: 0, reserveCoinDenoms: [], reserveAccountAddress: "", poolCoinDenom: "" };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.typeId !== 0) {
      writer.uint32(16).uint32(message.typeId);
    }
    for (const v of message.reserveCoinDenoms) {
      writer.uint32(26).string(v!);
    }
    if (message.reserveAccountAddress !== "") {
      writer.uint32(34).string(message.reserveAccountAddress);
    }
    if (message.poolCoinDenom !== "") {
      writer.uint32(42).string(message.poolCoinDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.typeId = reader.uint32();
          break;
        case 3:
          message.reserveCoinDenoms.push(reader.string());
          break;
        case 4:
          message.reserveAccountAddress = reader.string();
          break;
        case 5:
          message.poolCoinDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      typeId: isSet(object.typeId) ? Number(object.typeId) : 0,
      reserveCoinDenoms: Array.isArray(object?.reserveCoinDenoms)
        ? object.reserveCoinDenoms.map((e: any) => String(e))
        : [],
      reserveAccountAddress: isSet(object.reserveAccountAddress) ? String(object.reserveAccountAddress) : "",
      poolCoinDenom: isSet(object.poolCoinDenom) ? String(object.poolCoinDenom) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.typeId !== undefined && (obj.typeId = Math.round(message.typeId));
    if (message.reserveCoinDenoms) {
      obj.reserveCoinDenoms = message.reserveCoinDenoms.map((e) => e);
    } else {
      obj.reserveCoinDenoms = [];
    }
    message.reserveAccountAddress !== undefined && (obj.reserveAccountAddress = message.reserveAccountAddress);
    message.poolCoinDenom !== undefined && (obj.poolCoinDenom = message.poolCoinDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.typeId = object.typeId ?? 0;
    message.reserveCoinDenoms = object.reserveCoinDenoms?.map((e) => e) || [];
    message.reserveAccountAddress = object.reserveAccountAddress ?? "";
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    return message;
  },
};

function createBasePoolMetadata(): PoolMetadata {
  return { poolId: Long.UZERO, poolCoinTotalSupply: undefined, reserveCoins: [] };
}

export const PoolMetadata = {
  encode(message: PoolMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.poolCoinTotalSupply !== undefined) {
      Coin.encode(message.poolCoinTotalSupply, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reserveCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.poolCoinTotalSupply = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reserveCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolMetadata {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolCoinTotalSupply: isSet(object.poolCoinTotalSupply) ? Coin.fromJSON(object.poolCoinTotalSupply) : undefined,
      reserveCoins: Array.isArray(object?.reserveCoins) ? object.reserveCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: PoolMetadata): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolCoinTotalSupply !== undefined &&
      (obj.poolCoinTotalSupply = message.poolCoinTotalSupply ? Coin.toJSON(message.poolCoinTotalSupply) : undefined);
    if (message.reserveCoins) {
      obj.reserveCoins = message.reserveCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reserveCoins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolMetadata>, I>>(object: I): PoolMetadata {
    const message = createBasePoolMetadata();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.poolCoinTotalSupply = (object.poolCoinTotalSupply !== undefined && object.poolCoinTotalSupply !== null)
      ? Coin.fromPartial(object.poolCoinTotalSupply)
      : undefined;
    message.reserveCoins = object.reserveCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBasePoolBatch(): PoolBatch {
  return {
    poolId: Long.UZERO,
    index: Long.UZERO,
    beginHeight: Long.ZERO,
    depositMsgIndex: Long.UZERO,
    withdrawMsgIndex: Long.UZERO,
    swapMsgIndex: Long.UZERO,
    executed: false,
  };
}

export const PoolBatch = {
  encode(message: PoolBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.index.isZero()) {
      writer.uint32(16).uint64(message.index);
    }
    if (!message.beginHeight.isZero()) {
      writer.uint32(24).int64(message.beginHeight);
    }
    if (!message.depositMsgIndex.isZero()) {
      writer.uint32(32).uint64(message.depositMsgIndex);
    }
    if (!message.withdrawMsgIndex.isZero()) {
      writer.uint32(40).uint64(message.withdrawMsgIndex);
    }
    if (!message.swapMsgIndex.isZero()) {
      writer.uint32(48).uint64(message.swapMsgIndex);
    }
    if (message.executed === true) {
      writer.uint32(56).bool(message.executed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.index = reader.uint64() as Long;
          break;
        case 3:
          message.beginHeight = reader.int64() as Long;
          break;
        case 4:
          message.depositMsgIndex = reader.uint64() as Long;
          break;
        case 5:
          message.withdrawMsgIndex = reader.uint64() as Long;
          break;
        case 6:
          message.swapMsgIndex = reader.uint64() as Long;
          break;
        case 7:
          message.executed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolBatch {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      beginHeight: isSet(object.beginHeight) ? Long.fromValue(object.beginHeight) : Long.ZERO,
      depositMsgIndex: isSet(object.depositMsgIndex) ? Long.fromValue(object.depositMsgIndex) : Long.UZERO,
      withdrawMsgIndex: isSet(object.withdrawMsgIndex) ? Long.fromValue(object.withdrawMsgIndex) : Long.UZERO,
      swapMsgIndex: isSet(object.swapMsgIndex) ? Long.fromValue(object.swapMsgIndex) : Long.UZERO,
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
    };
  },

  toJSON(message: PoolBatch): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    message.beginHeight !== undefined && (obj.beginHeight = (message.beginHeight || Long.ZERO).toString());
    message.depositMsgIndex !== undefined && (obj.depositMsgIndex = (message.depositMsgIndex || Long.UZERO).toString());
    message.withdrawMsgIndex !== undefined &&
      (obj.withdrawMsgIndex = (message.withdrawMsgIndex || Long.UZERO).toString());
    message.swapMsgIndex !== undefined && (obj.swapMsgIndex = (message.swapMsgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolBatch>, I>>(object: I): PoolBatch {
    const message = createBasePoolBatch();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.index = (object.index !== undefined && object.index !== null) ? Long.fromValue(object.index) : Long.UZERO;
    message.beginHeight = (object.beginHeight !== undefined && object.beginHeight !== null)
      ? Long.fromValue(object.beginHeight)
      : Long.ZERO;
    message.depositMsgIndex = (object.depositMsgIndex !== undefined && object.depositMsgIndex !== null)
      ? Long.fromValue(object.depositMsgIndex)
      : Long.UZERO;
    message.withdrawMsgIndex = (object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null)
      ? Long.fromValue(object.withdrawMsgIndex)
      : Long.UZERO;
    message.swapMsgIndex = (object.swapMsgIndex !== undefined && object.swapMsgIndex !== null)
      ? Long.fromValue(object.swapMsgIndex)
      : Long.UZERO;
    message.executed = object.executed ?? false;
    return message;
  },
};

function createBaseDepositMsgState(): DepositMsgState {
  return {
    msgHeight: Long.ZERO,
    msgIndex: Long.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
    msg: undefined,
  };
}

export const DepositMsgState = {
  encode(message: DepositMsgState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.msgHeight.isZero()) {
      writer.uint32(8).int64(message.msgHeight);
    }
    if (!message.msgIndex.isZero()) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.toBeDeleted === true) {
      writer.uint32(40).bool(message.toBeDeleted);
    }
    if (message.msg !== undefined) {
      MsgDepositWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositMsgState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositMsgState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHeight = reader.int64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.toBeDeleted = reader.bool();
          break;
        case 6:
          message.msg = MsgDepositWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositMsgState {
    return {
      msgHeight: isSet(object.msgHeight) ? Long.fromValue(object.msgHeight) : Long.ZERO,
      msgIndex: isSet(object.msgIndex) ? Long.fromValue(object.msgIndex) : Long.UZERO,
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
      toBeDeleted: isSet(object.toBeDeleted) ? Boolean(object.toBeDeleted) : false,
      msg: isSet(object.msg) ? MsgDepositWithinBatch.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: DepositMsgState): unknown {
    const obj: any = {};
    message.msgHeight !== undefined && (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.toBeDeleted !== undefined && (obj.toBeDeleted = message.toBeDeleted);
    message.msg !== undefined && (obj.msg = message.msg ? MsgDepositWithinBatch.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositMsgState>, I>>(object: I): DepositMsgState {
    const message = createBaseDepositMsgState();
    message.msgHeight = (object.msgHeight !== undefined && object.msgHeight !== null)
      ? Long.fromValue(object.msgHeight)
      : Long.ZERO;
    message.msgIndex = (object.msgIndex !== undefined && object.msgIndex !== null)
      ? Long.fromValue(object.msgIndex)
      : Long.UZERO;
    message.executed = object.executed ?? false;
    message.succeeded = object.succeeded ?? false;
    message.toBeDeleted = object.toBeDeleted ?? false;
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? MsgDepositWithinBatch.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseWithdrawMsgState(): WithdrawMsgState {
  return {
    msgHeight: Long.ZERO,
    msgIndex: Long.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
    msg: undefined,
  };
}

export const WithdrawMsgState = {
  encode(message: WithdrawMsgState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.msgHeight.isZero()) {
      writer.uint32(8).int64(message.msgHeight);
    }
    if (!message.msgIndex.isZero()) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.toBeDeleted === true) {
      writer.uint32(40).bool(message.toBeDeleted);
    }
    if (message.msg !== undefined) {
      MsgWithdrawWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawMsgState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawMsgState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHeight = reader.int64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.toBeDeleted = reader.bool();
          break;
        case 6:
          message.msg = MsgWithdrawWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawMsgState {
    return {
      msgHeight: isSet(object.msgHeight) ? Long.fromValue(object.msgHeight) : Long.ZERO,
      msgIndex: isSet(object.msgIndex) ? Long.fromValue(object.msgIndex) : Long.UZERO,
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
      toBeDeleted: isSet(object.toBeDeleted) ? Boolean(object.toBeDeleted) : false,
      msg: isSet(object.msg) ? MsgWithdrawWithinBatch.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: WithdrawMsgState): unknown {
    const obj: any = {};
    message.msgHeight !== undefined && (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.toBeDeleted !== undefined && (obj.toBeDeleted = message.toBeDeleted);
    message.msg !== undefined && (obj.msg = message.msg ? MsgWithdrawWithinBatch.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawMsgState>, I>>(object: I): WithdrawMsgState {
    const message = createBaseWithdrawMsgState();
    message.msgHeight = (object.msgHeight !== undefined && object.msgHeight !== null)
      ? Long.fromValue(object.msgHeight)
      : Long.ZERO;
    message.msgIndex = (object.msgIndex !== undefined && object.msgIndex !== null)
      ? Long.fromValue(object.msgIndex)
      : Long.UZERO;
    message.executed = object.executed ?? false;
    message.succeeded = object.succeeded ?? false;
    message.toBeDeleted = object.toBeDeleted ?? false;
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? MsgWithdrawWithinBatch.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

function createBaseSwapMsgState(): SwapMsgState {
  return {
    msgHeight: Long.ZERO,
    msgIndex: Long.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
    orderExpiryHeight: Long.ZERO,
    exchangedOfferCoin: undefined,
    remainingOfferCoin: undefined,
    reservedOfferCoinFee: undefined,
    msg: undefined,
  };
}

export const SwapMsgState = {
  encode(message: SwapMsgState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.msgHeight.isZero()) {
      writer.uint32(8).int64(message.msgHeight);
    }
    if (!message.msgIndex.isZero()) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    if (message.executed === true) {
      writer.uint32(24).bool(message.executed);
    }
    if (message.succeeded === true) {
      writer.uint32(32).bool(message.succeeded);
    }
    if (message.toBeDeleted === true) {
      writer.uint32(40).bool(message.toBeDeleted);
    }
    if (!message.orderExpiryHeight.isZero()) {
      writer.uint32(48).int64(message.orderExpiryHeight);
    }
    if (message.exchangedOfferCoin !== undefined) {
      Coin.encode(message.exchangedOfferCoin, writer.uint32(58).fork()).ldelim();
    }
    if (message.remainingOfferCoin !== undefined) {
      Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
    }
    if (message.reservedOfferCoinFee !== undefined) {
      Coin.encode(message.reservedOfferCoinFee, writer.uint32(74).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapMsgState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapMsgState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHeight = reader.int64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.toBeDeleted = reader.bool();
          break;
        case 6:
          message.orderExpiryHeight = reader.int64() as Long;
          break;
        case 7:
          message.exchangedOfferCoin = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.remainingOfferCoin = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.reservedOfferCoinFee = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.msg = MsgSwapWithinBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapMsgState {
    return {
      msgHeight: isSet(object.msgHeight) ? Long.fromValue(object.msgHeight) : Long.ZERO,
      msgIndex: isSet(object.msgIndex) ? Long.fromValue(object.msgIndex) : Long.UZERO,
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
      toBeDeleted: isSet(object.toBeDeleted) ? Boolean(object.toBeDeleted) : false,
      orderExpiryHeight: isSet(object.orderExpiryHeight) ? Long.fromValue(object.orderExpiryHeight) : Long.ZERO,
      exchangedOfferCoin: isSet(object.exchangedOfferCoin) ? Coin.fromJSON(object.exchangedOfferCoin) : undefined,
      remainingOfferCoin: isSet(object.remainingOfferCoin) ? Coin.fromJSON(object.remainingOfferCoin) : undefined,
      reservedOfferCoinFee: isSet(object.reservedOfferCoinFee) ? Coin.fromJSON(object.reservedOfferCoinFee) : undefined,
      msg: isSet(object.msg) ? MsgSwapWithinBatch.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: SwapMsgState): unknown {
    const obj: any = {};
    message.msgHeight !== undefined && (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.toBeDeleted !== undefined && (obj.toBeDeleted = message.toBeDeleted);
    message.orderExpiryHeight !== undefined &&
      (obj.orderExpiryHeight = (message.orderExpiryHeight || Long.ZERO).toString());
    message.exchangedOfferCoin !== undefined &&
      (obj.exchangedOfferCoin = message.exchangedOfferCoin ? Coin.toJSON(message.exchangedOfferCoin) : undefined);
    message.remainingOfferCoin !== undefined &&
      (obj.remainingOfferCoin = message.remainingOfferCoin ? Coin.toJSON(message.remainingOfferCoin) : undefined);
    message.reservedOfferCoinFee !== undefined &&
      (obj.reservedOfferCoinFee = message.reservedOfferCoinFee ? Coin.toJSON(message.reservedOfferCoinFee) : undefined);
    message.msg !== undefined && (obj.msg = message.msg ? MsgSwapWithinBatch.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapMsgState>, I>>(object: I): SwapMsgState {
    const message = createBaseSwapMsgState();
    message.msgHeight = (object.msgHeight !== undefined && object.msgHeight !== null)
      ? Long.fromValue(object.msgHeight)
      : Long.ZERO;
    message.msgIndex = (object.msgIndex !== undefined && object.msgIndex !== null)
      ? Long.fromValue(object.msgIndex)
      : Long.UZERO;
    message.executed = object.executed ?? false;
    message.succeeded = object.succeeded ?? false;
    message.toBeDeleted = object.toBeDeleted ?? false;
    message.orderExpiryHeight = (object.orderExpiryHeight !== undefined && object.orderExpiryHeight !== null)
      ? Long.fromValue(object.orderExpiryHeight)
      : Long.ZERO;
    message.exchangedOfferCoin = (object.exchangedOfferCoin !== undefined && object.exchangedOfferCoin !== null)
      ? Coin.fromPartial(object.exchangedOfferCoin)
      : undefined;
    message.remainingOfferCoin = (object.remainingOfferCoin !== undefined && object.remainingOfferCoin !== null)
      ? Coin.fromPartial(object.remainingOfferCoin)
      : undefined;
    message.reservedOfferCoinFee = (object.reservedOfferCoinFee !== undefined && object.reservedOfferCoinFee !== null)
      ? Coin.fromPartial(object.reservedOfferCoinFee)
      : undefined;
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? MsgSwapWithinBatch.fromPartial(object.msg)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
