import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../org/objectweb/asm/Attribute.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class Segment$SegmentMethodVisitor extends MethodVisitor {
    constructor(null_: Segment$SegmentMethodVisitor)
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitCode(): void;
    visitEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLineNumber(arg0: number, arg1: Label): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): AnnotationVisitor;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}