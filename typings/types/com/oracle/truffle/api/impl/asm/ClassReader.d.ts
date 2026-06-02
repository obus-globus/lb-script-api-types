import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { ConstantDynamic } from '../../../../../../com/oracle/truffle/api/impl/asm/ConstantDynamic.d.ts'
import type { Context } from '../../../../../../com/oracle/truffle/api/impl/asm/Context.d.ts'
import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassReader extends Object {
    static EXPAND_FRAMES: number;
    static SKIP_CODE: number;
    static SKIP_DEBUG: number;
    static SKIP_FRAMES: number;
    constructor(inputStream: InputStream)
    constructor(classFile: number[])
    constructor(classFileBuffer: number[], classFileOffset: number, checkClassVersion: boolean)
    constructor(classFileBuffer: number[], classFileOffset: number, classFileLength: number)
    constructor(className: string)
    b: number[];
    // private bootstrapMethodOffsets: number[];
    // private classFileBuffer: number[];
    // private constantDynamicValues: ConstantDynamic[];
    // private constantUtf8Values: string[];
    // private cpInfoOffsets: number[];
    header: number;
    readonly maxStringLength: number;
    accept(classVisitor: ClassVisitor, attributePrototypes: Attribute[], parsingOptions: number): void;
    accept(classVisitor: ClassVisitor, parsingOptions: number): void;
    // private computeImplicitFrame(context: Context): void;
    // private createDebugLabel(bytecodeOffset: number, labels: Label[]): void;
    // private createLabel(bytecodeOffset: number, labels: Label[]): Label;
    getAccess(): number;
    getClassName(): string;
    getFirstAttributeOffset(): number;
    getInterfaces(): string[];
    getItem(constantPoolEntryIndex: number): number;
    getItemCount(): number;
    getMaxStringLength(): number;
    getSuperName(): string;
    // private getTypeAnnotationBytecodeOffset(typeAnnotationOffsets: number[], typeAnnotationIndex: number): number;
    // private readAttribute(attributePrototypes: Attribute[], type: string, offset: number, length: number, charBuffer: string[], codeAttributeOffset: number, labels: Label[]): Attribute;
    // private readBootstrapMethodsAttribute(maxStringLength: number): number[];
    readByte(offset: number): number;
    readBytecodeInstructionOffset(bytecodeOffset: number): void;
    readBytes(offset: number, length: number): number[];
    readClass(offset: number, charBuffer: string[]): string;
    // private readCode(methodVisitor: MethodVisitor, context: Context, codeOffset: number): void;
    readConst(constantPoolEntryIndex: number, charBuffer: string[]): Object;
    // private readConstantDynamic(constantPoolEntryIndex: number, charBuffer: string[]): ConstantDynamic;
    // private readElementValue(annotationVisitor: AnnotationVisitor, elementValueOffset: number, elementName: string, charBuffer: string[]): number;
    // private readElementValues(annotationVisitor: AnnotationVisitor, annotationOffset: number, named: boolean, charBuffer: string[]): number;
    // private readField(classVisitor: ClassVisitor, context: Context, fieldInfoOffset: number): number;
    readInt(offset: number): number;
    readLabel(bytecodeOffset: number, labels: Label[]): Label;
    readLong(offset: number): number;
    // private readMethod(classVisitor: ClassVisitor, context: Context, methodInfoOffset: number): number;
    readModule(offset: number, charBuffer: string[]): string;
    // private readModuleAttributes(classVisitor: ClassVisitor, context: Context, moduleOffset: number, modulePackagesOffset: number, moduleMainClass: string): void;
    readPackage(offset: number, charBuffer: string[]): string;
    // private readParameterAnnotations(methodVisitor: MethodVisitor, context: Context, runtimeParameterAnnotationsOffset: number, visible: boolean): void;
    // private readRecordComponent(classVisitor: ClassVisitor, context: Context, recordComponentOffset: number): number;
    readShort(offset: number): number;
    // private readStackMapFrame(stackMapFrameOffset: number, compressed: boolean, expand: boolean, context: Context): number;
    // private readStringish(offset: number, charBuffer: string[]): string;
    // private readTypeAnnotationTarget(context: Context, typeAnnotationOffset: number): number;
    // private readTypeAnnotations(methodVisitor: MethodVisitor, context: Context, runtimeTypeAnnotationsOffset: number, visible: boolean): number[];
    readUTF8(offset: number, charBuffer: string[]): string;
    readUnsignedShort(offset: number): number;
    readUtf(constantPoolEntryIndex: number, charBuffer: string[]): string;
    // private readUtf(utfOffset: number, utfLength: number, charBuffer: string[]): string;
    // private readVerificationTypeInfo(verificationTypeInfoOffset: number, frame: Object[], index: number, charBuffer: string[], labels: Label[]): number;
}