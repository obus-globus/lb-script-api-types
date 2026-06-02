import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { Edge } from '../../../org/objectweb/asm/Edge.d.ts'
import type { Frame } from '../../../org/objectweb/asm/Frame.d.ts'
import type { MethodVisitor } from '../../../org/objectweb/asm/MethodVisitor.d.ts'
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
    accept(arg0: MethodVisitor, arg1: boolean): void;
    // private addForwardReference(arg0: number, arg1: number, arg2: number): void;
    addLineNumber(arg0: number): void;
    addSubroutineRetSuccessors(arg0: Label): void;
    getCanonicalInstance(): Label;
    getOffset(): number;
    markSubroutine(arg0: number): void;
    // private pushSuccessors(arg0: Label): Label;
    put(arg0: ByteVector): void;
    put(arg0: ByteVector, arg1: number, arg2: boolean): void;
    resolve(arg0: number[], arg1: ByteVector, arg2: number): boolean;
    toString(): string;
}