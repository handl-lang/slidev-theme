# Explanation

## Why this crate exists

Talks about the platform kept being restyled by hand; a theme makes the
presentation look a property of the project rather than of whoever prepared the
slides. It is a thin fork on purpose — only the tokens differ.

## Where it sits

This crate belongs to the `engine-*` family. Plugins, kits and hosts reach it
through the kit's operation slot, so the engine can be swapped without touching a
language definition.

See the [reference](/slidev-theme/reference/) for the API and the
[how-to guides](/slidev-theme/how-to/) for tasks.
