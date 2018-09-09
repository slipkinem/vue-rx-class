# vue-rx-class

usage

> npm i --save vue-rx-class

in vue-rx

```typescript
// domStreams
@domStream
private clickStream$: Observable<any>

@subscription
subscriptions () {
  return {
    status$: state.next(2)
  }
}
```
