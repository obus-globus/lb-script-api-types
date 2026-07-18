import type { ByteChannel$Slot } from '../../../../io/ktor/utils/io/ByteChannel$Slot.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface ByteChannel$Slot$Task extends ByteChannel$Slot, Object{
    readonly continuation: Continuation<void>;
    readonly created: Throwable | null;
    resume(): void;
    resume(throwable?: Throwable | null): void;
    taskName(): string;
}