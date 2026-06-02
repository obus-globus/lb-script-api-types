import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HeapDump$ObjectInstance } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump$ObjectInstance.d.ts'
export class HeapGenerator$SourceSectionKey extends Object {
    private constructor(sourceId: HeapDump$ObjectInstance, charIndex: number, charLength: number)
    // private charIndex: number;
    // private charLength: number;
    // private sourceId: HeapDump$ObjectInstance;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}