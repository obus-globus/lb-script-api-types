import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../org/objectweb/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { Attribute$Set } from '../../../org/objectweb/asm/Attribute$Set.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../org/objectweb/asm/ClassReader.d.ts'
import type { Handle } from '../../../org/objectweb/asm/Handle.d.ts'
import type { Handler } from '../../../org/objectweb/asm/Handler.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export class MethodWriter extends MethodVisitor {
    constructor(arg0: SymbolTable, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[], arg6: number)
    // private accessFlags: number;
    // private code: ByteVector;
    // private compute: number;
    // private currentBasicBlock: Label;
    // private currentFrame: number[];
    // private currentLocals: number;
    // private defaultValue: ByteVector;
    // private descriptor: string;
    // private descriptorIndex: number;
    // private exceptionIndexTable: number[];
    // private firstAttribute: Attribute;
    // private firstBasicBlock: Label;
    // private firstCodeAttribute: Attribute;
    // private firstHandler: Handler;
    // private hasAsmInstructions: boolean;
    // private hasSubroutines: boolean;
    // private invisibleAnnotableParameterCount: number;
    // private lastBasicBlock: Label;
    // private lastBytecodeOffset: number;
    // private lastCodeRuntimeInvisibleTypeAnnotation: AnnotationWriter;
    // private lastCodeRuntimeVisibleTypeAnnotation: AnnotationWriter;
    // private lastHandler: Handler;
    // private lastRuntimeInvisibleAnnotation: AnnotationWriter;
    // private lastRuntimeInvisibleParameterAnnotations: AnnotationWriter[];
    // private lastRuntimeInvisibleTypeAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleParameterAnnotations: AnnotationWriter[];
    // private lastRuntimeVisibleTypeAnnotation: AnnotationWriter;
    // private lineNumberTable: ByteVector;
    // private lineNumberTableLength: number;
    // private localVariableTable: ByteVector;
    // private localVariableTableLength: number;
    // private localVariableTypeTable: ByteVector;
    // private localVariableTypeTableLength: number;
    // private maxLocals: number;
    // private maxRelativeStackSize: number;
    // private maxStack: number;
    // private name: string;
    // private nameIndex: number;
    // private numberOfExceptions: number;
    // private parameters: ByteVector;
    // private parametersCount: number;
    // private previousFrame: number[];
    // private previousFrameOffset: number;
    // private relativeStackSize: number;
    // private signatureIndex: number;
    // private sourceLength: number;
    // private sourceOffset: number;
    // private stackMapTableEntries: ByteVector;
    // private stackMapTableNumberOfEntries: number;
    // private symbolTable: SymbolTable;
    // private visibleAnnotableParameterCount: number;
    // private addSuccessorToCurrentBasicBlock(arg0: number, arg1: Label): void;
    canCopyMethodAttributes(arg0: ClassReader, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number): boolean;
    collectAttributePrototypes(arg0: Attribute$Set): void;
    // private computeAllFrames(): void;
    // private computeMaxStackAndLocal(): void;
    computeMethodInfoSize(): number;
    // private endCurrentBasicBlockWithNoSuccessor(): void;
    hasAsmInstructions(): boolean;
    hasFrames(): boolean;
    // private putAbstractTypes(arg0: number, arg1: number): void;
    // private putFrame(): void;
    // private putFrameType(arg0: Object): void;
    putMethodInfo(arg0: ByteVector): void;
    setMethodAttributesSource(arg0: number, arg1: number): void;
    visitAbstractType(arg0: number, arg1: number): void;
    visitAnnotableParameterCount(arg0: number, arg1: boolean): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitCode(): void;
    visitEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitFrameEnd(): void;
    visitFrameStart(arg0: number, arg1: number, arg2: number): number;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitInsnAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLineNumber(arg0: number, arg1: Label): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): AnnotationVisitor;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitParameter(arg0: string, arg1: number): void;
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): AnnotationVisitor;
    // private visitSwitchInsn(arg0: Label, arg1: Label[]): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    visitTryCatchAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}