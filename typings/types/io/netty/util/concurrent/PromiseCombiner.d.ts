import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PromiseCombiner extends Object {
    constructor()
    constructor(arg0: (Object | null)[])
    // private aggregatePromise: Promise<void>;
    // private cause: Throwable;
    // private doneCount: number;
    // private executor: (Object | null)[];
    // private expectedCount: number;
    // private listener: GenericFutureListener<Future<Object>>;
    add(arg0: Future<Object>): void;
    add(arg0: Promise<Object>): void;
    addAll(...arg0: Future<Object>[]): void;
    addAll(...arg0: Promise<Object>[]): void;
    // private checkAddAllowed(): void;
    // private checkInEventLoop(): void;
    finish(arg0: Promise<void>): void;
    // private tryPromise(): boolean;
}