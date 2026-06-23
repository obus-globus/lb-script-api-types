import type { Recycler$Handle } from '../../../io/netty/util/Recycler$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Recycler$EnhancedHandle<T extends unknown> extends Object implements Recycler$Handle<T> {
    private constructor()
    unguardedRecycle(arg0: Object): void;
}