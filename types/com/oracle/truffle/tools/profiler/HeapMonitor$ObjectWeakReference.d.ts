import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HeapMonitor$ObjectWeakReference extends WeakReference<Object> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(obj: Object, rq: ReferenceQueue<Object>, language: LanguageInfo, metaObject: string, oldSize: number, newSize: number)
    // private language: LanguageInfo;
    // private metaObject: string;
    // private newSize: number;
    // private oldSize: number;
    // private processed: boolean;
    computeBytesDiff(): number;
}