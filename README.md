# Funniest Cat Voicemail Greeting

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/musemosmouses/cat-voicemail/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/musemosmouses/cat-voicemail/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

Entry for the make.fun bounty **Funniest Cat Voicemail Greeting**
(`u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443`).

## What it does

`main.ts` writes one line — the funniest voicemail greeting a cat would record —
to `$MAKEFUN_OUTPUT_DIR/entry.txt`. The greeting is fixed, deterministic, and
109 characters long, inside the 120-character cap:

> You've reached Fig. Your call woke me from my eighteenth nap. Leave a message after the beep — I'll judge it.

Fig is a haughty, unbothered cat: your call woke him from his eighteenth nap,
and he will judge whatever you leave after the beep.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Node 22 stdlib only. No clock, no randomness, no network, no file reads —
the same bytes every run.

## License

MIT — see [LICENSE](LICENSE).
