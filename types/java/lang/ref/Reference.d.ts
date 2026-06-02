import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Reference<T extends Object | number | string | boolean> extends Object {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: T)
    constructor(arg0: T, arg1: ReferenceQueue<T>)
    // private discovered: Reference<Object>;
    // private next: Reference<Object>;
    // private queue: ReferenceQueue<T>;
    // private referent: T;
    clear(): void;
    // private clear0(): void;
    clearImpl(): void;
    clearInactiveFinalReference(): void;
    clone(): Object;
    enqueue(): boolean;
    // private enqueueFromPending(): void;
    get(): T | null;
    getFromInactiveFinalReference(): T;
    isEnqueued(): boolean;
    refersTo(arg0: T): boolean;
    // private refersTo0(arg0: Object): boolean;
    refersToImpl(arg0: T): boolean;
}