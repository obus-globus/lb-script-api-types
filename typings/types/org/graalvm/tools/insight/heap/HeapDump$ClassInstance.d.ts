import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
export class HeapDump$ClassInstance extends Object {
    private constructor(null_: HeapDump, serialId: number, id: number, fieldNamesAndTypes: { [key: string]: Class<Object> }, fieldBytes: number)
    // private fieldBytes: number;
    // private fieldNamesAndTypes: { [key: string]: Class<Object> };
    // private id: number;
    // private serialId: number;
    id(requestor: HeapDump): number;
    names(): string[];
    serialId(requestor: HeapDump): number;
}