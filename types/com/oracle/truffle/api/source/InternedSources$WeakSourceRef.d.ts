import type { SourceImpl } from '../../../../../com/oracle/truffle/api/source/SourceImpl.d.ts'
import type { SourceImpl$Key } from '../../../../../com/oracle/truffle/api/source/SourceImpl$Key.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InternedSources$WeakSourceRef extends WeakReference<SourceImpl> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: SourceImpl, q: ReferenceQueue<SourceImpl>)
    // private key: SourceImpl$Key;
}