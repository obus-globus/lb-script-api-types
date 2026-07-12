import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { LocalVariableAnnotationNode } from '../../../../org/objectweb/asm/tree/LocalVariableAnnotationNode.d.ts'
import type { LocalVariableNode } from '../../../../org/objectweb/asm/tree/LocalVariableNode.d.ts'
import type { ParameterNode } from '../../../../org/objectweb/asm/tree/ParameterNode.d.ts'
import type { TryCatchBlockNode } from '../../../../org/objectweb/asm/tree/TryCatchBlockNode.d.ts'
import type { TypeAnnotationNode } from '../../../../org/objectweb/asm/tree/TypeAnnotationNode.d.ts'
export class MethodNode extends MethodVisitor {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[])
    constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[])
    access: number;
    annotationDefault: Object;
    attrs: Attribute[];
    desc: string;
    exceptions: string[];
    instructions: AbstractInsnNode[];
    invisibleAnnotableParameterCount: number;
    invisibleAnnotations: AnnotationNode[];
    invisibleLocalVariableAnnotations: LocalVariableAnnotationNode[];
    invisibleParameterAnnotations: AnnotationNode[][];
    invisibleTypeAnnotations: TypeAnnotationNode[];
    localVariables: LocalVariableNode[];
    maxLocals: number;
    maxStack: number;
    name: string;
    parameters: ParameterNode[];
    signature: string;
    tryCatchBlocks: TryCatchBlockNode[];
    visibleAnnotableParameterCount: number;
    visibleAnnotations: AnnotationNode[];
    visibleLocalVariableAnnotations: LocalVariableAnnotationNode[];
    visibleParameterAnnotations: AnnotationNode[][];
    visibleTypeAnnotations: TypeAnnotationNode[];
    // private visited: boolean;
    accept(arg0: ClassVisitor): void;
    accept(arg0: MethodVisitor): void;
    check(arg0: number): void;
    getLabelNode(arg0: Label): LabelNode;
    // private getLabelNodes(arg0: Object[]): Object[];
    // private getLabelNodes(arg0: Label[]): LabelNode[];
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