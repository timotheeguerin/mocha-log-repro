Mocha bug repro

Run `test` test in mocha explorer

Resulting show logs is 
```
ReferenceError: strictEqual is not defined
    at Context.<anonymous> (test.test.js:6:3)
    at process.processImmediate (node:internal/timers:471:21)

```

Expected to see 

```
Line 1
Line 2
Line 3

ReferenceError: strictEqual is not defined
    at Context.<anonymous> (test.test.js:6:3)
    at process.processImmediate (node:internal/timers:471:21)

```

The debugger also seems to not stop on break points.

## Disable parallel

setting `mochaExplorer.parallel": true` and `reload window` in vscode will then fix the problem.