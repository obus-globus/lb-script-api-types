import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { CoroutineDispatcher } from '../../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { Dispatchers } from '../../../../../kotlinx/coroutines/Dispatchers.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
export class ConcurrentExtensionsKt extends Object {
    static MinecraftDispatcher: CoroutineDispatcher;
    static getMinecraft(paramarg0: Dispatchers): CoroutineDispatcher;
    static getValue<T extends unknown>(self: ThreadLocal<T>, receiver: Object | null, property: KProperty<Object>): T;
    static joinAll(self: Job[]): void;
    static setValue<T extends unknown>(self: ThreadLocal<T>, receiver: Object | null, property: KProperty<Object>, value: T): void;
}