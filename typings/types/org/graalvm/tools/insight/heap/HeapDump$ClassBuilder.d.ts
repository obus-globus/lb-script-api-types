import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
export class HeapDump$ClassBuilder extends Object {
    private constructor(null_: HeapDump, name: string, superId: number)
    // private className: string;
    // private fieldNamesAndTypes: JavaMap<string, Class<Object>>;
    // private superId: number;
    dumpClass(): HeapDump$ClassInstance;
    // private dumpClassImpl(): HeapDump$ClassInstance;
    field(name: string, type: Class<Object>): HeapDump$ClassBuilder;
    field(name: string, type: HeapDump$ClassInstance): HeapDump$ClassBuilder;
}