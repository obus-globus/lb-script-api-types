import type { BytecodeDescriptor } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { InstructionTracer } from '../../../../../../com/oracle/truffle/api/bytecode/InstructionTracer.d.ts'
import type { InstructionTracer$InstructionAccess } from '../../../../../../com/oracle/truffle/api/bytecode/InstructionTracer$InstructionAccess.d.ts'
import type { PrintInstructionTracer$Builder } from '../../../../../../com/oracle/truffle/api/bytecode/debug/PrintInstructionTracer$Builder.d.ts'
import type { PrintInstructionTracer$LastTraceCache } from '../../../../../../com/oracle/truffle/api/bytecode/debug/PrintInstructionTracer$LastTraceCache.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { PrintStream } from '../../../../../../java/io/PrintStream.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrintInstructionTracer extends Object implements InstructionTracer {
    static newBuilder(paramout: PrintStream): PrintInstructionTracer$Builder;
    static newBuilder(paramout: (param0: string) => void): PrintInstructionTracer$Builder;
    constructor(out: (param0: string) => void, filter: (param0: BytecodeNode) => boolean)
    // private cache: PrintInstructionTracer$LastTraceCache;
    // private executedInstructions: AtomicLong;
    // private filter: (param0: BytecodeNode) => boolean;
    // private out: (param0: string) => void;
    getExclusiveBytecodeDescriptor(): BytecodeDescriptor<any, any, any>;
    onInstructionEnter(access: InstructionTracer$InstructionAccess, bytecode: BytecodeNode, bytecodeIndex: number, frame: Frame): void;
    reset(): void;
    // private traceInstruction(access: InstructionTracer$InstructionAccess, bytecode: BytecodeNode, bytecodeIndex: number): void;
    // private updateCache(bytecode: BytecodeNode): PrintInstructionTracer$LastTraceCache;
}