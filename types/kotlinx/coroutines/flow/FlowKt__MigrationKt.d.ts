import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Function4 } from '../../../kotlin/jvm/functions/Function4.d.ts'
import type { Function5 } from '../../../kotlin/jvm/functions/Function5.d.ts'
import type { Function6 } from '../../../kotlin/jvm/functions/Function6.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__MigrationKt extends Object {
    static cache(paramarg0: Flow<Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Function5<Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: Function6<Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static compose(paramarg0: Flow<Object>, paramarg1: Function1<Object, Object>): Flow<Object>;
    static concatMap(paramarg0: Flow<Object>, paramarg1: Function1<Object, Object>): Flow<Object>;
    static concatWith(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static concatWith(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static delayEach(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static delayFlow(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static flatMap(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static flatten(paramarg0: Flow<Object>): Flow<Object>;
    static forEach(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): void;
    static merge(paramarg0: Flow<Object>): Flow<Object>;
    static noImpl(): void;
    static observeOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static onErrorResume(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static onErrorResumeNext(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static onErrorReturn(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static onErrorReturn(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function1<Object, boolean>): Flow<Object>;
    static publish(paramarg0: Flow<Object>): Flow<Object>;
    static publish(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static publishOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static replay(paramarg0: Flow<Object>): Flow<Object>;
    static replay(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static scanFold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static scanReduce(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static skip(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static startWith(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static startWith(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static subscribe(paramarg0: Flow<Object>): void;
    static subscribe(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): void;
    static subscribe(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Function2<Object, Object, Object>): void;
    static subscribeOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static switchMap(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
}