import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump$ArrayBuilder } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ArrayBuilder.d.ts'
import type { HeapDump$Builder } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$Builder.d.ts'
import type { HeapDump$ClassBuilder } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassBuilder.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
import type { HeapDump$InstanceBuilder } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$InstanceBuilder.d.ts'
import type { HeapDump$ObjectInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ObjectInstance.d.ts'
import type { HeapDump$ThreadBuilder } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ThreadBuilder.d.ts'
export class HeapDump extends Object {
    static newHeapBuilder(paramos: OutputStream): HeapDump$Builder;
    constructor()
    constructor(out: OutputStream, builder: HeapDump$Builder)
    // private builder: HeapDump$Builder;
    // private heap: DataOutputStream;
    // private heapStrings: { [key: string]: HeapDump$ObjectInstance };
    // private primitiveClasses: Map<Class<Object>, HeapDump$ClassInstance>;
    // private primitives: Map<Object, HeapDump$ObjectInstance>;
    // private typeObject: HeapDump$ClassInstance;
    // private typeObjectArray: HeapDump$ClassInstance;
    // private typeString: HeapDump$ClassInstance;
    // private typeThread: HeapDump$ClassInstance;
    dumpPrimitive(obj: Object): HeapDump$ObjectInstance;
    dumpString(text: string): HeapDump$ObjectInstance;
    // private dumpStringImpl(text: string): HeapDump$ObjectInstance;
    flush(): void;
    newArray(len: number): HeapDump$ArrayBuilder;
    newClass(name: string): HeapDump$ClassBuilder;
    newInstance(clazz: HeapDump$ClassInstance): HeapDump$InstanceBuilder;
    newThread(name: string): HeapDump$ThreadBuilder;
}