import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { AtomicBoolean } from '../../../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { CompletableDeferred } from '../../../../../kotlinx/coroutines/CompletableDeferred.d.ts'
export class AsyncLazy<T extends Object | number | string | boolean> extends Object {
    constructor(initializer: () => T)
    // private deferred: CompletableDeferred<T>;
    // private initialized: AtomicBoolean;
    // private initializer: () => T;
    get(): T;
    getValue(thisRef: Object | null, property: KProperty<Object>): T;
    // private initialize(): void;
}