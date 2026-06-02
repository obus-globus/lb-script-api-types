import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../../../../com/oracle/truffle/api/impl/asm/Type.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LocalVariablesSorter extends MethodVisitor {
    constructor(api: number, access: number, descriptor: string, methodVisitor: MethodVisitor)
    constructor(access: number, descriptor: string, methodVisitor: MethodVisitor)
    // private firstLocal: number;
    // private nextLocal: number;
    // private remappedLocalTypes: Object[];
    // private remappedVariableIndices: number[];
    newLocal(type: Type): number;
    newLocalMapping(type: Type): number;
    // private remap(varIndex: number, type: Type): number;
    // private setFrameLocal(local: number, type: Object): void;
    setLocalType(local: number, type: Type): void;
    updateNewLocals(newLocals: Object[]): void;
    visitFrame(type: number, numLocal: number, local: Object[], numStack: number, stack: Object[]): void;
    visitIincInsn(varIndex: number, increment: number): void;
    visitLocalVariable(name: string, descriptor: string, signature: string, start: Label, end: Label, index: number): void;
    visitLocalVariableAnnotation(typeRef: number, typePath: TypePath, start: Label[], end: Label[], index: number[], descriptor: string, visible: boolean): AnnotationVisitor;
    visitMaxs(maxStack: number, maxLocals: number): void;
    visitVarInsn(opcode: number, varIndex: number): void;
}