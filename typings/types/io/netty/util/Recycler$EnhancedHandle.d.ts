import type { Recycler$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Recycler$Handle } from '../../../io/netty/util/Recycler$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Recycler$EnhancedHandle<T extends unknown> extends Object implements Recycler$Handle<T> {
    private constructor()
    constructor(arg0: Recycler$1)
    unguardedRecycle(arg0: Object): void;
}