import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ResourceLeakDetector$TraceRecord extends Throwable {
    static BOTTOM_POS: number;
    static CLOSE_MARK_POS: number;
    constructor(arg0: ResourceLeakDetector$TraceRecord)
    constructor(arg0: ResourceLeakDetector$TraceRecord, arg1: Object)
    private constructor(arg0: boolean)
    // private hintString: string;
    // private next: ResourceLeakDetector$TraceRecord;
    // private pos: number;
    toString(): string;
}