import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { Handle } from '../../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { AbstractInsnNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AnnotationNode.d.ts'
import type { LabelNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LabelNode.d.ts'
import type { LocalVariableAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LocalVariableAnnotationNode.d.ts'
import type { LocalVariableNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LocalVariableNode.d.ts'
import type { ParameterNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/ParameterNode.d.ts'
import type { TryCatchBlockNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TryCatchBlockNode.d.ts'
import type { TypeAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TypeAnnotationNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MethodNode extends MethodVisitor {
    constructor()
    constructor(api: number)
    constructor(api: number, access: number, name: string, descriptor: string, signature: string, exceptions: string[])
    constructor(access: number, name: string, descriptor: string, signature: string, exceptions: string[])
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
    accept(classVisitor: ClassVisitor): void;
    accept(methodVisitor: MethodVisitor): void;
    check(api: number): void;
    getLabelNode(label: Label): LabelNode;
    // private getLabelNodes(labels: Label[]): LabelNode[];
    // private getLabelNodes(objects: Object[]): Object[];
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
    visitInvokeDynamicInsn(name: string, descriptor: string, bootstrapMethodHandle: Handle, bootstrapMethodArguments: Object[]): void;
    visitJumpInsn(opcode: number, label: Label): void;
    visitLabel(label: Label): void;
    visitLdcInsn(value: Object): void;
    visitLineNumber(line: number, start: Label): void;
    visitLocalVariable(name: string, descriptor: string, signature: string, start: Label, end: Label, index: number): void;
    visitLocalVariableAnnotation(typeRef: number, typePath: TypePath, start: Label[], end: Label[], index: number[], descriptor: string, visible: boolean): AnnotationVisitor;
    visitLookupSwitchInsn(dflt: Label, keys: number[], labels: Label[]): void;
    visitMaxs(maxStack: number, maxLocals: number): void;
    visitMethodInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitMethodInsn(opcodeAndSource: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    visitMultiANewArrayInsn(descriptor: string, numDimensions: number): void;
    visitParameter(name: string, access: number): void;
    visitParameterAnnotation(parameter: number, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTableSwitchInsn(min: number, max: number, dflt: Label, labels: Label[]): void;
    visitTryCatchAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTryCatchBlock(start: Label, end: Label, handler: Label, type: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTypeInsn(opcode: number, type: string): void;
    visitVarInsn(opcode: number, varIndex: number): void;
}