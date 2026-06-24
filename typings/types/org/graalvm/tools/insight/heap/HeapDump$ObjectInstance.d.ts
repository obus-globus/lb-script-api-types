import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
export class HeapDump$ObjectInstance extends Object {
    constructor(null_: HeapDump, id: number)
    // private id: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    id(requestor: HeapDump): number;
}