import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Handle } from '../../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MethodRemapper extends MethodVisitor {
    constructor(methodVisitor: MethodVisitor, remapper: Remapper)
    constructor(api: number, methodVisitor: MethodVisitor, remapper: Remapper)
    // private remapper: Remapper;
    createAnnotationRemapper(annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(descriptor: string, annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    // private remapFrameTypes(numTypes: number, frameTypes: Object[]): Object[];
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitFieldInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitFrame(type: number, numLocal: number, local: Object[], numStack: number, stack: Object[]): void;
    visitInsnAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitInvokeDynamicInsn(name: string, descriptor: string, bootstrapMethodHandle: Handle, bootstrapMethodArguments: Object[]): void;
    visitLdcInsn(value: Object): void;
    visitLocalVariable(name: string, descriptor: string, signature: string, start: Label, end: Label, index: number): void;
    visitLocalVariableAnnotation(typeRef: number, typePath: TypePath, start: Label[], end: Label[], index: number[], descriptor: string, visible: boolean): AnnotationVisitor;
    visitMethodInsn(opcodeAndSource: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    visitMultiANewArrayInsn(descriptor: string, numDimensions: number): void;
    visitParameterAnnotation(parameter: number, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTryCatchAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTryCatchBlock(start: Label, end: Label, handler: Label, type: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTypeInsn(opcode: number, type: string): void;
}