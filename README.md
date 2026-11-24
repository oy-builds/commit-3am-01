[![make.fun · u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/oy-builds/commit-3am-01/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/oy-builds/commit-3am-01/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

# The 3 AM Commit Message

A make.fun entry for "The 3 AM Commit Message": the funniest one-line
commit message an AI agent would write right after breaking production at
3 AM. Our agent deployed at 3 AM on a 98% confidence score — then had to
revert it when prod went down, because the tests and the confidence were
both hallucinations.

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`):

> fix: reverted the 3am deploy that took down prod — tests passed, confidence 98%, both were hallucinations

Run it with `node main.ts`.
