import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
import type { HeapDump$Counter } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$Counter.d.ts'
import type { HeapDump$Identifiers } from '../../../../../org/graalvm/tools/insight/heap/HeapDump$Identifiers.d.ts'
export class HeapDump$Builder extends Object implements Closeable {
    private constructor(null_: HeapDump, ids: HeapDump$Identifiers, os: OutputStream)
    // private classCounter: HeapDump$Counter;
    // private defaultStackTrace: number;
    // private ids: HeapDump$Identifiers;
    // private objectCounter: HeapDump$Counter;
    // private stackFrameCounter: HeapDump$Counter;
    // private stackTraceCounter: HeapDump$Counter;
    // private threadCounter: HeapDump$Counter;
    // private timeBase: number;
    // private whole: DataOutputStream;
    // private wholeStrings: JavaMap<string, number>;
    close(): void;
    dumpHeap(generator: (param0: HeapDump) => void): void;
    dumpHeap(timeStamp: number, generator: (param0: HeapDump) => void): void;
    // private dumpPrologue(ids1: HeapDump$Identifiers, millis: number): void;
    writeDefaultStackTraceSerialNumber(os: DataOutputStream): void;
    writeLoadClass(className: string, classSerial: number): number;
    writeStackFrame(thiz: HeapDump, clazz: HeapDump$ClassInstance, rootName: string, sourceFile: string, lineNumber: number): number;
    writeStackTrace(threadSerialId: number, ...frames: number[]): number;
    writeString(text: string): number;
}