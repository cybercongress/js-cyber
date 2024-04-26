/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cyber.rank.v1beta1";

export interface Params {
  calculationPeriod: Long;
  dampingFactor: string;
  tolerance: string;
}

export interface RankedParticle {
  particle: string;
  rank: Long;
}

function createBaseParams(): Params {
  return { calculationPeriod: Long.ZERO, dampingFactor: "", tolerance: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.calculationPeriod.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.calculationPeriod);
    }
    if (message.dampingFactor !== "") {
      writer.uint32(18).string(message.dampingFactor);
    }
    if (message.tolerance !== "") {
      writer.uint32(26).string(message.tolerance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.calculationPeriod = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dampingFactor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tolerance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      calculationPeriod: isSet(object.calculationPeriod) ? Long.fromValue(object.calculationPeriod) : Long.ZERO,
      dampingFactor: isSet(object.dampingFactor) ? globalThis.String(object.dampingFactor) : "",
      tolerance: isSet(object.tolerance) ? globalThis.String(object.tolerance) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (!message.calculationPeriod.equals(Long.ZERO)) {
      obj.calculationPeriod = (message.calculationPeriod || Long.ZERO).toString();
    }
    if (message.dampingFactor !== "") {
      obj.dampingFactor = message.dampingFactor;
    }
    if (message.tolerance !== "") {
      obj.tolerance = message.tolerance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.calculationPeriod = (object.calculationPeriod !== undefined && object.calculationPeriod !== null)
      ? Long.fromValue(object.calculationPeriod)
      : Long.ZERO;
    message.dampingFactor = object.dampingFactor ?? "";
    message.tolerance = object.tolerance ?? "";
    return message;
  },
};

function createBaseRankedParticle(): RankedParticle {
  return { particle: "", rank: Long.UZERO };
}

export const RankedParticle = {
  encode(message: RankedParticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.particle !== "") {
      writer.uint32(10).string(message.particle);
    }
    if (!message.rank.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.rank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RankedParticle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRankedParticle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.particle = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rank = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RankedParticle {
    return {
      particle: isSet(object.particle) ? globalThis.String(object.particle) : "",
      rank: isSet(object.rank) ? Long.fromValue(object.rank) : Long.UZERO,
    };
  },

  toJSON(message: RankedParticle): unknown {
    const obj: any = {};
    if (message.particle !== "") {
      obj.particle = message.particle;
    }
    if (!message.rank.equals(Long.UZERO)) {
      obj.rank = (message.rank || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RankedParticle>, I>>(base?: I): RankedParticle {
    return RankedParticle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RankedParticle>, I>>(object: I): RankedParticle {
    const message = createBaseRankedParticle();
    message.particle = object.particle ?? "";
    message.rank = (object.rank !== undefined && object.rank !== null) ? Long.fromValue(object.rank) : Long.UZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
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
