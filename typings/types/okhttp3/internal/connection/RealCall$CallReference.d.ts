import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
export class RealCall$CallReference extends WeakReference<RealCall> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: RealCall, callStackTrace: Object | null)
    readonly callStackTrace: Object | null;
}