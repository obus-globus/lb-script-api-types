import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
export class NativeMutex$Node extends Object {
    constructor(null_: NativeMutex$Node)
    readonly next: AtomicRef<NativeMutex$Node>;
    readonly state: AtomicRef<Object>;
    nodeWait(duration: Duration): boolean;
    nodeWake(): boolean;
}