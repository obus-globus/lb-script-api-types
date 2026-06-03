import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { CoroutineDispatcher } from '../../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { Dispatchers } from '../../../../../kotlinx/coroutines/Dispatchers.d.ts'
export class ConcurrentExtensionsKt extends Object {
    static MinecraftDispatcher: CoroutineDispatcher;
    static getMinecraft(paramarg0: Dispatchers): CoroutineDispatcher;
    static getValue(threadLocal: ThreadLocal<Object>, receiver: Object, property: KProperty<Object>): Object | null;
    static joinAll(paramarg0: (Object | null)[], paramarg1: Continuation<Object>): Object;
    static setValue(threadLocal: ThreadLocal<Object>, receiver: Object, property: KProperty<Object>, value: Object | null): void;
}