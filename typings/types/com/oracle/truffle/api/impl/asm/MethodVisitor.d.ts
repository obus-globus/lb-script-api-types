import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { Handle } from '../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class MethodVisitor extends Object {
    constructor(api: number)
    constructor(api: number, methodVisitor: MethodVisitor)
    // private api: number;
    // private mv: MethodVisitor;
    getDelegate(): MethodVisitor;
    visitAnnotableParameterCount(parameterCount: number, visible: boolean): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitCode(): void;
    visitEnd(): void;
    visitFieldInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitFrame(type: number, numLocal: number, local: Object[], numStack: number, stack: Object[]): void;
    visitIincInsn(varIndex: number, increment: number): void;
    visitInsn(opcode: number): void;
    visitInsnAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitIntInsn(opcode: number, operand: number): void;
    visitInvokeDynamicInsn(name: string, descriptor: string, bootstrapMethodHandle: Handle, ...bootstrapMethodArguments: Object[]): void;
    visitJumpInsn(opcode: number, label: Label): void;
    visitLabel(label: Label): void;
    visitLdcInsn(value: Object): void;
    visitLineNumber(line: number, start: Label): void;
    visitLocalVariable(name: string, descriptor: string, signature: string, start: Label, end: Label, index: number): void;
    visitLocalVariableAnnotation(typeRef: number, typePath: TypePath, start: Label[], end: Label[], index: number[], descriptor: string, visible: boolean): AnnotationVisitor;
    visitLookupSwitchInsn(dflt: Label, keys: number[], labels: Label[]): void;
    visitMaxs(maxStack: number, maxLocals: number): void;
    visitMethodInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitMethodInsn(opcode: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    visitMultiANewArrayInsn(descriptor: string, numDimensions: number): void;
    visitParameter(name: string, access: number): void;
    visitParameterAnnotation(parameter: number, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTableSwitchInsn(min: number, max: number, dflt: Label, ...labels: Label[]): void;
    visitTryCatchAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTryCatchBlock(start: Label, end: Label, handler: Label, type: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTypeInsn(opcode: number, type: string): void;
    visitVarInsn(opcode: number, varIndex: number): void;
}