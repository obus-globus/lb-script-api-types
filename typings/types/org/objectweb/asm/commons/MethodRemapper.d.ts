import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class MethodRemapper extends MethodVisitor {
    constructor(arg0: number, arg1: MethodVisitor, arg2: Remapper)
    constructor(arg0: MethodVisitor, arg1: Remapper)
    // private remapper: Remapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    // private remapFrameTypes(arg0: number, arg1: Object[]): Object[];
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitInsnAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, ...arg3: Object[]): void;
    visitLdcInsn(arg0: Object): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): AnnotationVisitor;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): AnnotationVisitor;
    visitTryCatchAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitTypeInsn(arg0: number, arg1: string): void;
}