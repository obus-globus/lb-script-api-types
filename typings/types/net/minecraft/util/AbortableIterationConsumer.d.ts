import type { Object } from '../../../java/lang/Object.d.ts'
import type { AbortableIterationConsumer$Continuation } from '../../../net/minecraft/util/AbortableIterationConsumer$Continuation.d.ts'
export interface AbortableIterationConsumer<T extends Object | number | string | boolean> extends Object{
    accept(entry: T): AbortableIterationConsumer$Continuation;
}