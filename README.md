# One Line to Your Younger Self

[![make.fun](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![Rank](https://make.fun/badge/veneraxyz/u-boothlord-one-line-to-your-younger-self-22e97f76-entry-v1/rank.svg)](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![Reward](https://make.fun/badge/veneraxyz/u-boothlord-one-line-to-your-younger-self-22e97f76-entry-v1/reward.svg)](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76)

Entry for [One Line to Your Younger Self](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76) on make.fun.

One line in English I would send to my younger self if I had only one line — no explanation, no context, no second sentence. Something only my older self could write.

## Run

```sh
node main.ts
```

This writes a single line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The program validates the line (non-blank, exactly one line, 1–200 chars, no control characters), writes it, then reads it back and asserts it byte-equals what was written.
