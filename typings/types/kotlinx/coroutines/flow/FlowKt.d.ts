import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { IndexedValue } from '../../../kotlin/collections/IndexedValue.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
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
    static all<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): boolean;
    static any<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): boolean;
    static asFlow<T extends unknown>(self: T[]): Flow<T>;
    static asFlow<T extends unknown>(self: Iterator<T>): Flow<T>;
    static asFlow<T extends unknown>(self: () => T): Flow<T>;
    static asFlow<T extends unknown>(self: Sequence<T>): Flow<T>;
    static asFlow<T extends unknown>(self: SharedFlow<T>): Flow<T>;
    static asFlow(self: number[]): Flow<number>;
    static asFlow(self: { start: number; endInclusive: number; step: number }): Flow<number>;
    static asSharedFlow<T extends unknown>(self: MutableSharedFlow<T>): SharedFlow<T>;
    static asStateFlow<T extends unknown>(self: MutableStateFlow<T>): StateFlow<T>;
    static associate<K extends unknown, V extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => Pair<K, V>): Map<K, V>;
    static associateBy<K extends unknown, V extends unknown, T extends unknown>(self: Flow<T>, keySelector: (param0: T) => K, valueTransform: (param0: T) => V): Map<K, V>;
    static associateBy<K extends unknown, T extends unknown>(self: Flow<T>, keySelector: (param0: T) => K): Map<K, T>;
    static associateByTo<M extends Map<K, T>, T extends unknown, K extends unknown>(self: Flow<T>, destination: M, keySelector: (param0: T) => K): M;
    static associateByTo<M extends Map<K, V>, T extends unknown, K extends unknown, V extends unknown>(self: Flow<T>, destination: M, keySelector: (param0: T) => K, valueTransform: (param0: T) => V): M;
    static associateTo<M extends Map<K, V>, T extends unknown, K extends unknown, V extends unknown>(self: Flow<T>, destination: M, transform: (param0: T) => Pair<K, V>): M;
    static associateWith<K extends unknown, V extends unknown>(self: Flow<K>, valueSelector: (param0: K) => V): Map<K, V>;
    static associateWithTo<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Flow<K>, destination: M, valueSelector: (param0: K) => V): M;
    static buffer<T extends unknown>(self: Flow<T>, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
    static buffer<T extends unknown>(self: Flow<T>, capacity: number): Flow<T>;
    static cache<T extends unknown>(self: Flow<T>): Flow<T>;
    static callbackFlow<T extends unknown>(block: (param0: ProducerScope<T>) => void): Flow<T>;
    static cancellable<T extends unknown>(self: Flow<T>): Flow<T>;
    static catch<T extends unknown>(self: Flow<T>, action: (param0: FlowCollector<T>, param1: Throwable) => void): Flow<T>;
    static catchImpl<T extends unknown>(self: Flow<T>, collector: FlowCollector<T>): Throwable | null;
    static channelFlow<T extends unknown>(block: (param0: ProducerScope<T>) => void): Flow<T>;
    static chunked<T extends unknown>(self: Flow<T>, size: number): Flow<T[]>;
    static collect<T extends unknown>(self: Flow<T>, action: (param0: T) => void): void;
    static collect(self: Flow<Object>): void;
    static collectIndexed<T extends unknown>(self: Flow<T>, action: (param0: number, param1: T) => void): void;
    static collectLatest<T extends unknown>(self: Flow<T>, action: (param0: T) => void): void;
    static collectLatest<T extends unknown>(self: SharedFlow<T>, action: (param0: T) => void): void;
    static collectWhile<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): void;
    static combine<R extends unknown, T extends unknown>(flows: Flow<T>[], transform: (param0: T[]) => R): Flow<R>;
    static combine<R extends unknown, T1 extends unknown, T2 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, transform: (param0: T1, param1: T2) => R): Flow<R>;
    static combine<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, flow3: Flow<T3>, transform: (param0: T1, param1: T2, param2: T3) => R): Flow<R>;
    static combine<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, flow3: Flow<T3>, flow4: Flow<T4>, transform: (param0: T1, param1: T2, param2: T3, param3: T4) => R): Flow<R>;
    static combine<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, flow3: Flow<T3>, flow4: Flow<T4>, flow5: Flow<T5>, transform: (param0: T1, param1: T2, param2: T3, param3: T4, param4: T5) => R): Flow<R>;
    static combineLatest<R extends unknown, T1 extends unknown, T2 extends unknown>(self: Flow<T1>, other: Flow<T2>, transform: (param0: T1, param1: T2) => R): Flow<R>;
    static combineLatest<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown>(self: Flow<T1>, other: Flow<T2>, other2: Flow<T3>, transform: (param0: T1, param1: T2, param2: T3) => R): Flow<R>;
    static combineLatest<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown>(self: Flow<T1>, other: Flow<T2>, other2: Flow<T3>, other3: Flow<T4>, transform: (param0: T1, param1: T2, param2: T3, param3: T4) => R): Flow<R>;
    static combineLatest<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown>(self: Flow<T1>, other: Flow<T2>, other2: Flow<T3>, other3: Flow<T4>, other4: Flow<T5>, transform: (param0: T1, param1: T2, param2: T3, param3: T4, param4: T5) => R): Flow<R>;
    static combineTransform<R extends unknown, T extends unknown>(flows: Flow<T>[], transform: (param0: FlowCollector<R>, param1: T[]) => void): Flow<R>;
    static combineTransform<R extends unknown, T1 extends unknown, T2 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, transform: (param0: FlowCollector<R>, param1: T1, param2: T2) => void): Flow<R>;
    static combineTransform<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, flow3: Flow<T3>, transform: (param0: FlowCollector<R>, param1: T1, param2: T2, param3: T3) => void): Flow<R>;
    static combineTransform<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, flow3: Flow<T3>, flow4: Flow<T4>, transform: (param0: FlowCollector<R>, param1: T1, param2: T2, param3: T3, param4: T4) => void): Flow<R>;
    static combineTransform<R extends unknown, T1 extends unknown, T2 extends unknown, T3 extends unknown, T4 extends unknown, T5 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, flow3: Flow<T3>, flow4: Flow<T4>, flow5: Flow<T5>, transform: (param0: FlowCollector<R>, param1: T1, param2: T2, param3: T3, param4: T4, param5: T5) => void): Flow<R>;
    static compose<R extends unknown, T extends unknown>(self: Flow<T>, transformer: (param0: Flow<T>) => Flow<R>): Flow<R>;
    static concatMap<R extends unknown, T extends unknown>(self: Flow<T>, mapper: (param0: T) => Flow<R>): Flow<R>;
    static concatWith<T extends unknown>(self: Flow<T>, value: T): Flow<T>;
    static concatWith<T extends unknown>(self: Flow<T>, other: Flow<T>): Flow<T>;
    static conflate<T extends unknown>(self: Flow<T>): Flow<T>;
    static consumeAsFlow<T extends unknown>(self: ReceiveChannel<T>): Flow<T>;
    static count<T extends unknown>(self: Flow<T>): number;
    static count<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): number;
    static debounce<T extends unknown>(self: Flow<T>, timeoutMillis: (param0: T) => number): Flow<T>;
    static debounce<T extends unknown>(self: Flow<T>, timeoutMillis: number): Flow<T>;
// (invalid TS: name contains '-')     static debounce-HG0u8IE<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static debounceDuration<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object) => Duration): Flow<T>;
    static delayEach<T extends unknown>(self: Flow<T>, timeMillis: number): Flow<T>;
    static delayFlow<T extends unknown>(self: Flow<T>, timeMillis: number): Flow<T>;
    static distinctUntilChanged<T extends unknown>(self: Flow<T>): Flow<T>;
    static distinctUntilChanged<T extends unknown>(self: Flow<T>, areEquivalent: (param0: T, param1: T) => boolean): Flow<T>;
    static distinctUntilChangedBy<T extends unknown, K extends unknown>(self: Flow<T>, keySelector: (param0: T) => K): Flow<T>;
    static drop<T extends unknown>(self: Flow<T>, count: number): Flow<T>;
    static dropWhile<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): Flow<T>;
    static emitAll<T extends unknown>(self: FlowCollector<T>, channel: ReceiveChannel<T>): void;
    static emitAll<T extends unknown>(self: FlowCollector<T>, flow: Flow<T>): void;
    static emptyFlow<T extends unknown>(): Flow<T>;
    static ensureActive(self: FlowCollector<Object>): void;
    static filter<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): Flow<T>;
    static filterIsInstance<R extends unknown>(self: Flow<Object>): Flow<R>;
    static filterIsInstance<R extends unknown>(self: Flow<Object>, klass: KClass<R>): Flow<R>;
    static filterNot<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): Flow<T>;
    static filterNotNull<T extends unknown>(self: Flow<T>): Flow<T>;
    static first<T extends unknown>(self: Flow<T>): T;
    static first<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): T;
    static firstOrNull<T extends unknown>(self: Flow<T>): T | null;
    static firstOrNull<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): T | null;
    static fixedPeriodTicker(self: CoroutineScope, delayMillis: number): ReceiveChannel<void>;
    static flatMap<R extends unknown, T extends unknown>(self: Flow<T>, mapper: (param0: T) => Flow<R>): Flow<R>;
    static flatMapConcat<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => Flow<R>): Flow<R>;
    static flatMapLatest<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => Flow<R>): Flow<R>;
    static flatMapMerge<R extends unknown, T extends unknown>(self: Flow<T>, concurrency: number, transform: (param0: T) => Flow<R>): Flow<R>;
    static flatten<T extends unknown>(self: Flow<Flow<T>>): Flow<T>;
    static flattenConcat<T extends unknown>(self: Flow<Flow<T>>): Flow<T>;
    static flattenMerge<T extends unknown>(self: Flow<Flow<T>>, concurrency: number): Flow<T>;
    static flow<T extends unknown>(block: (param0: FlowCollector<T>) => void): Flow<T>;
    static flowCombine<T1 extends unknown, T2 extends unknown, R extends unknown>(paramarg0: Flow<T1>, paramarg1: Flow<T2>, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
    static flowCombineTransform<T1 extends unknown, T2 extends unknown, R extends unknown>(paramarg0: Flow<T1>, paramarg1: Flow<T2>, paramarg2: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<R>;
    static flowOf<T extends unknown>(value: T): Flow<T>;
    static flowOf<T extends unknown>(...elements: T[]): Flow<T>;
    static flowOn<T extends unknown>(self: Flow<T>, context: CoroutineContext): Flow<T>;
    static fold<R extends unknown, T extends unknown>(self: Flow<T>, initial: R, operation: (param0: R, param1: T) => R): R;
    static forEach<T extends unknown>(self: Flow<T>, action: (param0: T) => void): void;
    static getDEFAULT_CONCURRENCY(): number;
    static groupBy<K extends unknown, V extends unknown, T extends unknown>(self: Flow<T>, keySelector: (param0: T) => K, valueTransform: (param0: T) => V): Map<K, V[]>;
    static groupBy<K extends unknown, T extends unknown>(self: Flow<T>, keySelector: (param0: T) => K): Map<K, T[]>;
    static groupByTo<M extends Map<K, T[]>, T extends unknown, K extends unknown>(self: Flow<T>, destination: M, keySelector: (param0: T) => K): M;
    static groupByTo<M extends Map<K, V[]>, T extends unknown, K extends unknown, V extends unknown>(self: Flow<T>, destination: M, keySelector: (param0: T) => K, valueTransform: (param0: T) => V): M;
    static last<T extends unknown>(self: Flow<T>): T;
    static lastOrNull<T extends unknown>(self: Flow<T>): T | null;
    static launchIn<T extends unknown>(self: Flow<T>, scope: CoroutineScope): Job;
    static map<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => R): Flow<R>;
    static mapLatest<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => R): Flow<R>;
    static mapNotNull<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => R | null): Flow<R>;
    static merge<T extends unknown>(self: Flow<T>[]): Flow<T>;
    static merge<T extends unknown>(...flows: Flow<T>[]): Flow<T>;
    static merge<T extends unknown>(self: Flow<Flow<T>>): Flow<T>;
    static noImpl(): void;
    static none<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): boolean;
    static observeOn<T extends unknown>(self: Flow<T>, context: CoroutineContext): Flow<T>;
    static onCompletion<T extends unknown>(self: Flow<T>, action: (param0: FlowCollector<T>, param1: Throwable | null) => void): Flow<T>;
    static onEach<T extends unknown>(self: Flow<T>, action: (param0: T) => void): Flow<T>;
    static onEmpty<T extends unknown>(self: Flow<T>, action: (param0: FlowCollector<T>) => void): Flow<T>;
    static onErrorResume<T extends unknown>(self: Flow<T>, fallback: Flow<T>): Flow<T>;
    static onErrorResumeNext<T extends unknown>(self: Flow<T>, fallback: Flow<T>): Flow<T>;
    static onErrorReturn<T extends unknown>(self: Flow<T>, fallback: T): Flow<T>;
    static onErrorReturn<T extends unknown>(self: Flow<T>, fallback: T, predicate: (param0: Throwable) => boolean): Flow<T>;
    static onStart<T extends unknown>(self: Flow<T>, action: (param0: FlowCollector<T>) => void): Flow<T>;
    static onSubscription<T extends unknown>(self: SharedFlow<T>, action: (param0: FlowCollector<T>) => void): SharedFlow<T>;
    static onSubscription<T extends unknown>(self: StateFlow<T>, action: (param0: FlowCollector<T>) => void): StateFlow<T>;
    static produceIn<T extends unknown>(self: Flow<T>, scope: CoroutineScope): ReceiveChannel<T>;
    static publish<T extends unknown>(self: Flow<T>): Flow<T>;
    static publish<T extends unknown>(self: Flow<T>, bufferSize: number): Flow<T>;
    static publishOn<T extends unknown>(self: Flow<T>, context: CoroutineContext): Flow<T>;
    static receiveAsFlow<T extends unknown>(self: ReceiveChannel<T>): Flow<T>;
    static reduce<S extends unknown, T extends S>(self: Flow<T>, operation: (param0: S, param1: T) => S): S;
    static replay<T extends unknown>(self: Flow<T>): Flow<T>;
    static replay<T extends unknown>(self: Flow<T>, bufferSize: number): Flow<T>;
    static retry<T extends unknown>(self: Flow<T>, retries: number, predicate: (param0: Throwable) => boolean): Flow<T>;
    static retryWhen<T extends unknown>(self: Flow<T>, predicate: (param0: FlowCollector<T>, param1: Throwable, param2: number) => boolean): Flow<T>;
    static runningFold<R extends unknown, T extends unknown>(self: Flow<T>, initial: R, operation: (param0: R, param1: T) => R): Flow<R>;
    static runningReduce<T extends unknown>(self: Flow<T>, operation: (param0: T, param1: T) => T): Flow<T>;
    static sample<T extends unknown>(self: Flow<T>, periodMillis: number): Flow<T>;
// (invalid TS: name contains '-')     static sample-HG0u8IE<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static scan<R extends unknown, T extends unknown>(self: Flow<T>, initial: R, operation: (param0: R, param1: T) => R): Flow<R>;
    static scanFold<R extends unknown, T extends unknown>(self: Flow<T>, initial: R, operation: (param0: R, param1: T) => R): Flow<R>;
    static scanReduce<T extends unknown>(self: Flow<T>, operation: (param0: T, param1: T) => T): Flow<T>;
    static shareIn<T extends unknown>(self: Flow<T>, scope: CoroutineScope, started: SharingStarted, replay: number): SharedFlow<T>;
    static single<T extends unknown>(self: Flow<T>): T;
    static singleOrNull<T extends unknown>(self: Flow<T>): T | null;
    static skip<T extends unknown>(self: Flow<T>, count: number): Flow<T>;
    static startWith<T extends unknown>(self: Flow<T>, value: T): Flow<T>;
    static startWith<T extends unknown>(self: Flow<T>, other: Flow<T>): Flow<T>;
    static stateIn<T extends unknown>(self: Flow<T>, scope: CoroutineScope): StateFlow<T>;
    static stateIn<T extends unknown>(self: Flow<T>, scope: CoroutineScope, started: SharingStarted, initialValue: T): StateFlow<T>;
    static subscribe<T extends unknown>(self: Flow<T>): void;
    static subscribe<T extends unknown>(self: Flow<T>, onEach: (param0: T) => void): void;
    static subscribe<T extends unknown>(self: Flow<T>, onEach: (param0: T) => void, onError: (param0: Throwable) => void): void;
    static subscribeOn<T extends unknown>(self: Flow<T>, context: CoroutineContext): Flow<T>;
    static switchMap<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: T) => Flow<R>): Flow<R>;
    static take<T extends unknown>(self: Flow<T>, count: number): Flow<T>;
    static takeWhile<T extends unknown>(self: Flow<T>, predicate: (param0: T) => boolean): Flow<T>;
// (invalid TS: name contains '-')     static timeout-HG0u8IE<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static toCollection<C extends T[], T extends unknown>(self: Flow<T>, destination: C): C;
    static toList<T extends unknown>(self: Flow<T>, destination: T[]): T[];
    static toSet<T extends unknown>(self: Flow<T>, destination: T[]): T[];
    static transform<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: FlowCollector<R>, param1: T) => void): Flow<R>;
    static transformLatest<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: FlowCollector<R>, param1: T) => void): Flow<R>;
    static transformWhile<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: FlowCollector<R>, param1: T) => boolean): Flow<R>;
    static unsafeTransform<R extends unknown, T extends unknown>(self: Flow<T>, transform: (param0: FlowCollector<R>, param1: T) => void): Flow<R>;
    static withIndex<T extends unknown>(self: Flow<T>): Flow<IndexedValue<T>>;
    static zip<R extends unknown, T1 extends unknown, T2 extends unknown>(self: Flow<T1>, other: Flow<T2>, transform: (param0: T1, param1: T2) => R): Flow<R>;
}