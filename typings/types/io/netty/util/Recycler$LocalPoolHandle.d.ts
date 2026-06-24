import type { Recycler$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { Recycler$UnguardedLocalPool } from '../../../io/netty/util/Recycler$UnguardedLocalPool.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Recycler$LocalPoolHandle<T extends unknown> extends Recycler$EnhancedHandle<T> {
    constructor(arg0: Recycler$UnguardedLocalPool<Object>, arg1: Recycler$1)
    private constructor(arg0: Recycler$UnguardedLocalPool<T>)
    // private pool: Recycler$UnguardedLocalPool<T>;
    recycle(arg0: T): void;
    unguardedRecycle(arg0: Object): void;
}