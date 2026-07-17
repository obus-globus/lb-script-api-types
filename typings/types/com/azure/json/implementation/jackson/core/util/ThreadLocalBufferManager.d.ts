import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { BufferRecycler } from '../../../../../../../com/azure/json/implementation/jackson/core/util/BufferRecycler.d.ts'
import type { ReferenceQueue } from '../../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { SoftReference } from '../../../../../../../java/lang/ref/SoftReference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ThreadLocalBufferManager extends Object {
    static instance(): ThreadLocalBufferManager;
    constructor()
    // private _refQueue: ReferenceQueue<BufferRecycler>;
    // private _trackedRecyclers: JavaMap<SoftReference<BufferRecycler>, boolean>;
    // private removeSoftRefsClearedByGc(): void;
    wrapAndTrack(arg0: BufferRecycler): SoftReference<BufferRecycler>;
}