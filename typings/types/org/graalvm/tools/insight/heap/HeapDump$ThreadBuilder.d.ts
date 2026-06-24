import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
import type { HeapDump$ObjectInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ObjectInstance.d.ts'
export class HeapDump$ThreadBuilder extends Object {
    private constructor(null_: HeapDump, name: string)
    // private name: string;
    // private stacks: Object[][];
    addStackFrame(clazz: HeapDump$ClassInstance, methodName: string, sourceFile: string, lineNumber: number, locals: HeapDump$ObjectInstance[]): HeapDump$ThreadBuilder;
    dumpThread(): HeapDump$ObjectInstance;
    // private dumpThreadImpl(): HeapDump$ObjectInstance;
}