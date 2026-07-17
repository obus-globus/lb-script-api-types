import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { IndexedValue } from '../../../kotlin/collections/IndexedValue.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { BroadcastChannel } from '../../../kotlinx/coroutines/channels/BroadcastChannel.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { SelectClause1 } from '../../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export class ChannelsKt extends Object {
    static DEFAULT_CLOSE_MESSAGE: string;
    static any<E extends unknown>(self: ReceiveChannel<E>): boolean;
    static cancelConsumed(self: ReceiveChannel<Object>, cause: Throwable | null): void;
    static consume<R extends unknown, E extends unknown>(self: BroadcastChannel<E>, block: (param0: ReceiveChannel<E>) => R): R;
    static consume<R extends unknown, E extends unknown>(self: ReceiveChannel<E>, block: (param0: ReceiveChannel<E>) => R): R;
    static consumeEach<E extends unknown>(self: BroadcastChannel<E>, action: (param0: E) => void): void;
    static consumeEach<E extends unknown>(self: ReceiveChannel<E>, action: (param0: E) => void): void;
    static consumeTo<C extends E[], E extends unknown>(self: ReceiveChannel<E>, collection: C): C;
    static consumes(self: ReceiveChannel<Object>): (param0: Throwable | null) => void;
    static consumesAll(...channels: ReceiveChannel<Object>[]): (param0: Throwable | null) => void;
    static count<E extends unknown>(self: ReceiveChannel<E>): number;
    static distinct<E extends unknown>(self: ReceiveChannel<E>): ReceiveChannel<E>;
    static distinctBy<E extends unknown, K extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, selector: (param0: E) => K): ReceiveChannel<E>;
    static drop<E extends unknown>(self: ReceiveChannel<E>, n: number, context: CoroutineContext): ReceiveChannel<E>;
    static dropWhile<E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, predicate: (param0: E) => boolean): ReceiveChannel<E>;
    static elementAt<E extends unknown>(self: ReceiveChannel<E>, index: number): E;
    static elementAtOrNull<E extends unknown>(self: ReceiveChannel<E>, index: number): E | null;
    static filter<E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, predicate: (param0: E) => boolean): ReceiveChannel<E>;
    static filterIndexed<E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, predicate: (param0: number, param1: E) => boolean): ReceiveChannel<E>;
    static filterNot<E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, predicate: (param0: E) => boolean): ReceiveChannel<E>;
    static filterNotNull<E extends unknown>(self: ReceiveChannel<E>): ReceiveChannel<E>;
    static filterNotNullTo<C extends E[], E extends unknown>(self: ReceiveChannel<E>, destination: C): C;
    static filterNotNullTo<C extends SendChannel<E>, E extends unknown>(self: ReceiveChannel<E>, destination: C): C;
    static first<E extends unknown>(self: ReceiveChannel<E>): E;
    static firstOrNull<E extends unknown>(self: ReceiveChannel<E>): E | null;
    static flatMap<R extends unknown, E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, transform: (param0: E) => ReceiveChannel<R>): ReceiveChannel<R>;
    static indexOf<E extends unknown>(self: ReceiveChannel<E>, element: E): number;
    static last<E extends unknown>(self: ReceiveChannel<E>): E;
    static lastIndexOf<E extends unknown>(self: ReceiveChannel<E>, element: E): number;
    static lastOrNull<E extends unknown>(self: ReceiveChannel<E>): E | null;
    static map<R extends unknown, E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, transform: (param0: E) => R): ReceiveChannel<R>;
    static mapIndexed<R extends unknown, E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, transform: (param0: number, param1: E) => R): ReceiveChannel<R>;
    static mapIndexedNotNull<R extends unknown, E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, transform: (param0: number, param1: E) => R | null): ReceiveChannel<R>;
    static mapNotNull<R extends unknown, E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, transform: (param0: E) => R | null): ReceiveChannel<R>;
    static maxWith<E extends unknown>(self: ReceiveChannel<E>, comparator: (param0: E, param1: E) => number): E | null;
    static minWith<E extends unknown>(self: ReceiveChannel<E>, comparator: (param0: E, param1: E) => number): E | null;
    static none<E extends unknown>(self: ReceiveChannel<E>): boolean;
    static onReceiveOrNull<E extends unknown>(self: ReceiveChannel<E>): SelectClause1<E>;
    static produce<E extends unknown>(self: CoroutineScope, context: Job, capacity: number, block: (param0: ProducerScope<E>) => void): ReceiveChannel<E>;
    static receiveOrNull<E extends unknown>(self: ReceiveChannel<E>): E | null;
    static requireNoNulls<E extends unknown>(self: ReceiveChannel<E>): ReceiveChannel<E>;
    static sendBlocking<E extends unknown>(self: SendChannel<E>, element: E): void;
    static single<E extends unknown>(self: ReceiveChannel<E>): E;
    static singleOrNull<E extends unknown>(self: ReceiveChannel<E>): E | null;
    static take<E extends unknown>(self: ReceiveChannel<E>, n: number, context: CoroutineContext): ReceiveChannel<E>;
    static takeWhile<E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext, predicate: (param0: E) => boolean): ReceiveChannel<E>;
    static toChannel<C extends SendChannel<E>, E extends unknown>(self: ReceiveChannel<E>, destination: C): C;
    static toCollection<C extends E[], E extends unknown>(self: ReceiveChannel<E>, destination: C): C;
    static toList<E extends unknown>(self: ReceiveChannel<E>): E[];
    static toMap<M extends JavaMap<K, V>, K extends unknown, V extends unknown>(self: ReceiveChannel<Pair<K, V>>, destination: M): M;
    static toMap<K extends unknown, V extends unknown>(self: ReceiveChannel<Pair<K, V>>): JavaMap<K, V>;
    static toMutableList<E extends unknown>(self: ReceiveChannel<E>): E[];
    static toMutableSet<E extends unknown>(self: ReceiveChannel<E>): E[];
    static toSet<E extends unknown>(self: ReceiveChannel<E>): E[];
    static trySendBlocking<E extends unknown>(self: SendChannel<E>, element: E): ChannelResult<void>;
    static withIndex<E extends unknown>(self: ReceiveChannel<E>, context: CoroutineContext): ReceiveChannel<IndexedValue<E>>;
    static zip<V extends unknown, E extends unknown, R extends unknown>(self: ReceiveChannel<E>, other: ReceiveChannel<R>, context: CoroutineContext, transform: (param0: E, param1: R) => V): ReceiveChannel<V>;
    static zip<E extends unknown, R extends unknown>(self: ReceiveChannel<E>, other: ReceiveChannel<R>): ReceiveChannel<Pair<E, R>>;
}