import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleLogger$LoggerCache$ContextWeakReference extends WeakReference<Object> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(context: Object, referenceQueue: ReferenceQueue<Object>, logLevels: JavaMap<string, Level>)
    // private configuredLoggers: JavaMap<string, Level>;
}