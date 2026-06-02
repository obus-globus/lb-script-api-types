import type { Reference } from '../../../java/lang/ref/Reference.d.ts'
import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PhantomReference<T extends Object | number | string | boolean> extends Reference<T> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: T, arg1: ReferenceQueue<T>)
    // private clear0(): void;
    clearImpl(): void;
    get(): T | null;
    // private refersTo0(arg0: Object): boolean;
    refersToImpl(arg0: T): boolean;
}