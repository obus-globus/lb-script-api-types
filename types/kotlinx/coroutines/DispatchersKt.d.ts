import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { Dispatchers } from '../../kotlinx/coroutines/Dispatchers.d.ts'
export class DispatchersKt extends Object {
    static IO_PARALLELISM_PROPERTY_NAME: string;
    static getIO(paramarg0: Dispatchers): CoroutineDispatcher;
}