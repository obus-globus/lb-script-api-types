import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { Recycler$GuardedLocalPool } from '../../../io/netty/util/Recycler$GuardedLocalPool.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Recycler$DefaultHandle<T extends unknown> extends Recycler$EnhancedHandle<T> {
    constructor(arg0: Recycler$GuardedLocalPool<T>)
    // private localPool: Recycler$GuardedLocalPool<T>;
    // private state: number;
    // private value: T;
    claim(): T;
    recycle(arg0: Object): void;
    set(arg0: T): void;
    // private toAvailable(): void;
    unguardedRecycle(arg0: Object): void;
    // private unguardedToAvailable(): void;
}