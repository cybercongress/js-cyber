#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

CYBER_TS_REF='0.1.0'
CYBER_PROTO_DIR="./proto/cyber/proto-$CYBER_TS_REF"
OUT_DIR="./src/codec/"

mkdir -p "$OUT_DIR"


protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$CYBER_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
  "$CYBER_PROTO_DIR/cosmos/base/query/v1beta1/pagination.proto" \
  "$CYBER_PROTO_DIR/cosmos/base/v1beta1/coin.proto" \
  "$CYBER_PROTO_DIR/cyber/graph/v1beta1/types.proto" \
  "$CYBER_PROTO_DIR/cyber/graph/v1beta1/query.proto" \
  "$CYBER_PROTO_DIR/cyber/graph/v1beta1/tx.proto" \
  "$CYBER_PROTO_DIR/cyber/bandwidth/v1beta1/types.proto" \
  "$CYBER_PROTO_DIR/cyber/bandwidth/v1beta1/query.proto" \
  "$CYBER_PROTO_DIR/cyber/resources/v1beta1/types.proto" \
  "$CYBER_PROTO_DIR/cyber/resources/v1beta1/query.proto" \
  "$CYBER_PROTO_DIR/cyber/resources/v1beta1/tx.proto" \
  "$CYBER_PROTO_DIR/cyber/rank/v1beta1/types.proto" \
  "$CYBER_PROTO_DIR/cyber/rank/v1beta1/query.proto" \
  "$CYBER_PROTO_DIR/cyber/grid/v1beta1/types.proto" \
  "$CYBER_PROTO_DIR/cyber/grid/v1beta1/query.proto" \
  "$CYBER_PROTO_DIR/cyber/grid/v1beta1/tx.proto" \
  "$CYBER_PROTO_DIR/cyber/liquidity/v1beta1/liquidity.proto" \
  "$CYBER_PROTO_DIR/cyber/liquidity/v1beta1/query.proto" \
  "$CYBER_PROTO_DIR/cyber/liquidity/v1beta1/tx.proto" \

# Remove unnecessary codec files
rm -rf \
  src/codec/gogoproto/ \
  src/codec/google/api/ \
  src/codec/google/protobuf/descriptor.ts \
  src/codec/protoc-gen-openapiv2 \
  src/codec/google \
  src/codec/cosmos_proto
