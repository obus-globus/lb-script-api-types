import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { NativeMutex$Node } from '../../../kotlinx/atomicfu/locks/NativeMutex$Node.d.ts'
export class NativeMutex$ParkingQueue extends Object {
    constructor(null_: NativeMutex$ParkingQueue)
    readonly head: AtomicRef<NativeMutex$Node>;
    // private tail: AtomicRef<NativeMutex$Node>;
    dequeue(): void;
    enqueue(): NativeMutex$Node;
    getHead(): NativeMutex$Node;
}