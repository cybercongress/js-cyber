/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DepositMsgState, Params, Pool, PoolBatch, SwapMsgState, WithdrawMsgState } from "./liquidity";

export const protobufPackage = "cyber.liquidity.v1beta1";

/**
 * the request type for the QueryLiquidityPool RPC method. requestable specified
 * pool_id.
 */
export interface QueryLiquidityPoolRequest {
  poolId: Long;
}

/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the
 * liquidity pool that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolResponse {
  pool?: Pool;
}

/**
 * the request type for the QueryLiquidityByPoolCoinDenomPool RPC method.
 * Requestable specified pool_coin_denom.
 */
export interface QueryLiquidityPoolByPoolCoinDenomRequest {
  poolCoinDenom: string;
}

/**
 * the request type for the QueryLiquidityByReserveAcc RPC method. Requestable
 * specified reserve_acc.
 */
export interface QueryLiquidityPoolByReserveAccRequest {
  reserveAcc: string;
}

/**
 * the request type for the QueryLiquidityPoolBatch RPC method. requestable
 * including specified pool_id.
 */
export interface QueryLiquidityPoolBatchRequest {
  /** id of the target pool for query */
  poolId: Long;
}

/**
 * the response type for the QueryLiquidityPoolBatchResponse RPC method. Returns
 * the liquidity pool batch that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolBatchResponse {
  batch?: PoolBatch;
}

/**
 * the request type for the QueryLiquidityPools RPC method. Requestable
 * including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This
 * includes a list of all existing liquidity pools and paging results that
 * contain next_key and total count.
 */
export interface QueryLiquidityPoolsResponse {
  pools: Pool[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponse;
}

/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequest {
}

/**
 * the response type for the QueryParamsResponse RPC method. This includes
 * current parameter of the liquidity module.
 */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

/**
 * the request type for the QueryPoolBatchSwapMsgs RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchSwapMsgsRequest {
  /** id of the target pool for query */
  poolId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * the request type for the QueryPoolBatchSwap RPC method. Requestable including
 * specified pool_id and msg_index.
 */
export interface QueryPoolBatchSwapMsgRequest {
  /** id of the target pool for query */
  poolId: Long;
  /** target msg_index of the pool */
  msgIndex: Long;
}

/**
 * the response type for the QueryPoolBatchSwapMsgs RPC method. This includes
 * list of all currently existing swap messages of the batch and paging results
 * that contain next_key and total count.
 */
export interface QueryPoolBatchSwapMsgsResponse {
  swaps: SwapMsgState[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponse;
}

/**
 * the response type for the QueryPoolBatchSwapMsg RPC method. This includes a
 * batch swap message of the batch.
 */
export interface QueryPoolBatchSwapMsgResponse {
  swap?: SwapMsgState;
}

/**
 * the request type for the QueryPoolBatchDeposit RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchDepositMsgsRequest {
  /** id of the target pool for query */
  poolId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * the request type for the QueryPoolBatchDeposit RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchDepositMsgRequest {
  /** id of the target pool for query */
  poolId: Long;
  /** target msg_index of the pool */
  msgIndex: Long;
}

/**
 * the response type for the QueryPoolBatchDeposit RPC method. This includes a
 * list of all currently existing deposit messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchDepositMsgsResponse {
  deposits: DepositMsgState[];
  /**
   * pagination defines the pagination in the response. not working on this
   * version.
   */
  pagination?: PageResponse;
}

/**
 * the response type for the QueryPoolBatchDepositMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchDepositMsgResponse {
  deposit?: DepositMsgState;
}

/**
 * the request type for the QueryPoolBatchWithdraw RPC method. Requestable
 * including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchWithdrawMsgsRequest {
  /** id of the target pool for query */
  poolId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * the request type for the QueryPoolBatchWithdraw RPC method. requestable
 * including specified pool_id and msg_index.
 */
export interface QueryPoolBatchWithdrawMsgRequest {
  /** id of the target pool for query */
  poolId: Long;
  /** target msg_index of the pool */
  msgIndex: Long;
}

/**
 * the response type for the QueryPoolBatchWithdraw RPC method. This includes a
 * list of all currently existing withdraw messages of the batch and paging
 * results that contain next_key and total count.
 */
export interface QueryPoolBatchWithdrawMsgsResponse {
  withdraws: WithdrawMsgState[];
  /**
   * pagination defines the pagination in the response. Not supported on this
   * version.
   */
  pagination?: PageResponse;
}

/**
 * the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes
 * a batch swap message of the batch.
 */
export interface QueryPoolBatchWithdrawMsgResponse {
  withdraw?: WithdrawMsgState;
}

function createBaseQueryLiquidityPoolRequest(): QueryLiquidityPoolRequest {
  return { poolId: Long.UZERO };
}

export const QueryLiquidityPoolRequest = {
  encode(message: QueryLiquidityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryLiquidityPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolRequest>, I>>(object: I): QueryLiquidityPoolRequest {
    const message = createBaseQueryLiquidityPoolRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryLiquidityPoolResponse(): QueryLiquidityPoolResponse {
  return { pool: undefined };
}

export const QueryLiquidityPoolResponse = {
  encode(message: QueryLiquidityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryLiquidityPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolResponse>, I>>(object: I): QueryLiquidityPoolResponse {
    const message = createBaseQueryLiquidityPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryLiquidityPoolByPoolCoinDenomRequest(): QueryLiquidityPoolByPoolCoinDenomRequest {
  return { poolCoinDenom: "" };
}

export const QueryLiquidityPoolByPoolCoinDenomRequest = {
  encode(message: QueryLiquidityPoolByPoolCoinDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolCoinDenom !== "") {
      writer.uint32(10).string(message.poolCoinDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolByPoolCoinDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCoinDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolByPoolCoinDenomRequest {
    return { poolCoinDenom: isSet(object.poolCoinDenom) ? String(object.poolCoinDenom) : "" };
  },

  toJSON(message: QueryLiquidityPoolByPoolCoinDenomRequest): unknown {
    const obj: any = {};
    message.poolCoinDenom !== undefined && (obj.poolCoinDenom = message.poolCoinDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolByPoolCoinDenomRequest>, I>>(
    object: I,
  ): QueryLiquidityPoolByPoolCoinDenomRequest {
    const message = createBaseQueryLiquidityPoolByPoolCoinDenomRequest();
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    return message;
  },
};

function createBaseQueryLiquidityPoolByReserveAccRequest(): QueryLiquidityPoolByReserveAccRequest {
  return { reserveAcc: "" };
}

export const QueryLiquidityPoolByReserveAccRequest = {
  encode(message: QueryLiquidityPoolByReserveAccRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveAcc !== "") {
      writer.uint32(10).string(message.reserveAcc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolByReserveAccRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolByReserveAccRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAcc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolByReserveAccRequest {
    return { reserveAcc: isSet(object.reserveAcc) ? String(object.reserveAcc) : "" };
  },

  toJSON(message: QueryLiquidityPoolByReserveAccRequest): unknown {
    const obj: any = {};
    message.reserveAcc !== undefined && (obj.reserveAcc = message.reserveAcc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolByReserveAccRequest>, I>>(
    object: I,
  ): QueryLiquidityPoolByReserveAccRequest {
    const message = createBaseQueryLiquidityPoolByReserveAccRequest();
    message.reserveAcc = object.reserveAcc ?? "";
    return message;
  },
};

function createBaseQueryLiquidityPoolBatchRequest(): QueryLiquidityPoolBatchRequest {
  return { poolId: Long.UZERO };
}

export const QueryLiquidityPoolBatchRequest = {
  encode(message: QueryLiquidityPoolBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolBatchRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryLiquidityPoolBatchRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolBatchRequest>, I>>(
    object: I,
  ): QueryLiquidityPoolBatchRequest {
    const message = createBaseQueryLiquidityPoolBatchRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryLiquidityPoolBatchResponse(): QueryLiquidityPoolBatchResponse {
  return { batch: undefined };
}

export const QueryLiquidityPoolBatchResponse = {
  encode(message: QueryLiquidityPoolBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = PoolBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolBatchResponse {
    return { batch: isSet(object.batch) ? PoolBatch.fromJSON(object.batch) : undefined };
  },

  toJSON(message: QueryLiquidityPoolBatchResponse): unknown {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? PoolBatch.toJSON(message.batch) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolBatchResponse>, I>>(
    object: I,
  ): QueryLiquidityPoolBatchResponse {
    const message = createBaseQueryLiquidityPoolBatchResponse();
    message.batch = (object.batch !== undefined && object.batch !== null)
      ? PoolBatch.fromPartial(object.batch)
      : undefined;
    return message;
  },
};

function createBaseQueryLiquidityPoolsRequest(): QueryLiquidityPoolsRequest {
  return { pagination: undefined };
}

export const QueryLiquidityPoolsRequest = {
  encode(message: QueryLiquidityPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLiquidityPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolsRequest>, I>>(object: I): QueryLiquidityPoolsRequest {
    const message = createBaseQueryLiquidityPoolsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLiquidityPoolsResponse(): QueryLiquidityPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryLiquidityPoolsResponse = {
  encode(message: QueryLiquidityPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLiquidityPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLiquidityPoolsResponse>, I>>(object: I): QueryLiquidityPoolsResponse {
    const message = createBaseQueryLiquidityPoolsResponse();
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchSwapMsgsRequest(): QueryPoolBatchSwapMsgsRequest {
  return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolBatchSwapMsgsRequest = {
  encode(message: QueryPoolBatchSwapMsgsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchSwapMsgsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchSwapMsgsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolBatchSwapMsgsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchSwapMsgsRequest>, I>>(
    object: I,
  ): QueryPoolBatchSwapMsgsRequest {
    const message = createBaseQueryPoolBatchSwapMsgsRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchSwapMsgRequest(): QueryPoolBatchSwapMsgRequest {
  return { poolId: Long.UZERO, msgIndex: Long.UZERO };
}

export const QueryPoolBatchSwapMsgRequest = {
  encode(message: QueryPoolBatchSwapMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.msgIndex.isZero()) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchSwapMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchSwapMsgRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      msgIndex: isSet(object.msgIndex) ? Long.fromValue(object.msgIndex) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolBatchSwapMsgRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchSwapMsgRequest>, I>>(object: I): QueryPoolBatchSwapMsgRequest {
    const message = createBaseQueryPoolBatchSwapMsgRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.msgIndex = (object.msgIndex !== undefined && object.msgIndex !== null)
      ? Long.fromValue(object.msgIndex)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolBatchSwapMsgsResponse(): QueryPoolBatchSwapMsgsResponse {
  return { swaps: [], pagination: undefined };
}

export const QueryPoolBatchSwapMsgsResponse = {
  encode(message: QueryPoolBatchSwapMsgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.swaps) {
      SwapMsgState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchSwapMsgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(SwapMsgState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchSwapMsgsResponse {
    return {
      swaps: Array.isArray(object?.swaps) ? object.swaps.map((e: any) => SwapMsgState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolBatchSwapMsgsResponse): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map((e) => e ? SwapMsgState.toJSON(e) : undefined);
    } else {
      obj.swaps = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchSwapMsgsResponse>, I>>(
    object: I,
  ): QueryPoolBatchSwapMsgsResponse {
    const message = createBaseQueryPoolBatchSwapMsgsResponse();
    message.swaps = object.swaps?.map((e) => SwapMsgState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchSwapMsgResponse(): QueryPoolBatchSwapMsgResponse {
  return { swap: undefined };
}

export const QueryPoolBatchSwapMsgResponse = {
  encode(message: QueryPoolBatchSwapMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchSwapMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchSwapMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = SwapMsgState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchSwapMsgResponse {
    return { swap: isSet(object.swap) ? SwapMsgState.fromJSON(object.swap) : undefined };
  },

  toJSON(message: QueryPoolBatchSwapMsgResponse): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? SwapMsgState.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchSwapMsgResponse>, I>>(
    object: I,
  ): QueryPoolBatchSwapMsgResponse {
    const message = createBaseQueryPoolBatchSwapMsgResponse();
    message.swap = (object.swap !== undefined && object.swap !== null)
      ? SwapMsgState.fromPartial(object.swap)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchDepositMsgsRequest(): QueryPoolBatchDepositMsgsRequest {
  return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolBatchDepositMsgsRequest = {
  encode(message: QueryPoolBatchDepositMsgsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchDepositMsgsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchDepositMsgsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolBatchDepositMsgsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchDepositMsgsRequest>, I>>(
    object: I,
  ): QueryPoolBatchDepositMsgsRequest {
    const message = createBaseQueryPoolBatchDepositMsgsRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchDepositMsgRequest(): QueryPoolBatchDepositMsgRequest {
  return { poolId: Long.UZERO, msgIndex: Long.UZERO };
}

export const QueryPoolBatchDepositMsgRequest = {
  encode(message: QueryPoolBatchDepositMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.msgIndex.isZero()) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchDepositMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchDepositMsgRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      msgIndex: isSet(object.msgIndex) ? Long.fromValue(object.msgIndex) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolBatchDepositMsgRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchDepositMsgRequest>, I>>(
    object: I,
  ): QueryPoolBatchDepositMsgRequest {
    const message = createBaseQueryPoolBatchDepositMsgRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.msgIndex = (object.msgIndex !== undefined && object.msgIndex !== null)
      ? Long.fromValue(object.msgIndex)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolBatchDepositMsgsResponse(): QueryPoolBatchDepositMsgsResponse {
  return { deposits: [], pagination: undefined };
}

export const QueryPoolBatchDepositMsgsResponse = {
  encode(message: QueryPoolBatchDepositMsgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      DepositMsgState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchDepositMsgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(DepositMsgState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchDepositMsgsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositMsgState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolBatchDepositMsgsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? DepositMsgState.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchDepositMsgsResponse>, I>>(
    object: I,
  ): QueryPoolBatchDepositMsgsResponse {
    const message = createBaseQueryPoolBatchDepositMsgsResponse();
    message.deposits = object.deposits?.map((e) => DepositMsgState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchDepositMsgResponse(): QueryPoolBatchDepositMsgResponse {
  return { deposit: undefined };
}

export const QueryPoolBatchDepositMsgResponse = {
  encode(message: QueryPoolBatchDepositMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchDepositMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchDepositMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = DepositMsgState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchDepositMsgResponse {
    return { deposit: isSet(object.deposit) ? DepositMsgState.fromJSON(object.deposit) : undefined };
  },

  toJSON(message: QueryPoolBatchDepositMsgResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? DepositMsgState.toJSON(message.deposit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchDepositMsgResponse>, I>>(
    object: I,
  ): QueryPoolBatchDepositMsgResponse {
    const message = createBaseQueryPoolBatchDepositMsgResponse();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? DepositMsgState.fromPartial(object.deposit)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchWithdrawMsgsRequest(): QueryPoolBatchWithdrawMsgsRequest {
  return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolBatchWithdrawMsgsRequest = {
  encode(message: QueryPoolBatchWithdrawMsgsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchWithdrawMsgsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolBatchWithdrawMsgsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchWithdrawMsgsRequest>, I>>(
    object: I,
  ): QueryPoolBatchWithdrawMsgsRequest {
    const message = createBaseQueryPoolBatchWithdrawMsgsRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchWithdrawMsgRequest(): QueryPoolBatchWithdrawMsgRequest {
  return { poolId: Long.UZERO, msgIndex: Long.UZERO };
}

export const QueryPoolBatchWithdrawMsgRequest = {
  encode(message: QueryPoolBatchWithdrawMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.msgIndex.isZero()) {
      writer.uint32(16).uint64(message.msgIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchWithdrawMsgRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      msgIndex: isSet(object.msgIndex) ? Long.fromValue(object.msgIndex) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolBatchWithdrawMsgRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchWithdrawMsgRequest>, I>>(
    object: I,
  ): QueryPoolBatchWithdrawMsgRequest {
    const message = createBaseQueryPoolBatchWithdrawMsgRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.msgIndex = (object.msgIndex !== undefined && object.msgIndex !== null)
      ? Long.fromValue(object.msgIndex)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolBatchWithdrawMsgsResponse(): QueryPoolBatchWithdrawMsgsResponse {
  return { withdraws: [], pagination: undefined };
}

export const QueryPoolBatchWithdrawMsgsResponse = {
  encode(message: QueryPoolBatchWithdrawMsgsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdraws) {
      WithdrawMsgState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraws.push(WithdrawMsgState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchWithdrawMsgsResponse {
    return {
      withdraws: Array.isArray(object?.withdraws) ? object.withdraws.map((e: any) => WithdrawMsgState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolBatchWithdrawMsgsResponse): unknown {
    const obj: any = {};
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map((e) => e ? WithdrawMsgState.toJSON(e) : undefined);
    } else {
      obj.withdraws = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchWithdrawMsgsResponse>, I>>(
    object: I,
  ): QueryPoolBatchWithdrawMsgsResponse {
    const message = createBaseQueryPoolBatchWithdrawMsgsResponse();
    message.withdraws = object.withdraws?.map((e) => WithdrawMsgState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolBatchWithdrawMsgResponse(): QueryPoolBatchWithdrawMsgResponse {
  return { withdraw: undefined };
}

export const QueryPoolBatchWithdrawMsgResponse = {
  encode(message: QueryPoolBatchWithdrawMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdraw !== undefined) {
      WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolBatchWithdrawMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolBatchWithdrawMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraw = WithdrawMsgState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolBatchWithdrawMsgResponse {
    return { withdraw: isSet(object.withdraw) ? WithdrawMsgState.fromJSON(object.withdraw) : undefined };
  },

  toJSON(message: QueryPoolBatchWithdrawMsgResponse): unknown {
    const obj: any = {};
    message.withdraw !== undefined &&
      (obj.withdraw = message.withdraw ? WithdrawMsgState.toJSON(message.withdraw) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolBatchWithdrawMsgResponse>, I>>(
    object: I,
  ): QueryPoolBatchWithdrawMsgResponse {
    const message = createBaseQueryPoolBatchWithdrawMsgResponse();
    message.withdraw = (object.withdraw !== undefined && object.withdraw !== null)
      ? WithdrawMsgState.fromPartial(object.withdraw)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC query service for the liquidity module. */
export interface Query {
  /** Get existing liquidity pools. */
  LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
  /** Get specific liquidity pool. */
  LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
  /** Get specific liquidity pool corresponding to the pool_coin_denom. */
  LiquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
  /** Get specific liquidity pool corresponding to the reserve account. */
  LiquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
  /** Get the pool's current batch. */
  LiquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;
  /** Get all swap messages in the pool's current batch. */
  PoolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;
  /** Get a specific swap message in the pool's current batch. */
  PoolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;
  /** Get all deposit messages in the pool's current batch. */
  PoolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;
  /** Get a specific deposit message in the pool's current batch. */
  PoolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;
  /** Get all withdraw messages in the pool's current batch. */
  PoolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;
  /** Get a specific withdraw message in the pool's current batch. */
  PoolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;
  /** Get all parameters of the liquidity module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cyber.liquidity.v1beta1.Query";
    this.rpc = rpc;
    this.LiquidityPools = this.LiquidityPools.bind(this);
    this.LiquidityPool = this.LiquidityPool.bind(this);
    this.LiquidityPoolByPoolCoinDenom = this.LiquidityPoolByPoolCoinDenom.bind(this);
    this.LiquidityPoolByReserveAcc = this.LiquidityPoolByReserveAcc.bind(this);
    this.LiquidityPoolBatch = this.LiquidityPoolBatch.bind(this);
    this.PoolBatchSwapMsgs = this.PoolBatchSwapMsgs.bind(this);
    this.PoolBatchSwapMsg = this.PoolBatchSwapMsg.bind(this);
    this.PoolBatchDepositMsgs = this.PoolBatchDepositMsgs.bind(this);
    this.PoolBatchDepositMsg = this.PoolBatchDepositMsg.bind(this);
    this.PoolBatchWithdrawMsgs = this.PoolBatchWithdrawMsgs.bind(this);
    this.PoolBatchWithdrawMsg = this.PoolBatchWithdrawMsg.bind(this);
    this.Params = this.Params.bind(this);
  }
  LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse> {
    const data = QueryLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidityPools", data);
    return promise.then((data) => QueryLiquidityPoolsResponse.decode(new _m0.Reader(data)));
  }

  LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidityPool", data);
    return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  LiquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidityPoolByPoolCoinDenom", data);
    return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  LiquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidityPoolByReserveAcc", data);
    return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  LiquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse> {
    const data = QueryLiquidityPoolBatchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidityPoolBatch", data);
    return promise.then((data) => QueryLiquidityPoolBatchResponse.decode(new _m0.Reader(data)));
  }

  PoolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse> {
    const data = QueryPoolBatchSwapMsgsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolBatchSwapMsgs", data);
    return promise.then((data) => QueryPoolBatchSwapMsgsResponse.decode(new _m0.Reader(data)));
  }

  PoolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse> {
    const data = QueryPoolBatchSwapMsgRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolBatchSwapMsg", data);
    return promise.then((data) => QueryPoolBatchSwapMsgResponse.decode(new _m0.Reader(data)));
  }

  PoolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse> {
    const data = QueryPoolBatchDepositMsgsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolBatchDepositMsgs", data);
    return promise.then((data) => QueryPoolBatchDepositMsgsResponse.decode(new _m0.Reader(data)));
  }

  PoolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse> {
    const data = QueryPoolBatchDepositMsgRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolBatchDepositMsg", data);
    return promise.then((data) => QueryPoolBatchDepositMsgResponse.decode(new _m0.Reader(data)));
  }

  PoolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse> {
    const data = QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolBatchWithdrawMsgs", data);
    return promise.then((data) => QueryPoolBatchWithdrawMsgsResponse.decode(new _m0.Reader(data)));
  }

  PoolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse> {
    const data = QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolBatchWithdrawMsg", data);
    return promise.then((data) => QueryPoolBatchWithdrawMsgResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
