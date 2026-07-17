import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MemoryDump } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump.d.ts'
import type { MemoryDump$MetaObjectCopy } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump$MetaObjectCopy.d.ts'
export class MemoryDump$StackCopier extends Object {
    private constructor(null_: MemoryDump)
    // private duplicates: JavaMap<Object, Object>;
    copyMetaObject(obj: Object): MemoryDump$MetaObjectCopy;
    // private copyObject(obj: Object, depth: number): Object;
    copyStack(eventStack: Object, eventDepth: number): Object;
    // private preferredValueOf(obj: Object): Object;
}