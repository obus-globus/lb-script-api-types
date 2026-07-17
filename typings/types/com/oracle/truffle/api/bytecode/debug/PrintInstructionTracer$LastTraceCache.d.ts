import type { BytecodeNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrintInstructionTracer$LastTraceCache extends Record {
    private constructor(bytecodeNode: BytecodeNode, rootName: string, included: boolean)
    // private bytecodeNode: BytecodeNode;
    // private included: boolean;
    // private rootName: string;
    bytecodeNode(): BytecodeNode;
    equals(o: Object | null): boolean;
    hashCode(): number;
    included(): boolean;
    rootName(): string;
    toString(): string;
}