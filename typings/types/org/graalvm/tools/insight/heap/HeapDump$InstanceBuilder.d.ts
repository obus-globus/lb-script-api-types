import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
import type { HeapDump$ObjectInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ObjectInstance.d.ts'
export class HeapDump$InstanceBuilder extends Object {
    private constructor(null_: HeapDump, clazz: HeapDump$ClassInstance, instanceId: number)
    // private clazz: HeapDump$ClassInstance;
    // private instanceId: HeapDump$ObjectInstance;
    // private namesAndValues: Object[];
    // private assertType(name: string, valueType: Class<Object>): void;
    dumpInstance(): HeapDump$ObjectInstance;
    // private dumpInstance(thiz: HeapDump, ...stringValueSeq: Object[]): void;
    id(): HeapDump$ObjectInstance;
    put(name: string, value: HeapDump$ObjectInstance): HeapDump$InstanceBuilder;
    putBoolean(name: string, value: boolean): HeapDump$InstanceBuilder;
    putByte(name: string, value: number): HeapDump$InstanceBuilder;
    putChar(name: string, value: string): HeapDump$InstanceBuilder;
    putDouble(name: string, value: number): HeapDump$InstanceBuilder;
    putFloat(name: string, value: number): HeapDump$InstanceBuilder;
    putImpl(name: string, value: Object): HeapDump$InstanceBuilder;
    putInt(name: string, value: number): HeapDump$InstanceBuilder;
    putLong(name: string, value: number): HeapDump$InstanceBuilder;
    putShort(name: string, value: number): HeapDump$InstanceBuilder;
}