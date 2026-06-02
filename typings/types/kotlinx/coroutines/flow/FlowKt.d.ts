import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Function4 } from '../../../kotlin/jvm/functions/Function4.d.ts'
import type { Function5 } from '../../../kotlin/jvm/functions/Function5.d.ts'
import type { Function6 } from '../../../kotlin/jvm/functions/Function6.d.ts'
import type { Function7 } from '../../../kotlin/jvm/functions/Function7.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { MutableSharedFlow } from '../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { MutableStateFlow } from '../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { SharingStarted } from '../../../kotlinx/coroutines/flow/SharingStarted.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class FlowKt extends Object {
    static DEFAULT_CONCURRENCY_PROPERTY_NAME: string;
    static all(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static any(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static asFlow(paramarg0: Object | null): Flow<Object>;
    static asFlow(paramarg0: (Object | null)[]): Flow<Object>;
    static asFlow(paramarg0: Iterator<Object>): Flow<Object>;
    static asFlow(paramarg0: Function0<Object>): Flow<Object>;
    static asFlow(paramarg0: Function1<Object, Object>): Flow<Object>;
    static asFlow(paramarg0: Sequence<Object>): Flow<Object>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asFlow(paramarg0: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asFlow(paramarg0: number[]): Flow<number>;
    static asSharedFlow(paramarg0: MutableSharedFlow<Object>): SharedFlow<Object>;
    static asStateFlow(paramarg0: MutableStateFlow<Object>): StateFlow<Object>;
    static buffer(paramarg0: Flow<Object>, paramarg1: number, paramarg2: BufferOverflow): Flow<Object>;
    static buffer(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static cache(paramarg0: Flow<Object>): Flow<Object>;
    static callbackFlow(paramarg0: Function2<Object, Object, Object>): Flow<Object>;
    static cancellable(paramarg0: Flow<Object>): Flow<Object>;
    static catch(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static catchImpl(paramarg0: Flow<Object>, paramarg1: FlowCollector<Object>, paramarg2: Continuation<Object>): Object;
    static channelFlow(paramarg0: Function2<Object, Object, Object>): Flow<Object>;
    static chunked(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static collect(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static collect(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static collectIndexed(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static collectLatest(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static collectWhile(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static combine(paramarg0: (Object | null)[], paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Object | null, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Function5<Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: Function6<Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Function5<Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineLatest(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: Function6<Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: (Object | null)[], paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Object | null, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Function5<Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Function6<Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static combineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Flow<Object>, paramarg3: Flow<Object>, paramarg4: Flow<Object>, paramarg5: Function7<Object, Object, Object, Object, Object, Object, Object, Object>): Flow<Object>;
    static compose(paramarg0: Flow<Object>, paramarg1: Function1<Object, Object>): Flow<Object>;
    static concatMap(paramarg0: Flow<Object>, paramarg1: Function1<Object, Object>): Flow<Object>;
    static concatWith(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static concatWith(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static conflate(paramarg0: Flow<Object>): Flow<Object>;
    static consumeAsFlow(paramarg0: ReceiveChannel<Object>): Flow<Object>;
    static count(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static count(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static debounce(paramarg0: Flow<Object>, paramarg1: Function1<Object, number>): Flow<Object>;
    static debounce(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
//     static debounce-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
 // ; invalid because of -    static debounceDuration(paramarg0: Flow<Object>, paramarg1: Function1<Object, Duration>): Flow<Object>;
    static delayEach(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static delayFlow(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static distinctUntilChanged(paramarg0: Flow<Object>): Flow<Object>;
    static distinctUntilChanged(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, boolean>): Flow<Object>;
    static distinctUntilChangedBy(paramarg0: Flow<Object>, paramarg1: Function1<Object, Object>): Flow<Object>;
    static drop(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static dropWhile(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static emitAll(paramarg0: FlowCollector<Object>, paramarg1: ReceiveChannel<Object>, paramarg2: Continuation<Object>): Object;
    static emitAll(paramarg0: FlowCollector<Object>, paramarg1: Flow<Object>, paramarg2: Continuation<Object>): Object;
    static emptyFlow(): Flow<Object>;
    static ensureActive(paramarg0: FlowCollector<Object>): void;
    static filter(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static filterIsInstance(paramarg0: Flow<Object>): Flow<Object>;
    static filterIsInstance(paramarg0: Flow<Object>, paramarg1: KClass<Object>): Flow<Object>;
    static filterNot(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static filterNotNull(paramarg0: Flow<Object>): Flow<Object>;
    static first(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static first(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static firstOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static firstOrNull(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static fixedPeriodTicker(paramarg0: CoroutineScope, paramarg1: number): ReceiveChannel<void>;
    static flatMap(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static flatMapConcat(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static flatMapLatest(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static flatMapMerge(paramarg0: Flow<Object>, paramarg1: number, paramarg2: Function2<Object, Object, Object>): Flow<Object>;
    static flatten(paramarg0: Flow<Object>): Flow<Object>;
    static flattenConcat(paramarg0: Flow<Object>): Flow<Object>;
    static flattenMerge(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static flow(paramarg0: Function2<Object, Object, Object>): Flow<Object>;
    static flowCombine(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static flowCombineTransform(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static flowOf(paramarg0: Object | null): Flow<Object>;
    static flowOf(paramarg0: Object | null): Flow<Object>;
    static flowOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static fold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>, paramarg3: Continuation<Object>): Object;
    static forEach(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): void;
    static getDEFAULT_CONCURRENCY(): number;
    static last(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static lastOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static launchIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope): Job;
    static map(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static mapLatest(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static mapNotNull(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static merge(paramarg0: (Object | null)[]): Flow<Object>;
    static merge(paramarg0: Object | null): Flow<Object>;
    static merge(paramarg0: Flow<Object>): Flow<Object>;
    static noImpl(): void;
    static none(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static observeOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static onCompletion(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static onEach(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static onEmpty(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static onErrorResume(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static onErrorResumeNext(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static onErrorReturn(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static onErrorReturn(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function1<Object, boolean>): Flow<Object>;
    static onStart(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static onSubscription(paramarg0: SharedFlow<Object>, paramarg1: Function2<Object, Object, Object>): SharedFlow<Object>;
    static produceIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope): ReceiveChannel<Object>;
    static publish(paramarg0: Flow<Object>): Flow<Object>;
    static publish(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static publishOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static receiveAsFlow(paramarg0: ReceiveChannel<Object>): Flow<Object>;
    static reduce(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static replay(paramarg0: Flow<Object>): Flow<Object>;
    static replay(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static retry(paramarg0: Flow<Object>, paramarg1: number, paramarg2: Function2<Object, Object, Object>): Flow<Object>;
    static retryWhen(paramarg0: Flow<Object>, paramarg1: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
    static runningFold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static runningReduce(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static sample(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
//     static sample-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
 // ; invalid because of -    static scan(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static scanFold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
    static scanReduce(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static shareIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope, paramarg2: SharingStarted, paramarg3: number): SharedFlow<Object>;
    static single(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static singleOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static skip(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static startWith(paramarg0: Flow<Object>, paramarg1: Object | null): Flow<Object>;
    static startWith(paramarg0: Flow<Object>, paramarg1: Flow<Object>): Flow<Object>;
    static stateIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope, paramarg2: Continuation<Object>): Object;
    static stateIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope, paramarg2: SharingStarted, paramarg3: Object | null): StateFlow<Object>;
    static subscribe(paramarg0: Flow<Object>): void;
    static subscribe(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): void;
    static subscribe(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Function2<Object, Object, Object>): void;
    static subscribeOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static switchMap(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static take(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static takeWhile(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
//     static timeout-HG0u8IE(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
 // ; invalid because of -    static toCollection(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static toList(paramarg0: Flow<Object>, paramarg1: (Object | null)[], paramarg2: Continuation<Object>): Object;
    static toSet(paramarg0: Flow<Object>, paramarg1: (Object | null)[], paramarg2: Continuation<Object>): Object;
    static transform(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static transformLatest(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static transformWhile(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static unsafeTransform(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static withIndex(paramarg0: Flow<Object>): Flow<Object>;
    static zip(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
}