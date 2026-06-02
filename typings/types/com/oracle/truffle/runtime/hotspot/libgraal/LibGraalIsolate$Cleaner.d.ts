import type { LibGraalObject } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalObject.d.ts'
import type { ReferenceQueue } from '../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalIsolate$Cleaner extends WeakReference<LibGraalObject> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(cleanersQueue: ReferenceQueue<LibGraalObject>, referent: LibGraalObject, handle: number)
    // private handle: number;
    clean(): boolean;
}