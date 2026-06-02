import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { Attribute$Set } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute$Set.d.ts'
import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { Handle } from '../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Handler } from '../../../../../../com/oracle/truffle/api/impl/asm/Handler.d.ts'
import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MethodWriter extends MethodVisitor {
    constructor(symbolTable: SymbolTable, access: number, name: string, descriptor: string, signature: string, exceptions: string[], compute: number)
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
    // private addSuccessorToCurrentBasicBlock(info: number, successor: Label): void;
    canCopyMethodAttributes(source: ClassReader, hasSyntheticAttribute: boolean, hasDeprecatedAttribute: boolean, descriptorIndex: number, signatureIndex: number, exceptionsOffset: number): boolean;
    collectAttributePrototypes(attributePrototypes: Attribute$Set): void;
    // private computeAllFrames(): void;
    // private computeMaxStackAndLocal(): void;
    computeMethodInfoSize(): number;
    // private endCurrentBasicBlockWithNoSuccessor(): void;
    hasAsmInstructions(): boolean;
    hasFrames(): boolean;
    // private putAbstractTypes(start: number, end: number): void;
    // private putFrame(): void;
    // private putFrameType(type: Object): void;
    putMethodInfo(output: ByteVector): void;
    setMethodAttributesSource(methodInfoOffset: number, methodInfoLength: number): void;
    visitAbstractType(frameIndex: number, abstractType: number): void;
    visitAnnotableParameterCount(parameterCount: number, visible: boolean): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAnnotationDefault(): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitCode(): void;
    visitEnd(): void;
    visitFieldInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitFrame(type: number, numLocal: number, local: Object[], numStack: number, stack: Object[]): void;
    visitFrameEnd(): void;
    visitFrameStart(offset: number, numLocal: number, numStack: number): number;
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
    visitMethodInsn(opcode: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    visitMultiANewArrayInsn(descriptor: string, numDimensions: number): void;
    visitParameter(name: string, access: number): void;
    visitParameterAnnotation(parameter: number, annotationDescriptor: string, visible: boolean): AnnotationVisitor;
    // private visitSwitchInsn(dflt: Label, labels: Label[]): void;
    visitTableSwitchInsn(min: number, max: number, dflt: Label, labels: Label[]): void;
    visitTryCatchAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTryCatchBlock(start: Label, end: Label, handler: Label, type: string): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
    visitTypeInsn(opcode: number, type: string): void;
    visitVarInsn(opcode: number, varIndex: number): void;
}