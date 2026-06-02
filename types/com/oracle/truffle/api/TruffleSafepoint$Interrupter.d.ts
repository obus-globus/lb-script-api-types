import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$Interrupter extends Object{
    interrupt(thread: Thread): void;
    resetInterrupted(): void;
}