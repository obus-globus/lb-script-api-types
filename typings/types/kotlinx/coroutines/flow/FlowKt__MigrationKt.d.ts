import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__MigrationKt extends Object {
    static cache<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static combineLatest<T1 extends unknown, T2 extends unknown, R extends unknown>(paramarg0: Flow<T1>, paramarg1: Flow<T2>, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
    static combineLatest<T1 extends unknown, T2 extends unknown, T3 extends unknown, R extends unknown>(paramarg0: Flow<T1>, paramarg1: Flow<T2>, paramarg2: Flow<T3>, paramarg3: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<R>;
    static combineLatest<T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, R extends unknown>(paramarg0: Flow<T1>, paramarg1: Flow<T2>, paramarg2: Flow<T3>, paramarg3: Flow<T4>, paramarg4: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object) => Object): Flow<R>;
    static combineLatest<T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown, R extends unknown>(paramarg0: Flow<T1>, paramarg1: Flow<T2>, paramarg2: Flow<T3>, paramarg3: Flow<T4>, paramarg4: Flow<T5>, paramarg5: (param0: Object, param1: Object, param2: Object, param3: Object, param4: Object, param5: Object) => Object): Flow<R>;
    static compose<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object) => Flow<R>): Flow<R>;
    static concatMap<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object) => Flow<R>): Flow<R>;
    static concatWith<T extends unknown>(paramarg0: Flow<T>, paramarg1: T): Flow<T>;
    static concatWith<T extends unknown>(paramarg0: Flow<T>, paramarg1: Flow<T>): Flow<T>;
    static delayEach<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static delayFlow<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static flatMap<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
    static flatten<T extends unknown>(paramarg0: Flow<Flow<T>>): Flow<T>;
    static forEach<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): void;
    static merge<T extends unknown>(paramarg0: Flow<Flow<T>>): Flow<T>;
    static noImpl(): void;
    static observeOn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineContext): Flow<T>;
    static onErrorResume<T extends unknown>(paramarg0: Flow<T>, paramarg1: Flow<T>): Flow<T>;
    static onErrorResumeNext<T extends unknown>(paramarg0: Flow<T>, paramarg1: Flow<T>): Flow<T>;
    static onErrorReturn<T extends unknown>(paramarg0: Flow<T>, paramarg1: T): Flow<T>;
    static onErrorReturn<T extends unknown>(paramarg0: Flow<T>, paramarg1: T, paramarg2: (param0: Object) => boolean): Flow<T>;
    static publish<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static publish<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static publishOn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineContext): Flow<T>;
    static replay<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static replay<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static scanFold<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: R, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
    static scanReduce<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<T>;
    static skip<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static startWith<T extends unknown>(paramarg0: Flow<T>, paramarg1: T): Flow<T>;
    static startWith<T extends unknown>(paramarg0: Flow<T>, paramarg1: Flow<T>): Flow<T>;
    static subscribe<T extends unknown>(paramarg0: Flow<T>): void;
    static subscribe<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): void;
    static subscribe<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: (param0: Object, param1: Object) => Object): void;
    static subscribeOn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineContext): Flow<T>;
    static switchMap<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<R>;
}