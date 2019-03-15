# Keeping your NodeJS promise in production

### Dipro Chatterjee
- Senior Software Engineer, DAZN
- https://github.com/diprochatterjee
- https://twitter.com/chatterjeedipro

## Talk takeaways

- Write nodejs applications better fit for production
- Avoid unhandled errors
- handle high scale
- be pointed to resources to understand the event loop better
- reaccess my personal understanding of everything ;)

## About NodeJS

- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.

## Design goals

- "Threading allows programmers to write straight-line code and rely on the operating system to overlap computation and I/O by transparently switching across threads. The alternative, events, allows programmers to manage concurrency explicitly by structuring code as a single-threaded handler that reacts to events (such as non-blocking I/O completions, application-specific messages, or timer events)."
quoted from :"A Design Framework for Highly Concurrent Systems"  (Welsh, Gribble, Brewer & Culler, 2000), p. 2

- Developers prefer to write structured code (straight line; single threaded) that hides the complexity of multiple simultaneous operations where possible
I/O efficiency is a primary consideration of high-concurrency applications


## Event loop in NodeJS

- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

Phases Overview
- timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
- pending callbacks: executes I/O callbacks deferred to the next loop iteration.
- idle, prepare: only used internally.
- poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- check: setImmediate() callbacks are invoked here.
- close callbacks: some close callbacks, e.g. socket.on('close', ...).

## Promise
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

## Production insights

- Error handling
- Predictability
- Scalabality
- Readability
- Monitoring

## References

- https://learning.oreilly.com/library/view/mastering-nodejs-/9781785888960/
- https://medium.com/@fhinkel
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
- https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882

## Cool videos

- https://www.youtube.com/watch?v=B9igDWV5ZUg Performance Profiling with V8
- https://www.youtube.com/watch?v=p-iiEDtpy6I How does javascript engine work?
- https://www.youtube.com/watch?v=8aGhZQkoFbQ How event loop works in Javascript?

## Acknowledgements

- api.punkapi.com for free beers.
- AmsterdamJS for hosting us and free beers.
- Maurizio and everyone at DAZN

## Next challenge

- https://v8.dev/blog/v8-release-55?spref=tw
