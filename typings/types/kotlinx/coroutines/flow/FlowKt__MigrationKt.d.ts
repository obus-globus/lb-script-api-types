import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__MigrationKt extends Object {
    static cache(paramarg0: Flow<Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null) => Object | null): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null, param4: Object | null, param5: Object | null) => Object | null): Flow<Object>;
    static compose(paramarg0: Flow<Object>, paramarg1: (param0: Object | null) => Object | null): Flow<Object>;
    static concatMap(paramarg0: Flow<Object>, paramarg1: (param0: Object | null) => Object | null): Flow<Object>;
    static concatWith(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static concatWith(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static delayEach(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static delayFlow(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static flatMap(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static flatten(paramarg0: Flow<Object>): Flow<Object>;
    static forEach(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): void;
    static merge(paramarg0: Flow<Object>): Flow<Object>;
    static noImpl(): void;
    static observeOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static onErrorResume(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static onErrorResumeNext(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static onErrorReturn(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static onErrorReturn(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object | null) => boolean): Flow<Object>;
    static publish(paramarg0: Flow<Object>): Flow<Object>;
    static publish(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static publishOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static replay(paramarg0: Flow<Object>): Flow<Object>;
    static replay(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static scanFold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static scanReduce(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
    static skip(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static startWith(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static startWith(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static subscribe(paramarg0: Flow<Object>): void;
    static subscribe(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): void;
    static subscribe(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): void;
    static subscribeOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static switchMap(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
}