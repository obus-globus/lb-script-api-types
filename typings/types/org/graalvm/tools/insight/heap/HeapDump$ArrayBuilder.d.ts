import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
import type { HeapDump$ObjectInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ObjectInstance.d.ts'
export class HeapDump$ArrayBuilder extends Object {
    private constructor(null_: HeapDump$ArrayBuilder, clazz: HeapDump$ClassInstance, length: number, instanceId: number)
    // private clazz: HeapDump$ClassInstance;
    // private elements: HeapDump$ObjectInstance[];
    // private instanceId: HeapDump$ObjectInstance;
    // private dumpArray(thiz: HeapDump): void;
    dumpInstance(): HeapDump$ObjectInstance;
    id(): HeapDump$ObjectInstance;
    put(index: number, value: HeapDump$ObjectInstance): HeapDump$ArrayBuilder;
}