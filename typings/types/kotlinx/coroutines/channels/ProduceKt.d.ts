import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { ProducerScope } from '../../../kotlinx/coroutines/channels/ProducerScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class ProduceKt extends Object {
    static awaitClose(self: ProducerScope<Object>, block: () => void): void;
    static produce<E extends unknown>(self: CoroutineScope, context: CoroutineContext, capacity: number, block: (param0: ProducerScope<E>) => void): ReceiveChannel<E>;
    static produce<E extends unknown>(self: CoroutineScope, context: CoroutineContext, capacity: number, start: CoroutineStart, onCompletion: ((param0: Throwable | null) => void) | null, block: (param0: ProducerScope<E>) => void): ReceiveChannel<E>;
    static produce<E extends unknown>(self: CoroutineScope, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow, start: CoroutineStart, onCompletion: ((param0: Throwable | null) => void) | null, block: (param0: ProducerScope<E>) => void): ReceiveChannel<E>;
}