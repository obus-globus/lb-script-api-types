import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { Handle } from '../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export abstract class MethodVisitor extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: MethodVisitor)
    // private api: number;
    // private mv: MethodVisitor;
    getDelegate(): MethodVisitor;
    visitAnnotableParameterCount(arg0: number, arg1: boolean): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitCode(): void;
    visitEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitInsnAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, ...arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLineNumber(arg0: number, arg1: Label): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): AnnotationVisitor;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitParameter(arg0: string, arg1: number): void;
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): AnnotationVisitor;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, ...arg3: Label[]): void;
    visitTryCatchAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}