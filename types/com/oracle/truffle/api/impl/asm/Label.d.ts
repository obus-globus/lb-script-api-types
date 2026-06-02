import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { Edge } from '../../../../../../com/oracle/truffle/api/impl/asm/Edge.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/impl/asm/Frame.d.ts'
import type { MethodVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Label extends Object {
    constructor()
    // private bytecodeOffset: number;
    // private flags: number;
    // private forwardReferences: number[];
    // private frame: Frame;
    info: Object;
    // private inputStackSize: number;
    // private lineNumber: number;
    // private nextBasicBlock: Label;
    // private nextListElement: Label;
    // private otherLineNumbers: number[];
    // private outgoingEdges: Edge;
    // private outputStackMax: number;
    // private outputStackSize: number;
    // private subroutineId: number;
    accept(methodVisitor: MethodVisitor, visitLineNumbers: boolean): void;
    // private addForwardReference(sourceInsnBytecodeOffset: number, referenceType: number, referenceHandle: number): void;
    addLineNumber(lineNumber: number): void;
    addSubroutineRetSuccessors(subroutineCaller: Label): void;
    getCanonicalInstance(): Label;
    getOffset(): number;
    markSubroutine(subroutineId: number): void;
    // private pushSuccessors(listOfLabelsToProcess: Label): Label;
    put(stackMapTableEntries: ByteVector): void;
    put(code: ByteVector, sourceInsnBytecodeOffset: number, wideReference: boolean): void;
    resolve(code: number[], stackMapTableEntries: ByteVector, bytecodeOffset: number): boolean;
    toString(): string;
}