import type { ResourceLeakDetector$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ResourceLeakDetector$TraceRecord extends Throwable {
    static BOTTOM_POS: number;
    static CLOSE_MARK_POS: number;
    constructor(arg0: ResourceLeakDetector$TraceRecord)
    constructor(arg0: ResourceLeakDetector$TraceRecord, arg1: Object)
    private constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: ResourceLeakDetector$1)
    // private hintString: string;
    // private next: ResourceLeakDetector$TraceRecord;
    // private pos: number;
    toString(): string;
}