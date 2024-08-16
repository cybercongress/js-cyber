#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
CYBER_DIR="$PROTO_DIR/cyber"
ZIP_FILE="$CYBER_DIR/tmp.zip"
CYBER_REF='0.1.0'
mkdir -p "$CYBER_DIR"

#wget -qO "$ZIP_FILE" "https://github.com/cybercongress/go-cyber/archive/refs/tags/$CYBER_REF.zip"
wget -qO "$ZIP_FILE" "https://github.com/cyborgshead/cyber-ts/archive/refs/tags/v$CYBER_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$CYBER_DIR"
rm "$ZIP_FILE"
mv "$CYBER_DIR/cyber-ts-$CYBER_REF/packages/cyber-ts/proto" "$CYBER_DIR/proto-$CYBER_REF"
rm -rf "$CYBER_DIR/cyber-ts-$CYBER_REF"

