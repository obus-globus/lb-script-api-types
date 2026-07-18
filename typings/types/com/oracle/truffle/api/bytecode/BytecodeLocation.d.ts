import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { ExceptionHandler } from '../../../../../com/oracle/truffle/api/bytecode/ExceptionHandler.d.ts'
import type { Instruction } from '../../../../../com/oracle/truffle/api/bytecode/Instruction.d.ts'
import type { SourceInformation } from '../../../../../com/oracle/truffle/api/bytecode/SourceInformation.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeLocation extends Object {
    static get(paramelement: TruffleStackTraceElement): BytecodeLocation;
    static get(paramframeInstance: FrameInstance): BytecodeLocation;
    static get(paramlocation: Node, parambci: number): BytecodeLocation;
    constructor(bytecodes: BytecodeNode, bytecodeIndex: number)
    readonly bytecodeIndex: number;
    // private bytecodes: BytecodeNode;
    dump(): string;
    ensureSourceInformation(): BytecodeLocation;
    equals(obj: Object | null): boolean;
    getBytecodeIndex(): number;
    getBytecodeNode(): BytecodeNode;
    getExceptionHandlers(): ExceptionHandler[];
    getInstruction(): Instruction;
    getSourceInformation(): SourceInformation[];
    getSourceLocation(): SourceSection;
    getSourceLocations(): SourceSection[];
    hashCode(): number;
    toString(): string;
    update(): BytecodeLocation;
}