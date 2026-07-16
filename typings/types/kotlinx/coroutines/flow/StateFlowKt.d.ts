import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { MutableStateFlow } from '../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class StateFlowKt extends Object {
    static MutableStateFlow<T extends unknown>(value: T): MutableStateFlow<T>;
    static fuseStateFlow<T extends unknown>(self: StateFlow<T>, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
    static getAndUpdate<T extends unknown>(self: MutableStateFlow<T>, function_: (param0: T) => T): T;
    static update<T extends unknown>(self: MutableStateFlow<T>, function_: (param0: T) => T): void;
    static updateAndGet<T extends unknown>(self: MutableStateFlow<T>, function_: (param0: T) => T): T;
}