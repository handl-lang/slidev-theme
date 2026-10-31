#!/usr/bin/env bash
# ci.sh — slidev-theme CI gate for the bupha shell runner.
#
# Slidev deck: install with bun (hoisted linker — slidev/unocss peer deps
# do not resolve under bun's isolated layout) and produce the static
# build. A broken slide/component fails the gate.
set -euo pipefail

cd "$(dirname "$0")"

bun install --frozen-lockfile --linker=hoisted
bun run build
