import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { CompletableFuture$BiAccept } from '../../../java/util/concurrent/CompletableFuture$BiAccept.d.ts'
import type { CompletableFuture$BiApply } from '../../../java/util/concurrent/CompletableFuture$BiApply.d.ts'
import type { CompletableFuture$BiCompletion } from '../../../java/util/concurrent/CompletableFuture$BiCompletion.d.ts'
import type { CompletableFuture$BiRun } from '../../../java/util/concurrent/CompletableFuture$BiRun.d.ts'
import type { CompletableFuture$Completion } from '../../../java/util/concurrent/CompletableFuture$Completion.d.ts'
import type { CompletableFuture$MinimalStage } from '../../../java/util/concurrent/CompletableFuture$MinimalStage.d.ts'
import type { CompletableFuture$Timeout } from '../../../java/util/concurrent/CompletableFuture$Timeout.d.ts'
import type { CompletableFuture$UniExceptionally } from '../../../java/util/concurrent/CompletableFuture$UniExceptionally.d.ts'
import type { CompletableFuture$UniHandle } from '../../../java/util/concurrent/CompletableFuture$UniHandle.d.ts'
import type { CompletableFuture$UniWhenComplete } from '../../../java/util/concurrent/CompletableFuture$UniWhenComplete.d.ts'
import type { CompletionStage } from '../../../java/util/concurrent/CompletionStage.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CompletableFuture<T extends unknown> extends Object implements CompletionStage<T>, Future<T> {
    static allOf(...paramarg0: CompletableFuture<Object>[]): CompletableFuture<void>;
    static anyOf(...paramarg0: CompletableFuture<Object>[]): CompletableFuture<Object>;
    static completedFuture<U extends unknown>(paramarg0: U): CompletableFuture<U>;
    static completedStage<U extends unknown>(paramarg0: U): CompletionStage<U>;
    static delayedExecutor(paramarg0: number, paramarg1: TimeUnit): Executor;
    static delayedExecutor(paramarg0: number, paramarg1: TimeUnit, paramarg2: Executor): Executor;
    static failedFuture<U extends unknown>(paramarg0: Throwable): CompletableFuture<U>;
    static failedStage<U extends unknown>(paramarg0: Throwable): CompletionStage<U>;
    static runAsync(paramarg0: () => void): CompletableFuture<void>;
    static runAsync(paramarg0: () => void, paramarg1: Executor): CompletableFuture<void>;
    static supplyAsync<U extends unknown>(paramarg0: () => U): CompletableFuture<U>;
    static supplyAsync<U extends unknown>(paramarg0: () => U, paramarg1: Executor): CompletableFuture<U>;
    constructor()
    constructor(arg0: Object)
    // private result: Object;
    // private stack: CompletableFuture$Completion;
    acceptEither(arg0: CompletionStage<T>, arg1: (param0: T) => void): CompletableFuture<void>;
    acceptEitherAsync(arg0: CompletionStage<T>, arg1: (param0: T) => void): CompletableFuture<void>;
    acceptEitherAsync(arg0: CompletionStage<T>, arg1: (param0: T) => void, arg2: Executor): CompletableFuture<void>;
    applyToEither<U extends unknown>(arg0: CompletionStage<T>, arg1: (param0: T) => U): CompletableFuture<U>;
    applyToEitherAsync<U extends unknown>(arg0: CompletionStage<T>, arg1: (param0: T) => U): CompletableFuture<U>;
    applyToEitherAsync<U extends unknown>(arg0: CompletionStage<T>, arg1: (param0: T) => U, arg2: Executor): CompletableFuture<U>;
    // private arrangeTimeout<U extends unknown>(arg0: number, arg1: CompletableFuture$Timeout<U>): void;
    biAccept<R extends unknown, S extends unknown>(arg0: Object, arg1: Object, arg2: (param0: R, param1: S) => void, arg3: CompletableFuture$BiAccept<R, S>): boolean;
    // private biAcceptStage<U extends unknown>(arg0: Executor, arg1: CompletionStage<U>, arg2: (param0: T, param1: U) => void): CompletableFuture<void>;
    biApply<R extends unknown, S extends unknown>(arg0: Object, arg1: Object, arg2: (param0: R, param1: S) => T, arg3: CompletableFuture$BiApply<R, S, T>): boolean;
    // private biApplyStage<V extends unknown, U extends unknown>(arg0: Executor, arg1: CompletionStage<U>, arg2: (param0: T, param1: U) => V): CompletableFuture<V>;
    biRun(arg0: Object, arg1: Object, arg2: () => void, arg3: CompletableFuture$BiRun<Object, Object>): boolean;
    // private biRunStage(arg0: Executor, arg1: CompletionStage<Object>, arg2: () => void): CompletableFuture<void>;
    bipush(arg0: CompletableFuture<Object>, arg1: CompletableFuture$BiCompletion<Object, Object, Object>): void;
    cancel(arg0: boolean): boolean;
    cleanStack(): void;
    complete(arg0: T): boolean;
    completeAsync(arg0: () => T): CompletableFuture<T>;
    completeAsync(arg0: () => T, arg1: Executor): CompletableFuture<T>;
    completeExceptionally(arg0: Throwable): boolean;
    completeNull(): boolean;
    completeOnTimeout(arg0: T, arg1: number, arg2: TimeUnit): CompletableFuture<T>;
    completeRelay(arg0: Object): boolean;
    completeThrowable(arg0: Throwable): boolean;
    completeThrowable(arg0: Throwable, arg1: Object): boolean;
    completeValue(arg0: T): boolean;
    copy(): CompletableFuture<T>;
    defaultExecutor(): Executor;
    encodeOutcome(arg0: T, arg1: Throwable): Object;
    encodeValue(arg0: T): Object;
    exceptionNow(): Throwable;
    exceptionally(arg0: (param0: Throwable) => T): CompletableFuture<T>;
    exceptionallyAsync(arg0: (param0: Throwable) => T): CompletableFuture<T>;
    exceptionallyAsync(arg0: (param0: Throwable) => T, arg1: Executor): CompletableFuture<T>;
    exceptionallyAsync(arg0: (param0: Throwable) => T): CompletionStage<T>;
    exceptionallyAsync(arg0: (param0: Throwable) => T, arg1: Executor): CompletionStage<T>;
    exceptionallyCompose(arg0: (param0: Throwable) => CompletionStage<T>): CompletableFuture<T>;
    exceptionallyCompose(arg0: (param0: Throwable) => CompletionStage<T>): CompletionStage<T>;
    exceptionallyComposeAsync(arg0: (param0: Throwable) => CompletionStage<T>): CompletableFuture<T>;
    exceptionallyComposeAsync(arg0: (param0: Throwable) => CompletionStage<T>, arg1: Executor): CompletableFuture<T>;
    exceptionallyComposeAsync(arg0: (param0: Throwable) => CompletionStage<T>): CompletionStage<T>;
    exceptionallyComposeAsync(arg0: (param0: Throwable) => CompletionStage<T>, arg1: Executor): CompletionStage<T>;
    get(): T;
    get(arg0: number, arg1: TimeUnit): T;
    getNow(arg0: T): T;
    getNumberOfDependents(): number;
    handle<U extends unknown>(arg0: (param0: T, param1: Throwable) => U): CompletableFuture<U>;
    handleAsync<U extends unknown>(arg0: (param0: T, param1: Throwable) => U): CompletableFuture<U>;
    handleAsync<U extends unknown>(arg0: (param0: T, param1: Throwable) => U, arg1: Executor): CompletableFuture<U>;
    internalComplete(arg0: Object): boolean;
    isCancelled(): boolean;
    isCompletedExceptionally(): boolean;
    isDone(): boolean;
    join(): T;
    minimalCompletionStage(): CompletionStage<T>;
    newIncompleteFuture<U extends unknown>(): CompletableFuture<U>;
    obtrudeException(arg0: Throwable): void;
    obtrudeValue(arg0: T): void;
    // private orAcceptStage<U extends T>(arg0: Executor, arg1: CompletionStage<U>, arg2: (param0: T) => void): CompletableFuture<void>;
    // private orApplyStage<V extends unknown, U extends T>(arg0: Executor, arg1: CompletionStage<U>, arg2: (param0: T) => V): CompletableFuture<V>;
    // private orRunStage(arg0: Executor, arg1: CompletionStage<Object>, arg2: () => void): CompletableFuture<void>;
    orTimeout(arg0: number, arg1: TimeUnit): CompletableFuture<T>;
    orpush(arg0: CompletableFuture<Object>, arg1: CompletableFuture$BiCompletion<Object, Object, Object>): void;
    postComplete(): void;
    postFire(arg0: CompletableFuture<Object>, arg1: CompletableFuture<Object>, arg2: number): CompletableFuture<T>;
    postFire(arg0: CompletableFuture<Object>, arg1: number): CompletableFuture<T>;
    pushStack(arg0: CompletableFuture$Completion): void;
    resultNow(): T;
    runAfterBoth(arg0: CompletionStage<Object>, arg1: () => void): CompletableFuture<void>;
    runAfterBothAsync(arg0: CompletionStage<Object>, arg1: () => void): CompletableFuture<void>;
    runAfterBothAsync(arg0: CompletionStage<Object>, arg1: () => void, arg2: Executor): CompletableFuture<void>;
    runAfterEither(arg0: CompletionStage<Object>, arg1: () => void): CompletableFuture<void>;
    runAfterEitherAsync(arg0: CompletionStage<Object>, arg1: () => void): CompletableFuture<void>;
    runAfterEitherAsync(arg0: CompletionStage<Object>, arg1: () => void, arg2: Executor): CompletableFuture<void>;
    state(): Future$State;
    thenAccept(arg0: (param0: T) => void): CompletableFuture<void>;
    thenAcceptAsync(arg0: (param0: T) => void): CompletableFuture<void>;
    thenAcceptAsync(arg0: (param0: T) => void, arg1: Executor): CompletableFuture<void>;
    thenAcceptBoth<U extends unknown>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => void): CompletableFuture<void>;
    thenAcceptBothAsync<U extends unknown>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => void): CompletableFuture<void>;
    thenAcceptBothAsync<U extends unknown>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => void, arg2: Executor): CompletableFuture<void>;
    thenApply<U extends unknown>(arg0: (param0: T) => U): CompletableFuture<U>;
    thenApplyAsync<U extends unknown>(arg0: (param0: T) => U): CompletableFuture<U>;
    thenApplyAsync<U extends unknown>(arg0: (param0: T) => U, arg1: Executor): CompletableFuture<U>;
    thenCombine<V extends unknown, U extends unknown>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => V): CompletableFuture<V>;
    thenCombineAsync<V extends unknown, U extends unknown>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => V): CompletableFuture<V>;
    thenCombineAsync<V extends unknown, U extends unknown>(arg0: CompletionStage<U>, arg1: (param0: T, param1: U) => V, arg2: Executor): CompletableFuture<V>;
    thenCompose<U extends unknown>(arg0: (param0: T) => CompletionStage<U>): CompletableFuture<U>;
    thenComposeAsync<U extends unknown>(arg0: (param0: T) => CompletionStage<U>): CompletableFuture<U>;
    thenComposeAsync<U extends unknown>(arg0: (param0: T) => CompletionStage<U>, arg1: Executor): CompletableFuture<U>;
    thenRun(arg0: () => void): CompletableFuture<void>;
    thenRunAsync(arg0: () => void): CompletableFuture<void>;
    thenRunAsync(arg0: () => void, arg1: Executor): CompletableFuture<void>;
    // private timedGet(arg0: number): Object;
    toCompletableFuture(): CompletableFuture<T>;
    toString(): string;
    tryPushStack(arg0: CompletableFuture$Completion): boolean;
    // private uniAcceptNow(arg0: Object, arg1: Executor, arg2: (param0: T) => void): CompletableFuture<void>;
    // private uniAcceptStage(arg0: Executor, arg1: (param0: T) => void): CompletableFuture<void>;
    // private uniApplyNow<V extends unknown>(arg0: Object, arg1: Executor, arg2: (param0: T) => V): CompletableFuture<V>;
    // private uniApplyStage<V extends unknown>(arg0: Executor, arg1: (param0: T) => V): CompletableFuture<V>;
    // private uniAsMinimalStage(): CompletableFuture$MinimalStage<T>;
    // private uniComposeExceptionallyStage(arg0: Executor, arg1: (param0: Throwable) => CompletionStage<T>): CompletableFuture<T>;
    // private uniComposeStage<V extends unknown>(arg0: Executor, arg1: (param0: T) => CompletionStage<V>): CompletableFuture<V>;
    uniExceptionally(arg0: Object, arg1: (param0: Throwable) => T, arg2: CompletableFuture$UniExceptionally<T>): boolean;
    // private uniExceptionallyStage(arg0: Executor, arg1: (param0: Throwable) => T): CompletableFuture<T>;
    uniHandle<S extends unknown>(arg0: Object, arg1: (param0: S, param1: Throwable) => T, arg2: CompletableFuture$UniHandle<S, T>): boolean;
    // private uniHandleStage<V extends unknown>(arg0: Executor, arg1: (param0: T, param1: Throwable) => V): CompletableFuture<V>;
    // private uniRunNow(arg0: Object, arg1: Executor, arg2: () => void): CompletableFuture<void>;
    // private uniRunStage(arg0: Executor, arg1: () => void): CompletableFuture<void>;
    uniWhenComplete(arg0: Object, arg1: (param0: T, param1: Throwable) => void, arg2: CompletableFuture$UniWhenComplete<T>): boolean;
    // private uniWhenCompleteStage(arg0: Executor, arg1: (param0: T, param1: Throwable) => void): CompletableFuture<T>;
    unipush(arg0: CompletableFuture$Completion): void;
    // private waitingGet(arg0: boolean): Object;
    whenComplete(arg0: (param0: T, param1: Throwable) => void): CompletableFuture<T>;
    whenCompleteAsync(arg0: (param0: T, param1: Throwable) => void): CompletableFuture<T>;
    whenCompleteAsync(arg0: (param0: T, param1: Throwable) => void, arg1: Executor): CompletableFuture<T>;
}