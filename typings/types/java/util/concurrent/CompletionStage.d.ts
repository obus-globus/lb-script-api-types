import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface CompletionStage<T extends Object | number | string | boolean> extends Object {
    acceptEither(arg0: CompletionStage<T>, arg1: (param0: T) => void): CompletionStage<void>;
    acceptEitherAsync(arg0: CompletionStage<T>, arg1: (param0: T) => void): CompletionStage<void>;
    acceptEitherAsync(arg0: CompletionStage<T>, arg1: (param0: T) => void, arg2: Executor): CompletionStage<void>;
    applyToEither<U extends Object | number | string | boolean>(arg0: CompletionStage<T>, arg1: (param0: T) => U): CompletionStage<U>;
    applyToEitherAsync<U extends Object | number | string | boolean>(arg0: CompletionStage<T>, arg1: (param0: T) => U): CompletionStage<U>;
    applyToEitherAsync<U extends Object | number | string | boolean>(arg0: CompletionStage<T>, arg1: (param0: T) => U, arg2: Executor): CompletionStage<U>;
    exceptionally(arg0: (param0: Throwable) => T): CompletionStage<T>;
    exceptionallyAsync(arg0: (param0: Throwable) => T): CompletionStage<T>;
    exceptionallyAsync(arg0: (param0: Throwable) => T, arg1: Executor): CompletionStage<T>;
    exceptionallyCompose(arg0: (param0: Throwable) => CompletionStage<T>): CompletionStage<T>;
    exceptionallyComposeAsync(arg0: (param0: Throwable) => CompletionStage<T>): CompletionStage<T>;
    exceptionallyComposeAsync(arg0: (param0: Throwable) => CompletionStage<T>, arg1: Executor): CompletionStage<T>;
    handle<U extends Object | number | string | boolean>(arg0: (param0: T, param1: Throwable) => U): CompletionStage<U>;
    handleAsync<U extends Object | number | string | boolean>(arg0: (param0: T, param1: Throwable) => U): CompletionStage<U>;
    handleAsync<U extends Object | number | string | boolean>(arg0: (param0: T, param1: Throwable) => U, arg1: Executor): CompletionStage<U>;
    runAfterBoth(arg0: CompletionStage<Object>, arg1: () => void): CompletionStage<void>;
    runAfterBothAsync(arg0: CompletionStage<Object>, arg1: () => void): CompletionStage<void>;
    runAfterBothAsync(arg0: CompletionStage<Object>, arg1: () => void, arg2: Executor): CompletionStage<void>;
    runAfterEither(arg0: CompletionStage<Object>, arg1: () => void): CompletionStage<void>;
    runAfterEitherAsync(arg0: CompletionStage<Object>, arg1: () => void): CompletionStage<void>;
    runAfterEitherAsync(arg0: CompletionStage<Object>, arg1: () => void, arg2: Executor): CompletionStage<void>;
    thenAccept(arg0: (param0: T) => void): CompletionStage<void>;
    thenAcceptAsync(arg0: (param0: T) => void): CompletionStage<void>;
    thenAcceptAsync(arg0: (param0: T) => void, arg1: Executor): CompletionStage<void>;
    thenAcceptBoth<U extends Object | number | string | boolean>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => void): CompletionStage<void>;
    thenAcceptBothAsync<U extends Object | number | string | boolean>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => void): CompletionStage<void>;
    thenAcceptBothAsync<U extends Object | number | string | boolean>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => void, arg2: Executor): CompletionStage<void>;
    thenApply<U extends Object | number | string | boolean>(arg0: (param0: T) => U): CompletionStage<U>;
    thenApplyAsync<U extends Object | number | string | boolean>(arg0: (param0: T) => U): CompletionStage<U>;
    thenApplyAsync<U extends Object | number | string | boolean>(arg0: (param0: T) => U, arg1: Executor): CompletionStage<U>;
    thenCombine<V extends Object | number | string | boolean, U extends Object | number | string | boolean>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => V): CompletionStage<V>;
    thenCombineAsync<V extends Object | number | string | boolean, U extends Object | number | string | boolean>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => V): CompletionStage<V>;
    thenCombineAsync<V extends Object | number | string | boolean, U extends Object | number | string | boolean>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => V, arg2: Executor): CompletionStage<V>;
    thenCompose<U extends Object | number | string | boolean>(arg0: (param0: T) => CompletionStage<U>): CompletionStage<U>;
    thenComposeAsync<U extends Object | number | string | boolean>(arg0: (param0: T) => CompletionStage<U>): CompletionStage<U>;
    thenComposeAsync<U extends Object | number | string | boolean>(arg0: (param0: T) => CompletionStage<U>, arg1: Executor): CompletionStage<U>;
    thenRun(arg0: () => void): CompletionStage<void>;
    thenRunAsync(arg0: () => void): CompletionStage<void>;
    thenRunAsync(arg0: () => void, arg1: Executor): CompletionStage<void>;
    toCompletableFuture(): CompletableFuture<T>;
    whenComplete(arg0: (param0: T, param1: Throwable) => void): CompletionStage<T>;
    whenCompleteAsync(arg0: (param0: T, param1: Throwable) => void): CompletionStage<T>;
    whenCompleteAsync(arg0: (param0: T, param1: Throwable) => void, arg1: Executor): CompletionStage<T>;
}