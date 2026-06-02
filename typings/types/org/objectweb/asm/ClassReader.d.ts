import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { ConstantDynamic } from '../../../org/objectweb/asm/ConstantDynamic.d.ts'
import type { Context } from '../../../org/objectweb/asm/Context.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../org/objectweb/asm/MethodVisitor.d.ts'
export class ClassReader extends Object {
    static EXPAND_FRAMES: number;
    static SKIP_CODE: number;
    static SKIP_DEBUG: number;
    static SKIP_FRAMES: number;
    constructor(arg0: InputStream)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number, arg2: boolean)
    constructor(arg0: number[], arg1: number, arg2: number)
    constructor(arg0: string)
    b: number[];
    // private bootstrapMethodOffsets: number[];
    // private classFileBuffer: number[];
    // private constantDynamicValues: ConstantDynamic[];
    // private constantUtf8Values: string[];
    // private cpInfoOffsets: number[];
    header: number;
    readonly maxStringLength: number;
    accept(arg0: ClassVisitor, arg1: Attribute[], arg2: number): void;
    accept(arg0: ClassVisitor, arg1: number): void;
    // private computeImplicitFrame(arg0: Context): void;
    // private createDebugLabel(arg0: number, arg1: Label[]): void;
    // private createLabel(arg0: number, arg1: Label[]): Label;
    getAccess(): number;
    getClassName(): string;
    getFirstAttributeOffset(): number;
    getInterfaces(): string[];
    getItem(arg0: number): number;
    getItemCount(): number;
    getMaxStringLength(): number;
    getSuperName(): string;
    // private getTypeAnnotationBytecodeOffset(arg0: number[], arg1: number): number;
    // private readAttribute(arg0: Attribute[], arg1: string, arg2: number, arg3: number, arg4: string[], arg5: number, arg6: Label[]): Attribute;
    // private readBootstrapMethodsAttribute(arg0: number): number[];
    readByte(arg0: number): number;
    readBytecodeInstructionOffset(arg0: number): void;
    readBytes(arg0: number, arg1: number): number[];
    readClass(arg0: number, arg1: string[]): string;
    // private readCode(arg0: MethodVisitor, arg1: Context, arg2: number): void;
    readConst(arg0: number, arg1: string[]): Object;
    // private readConstantDynamic(arg0: number, arg1: string[]): ConstantDynamic;
    // private readElementValue(arg0: AnnotationVisitor, arg1: number, arg2: string, arg3: string[]): number;
    // private readElementValues(arg0: AnnotationVisitor, arg1: number, arg2: boolean, arg3: string[]): number;
    // private readField(arg0: ClassVisitor, arg1: Context, arg2: number): number;
    readInt(arg0: number): number;
    readLabel(arg0: number, arg1: Label[]): Label;
    readLong(arg0: number): number;
    // private readMethod(arg0: ClassVisitor, arg1: Context, arg2: number): number;
    readModule(arg0: number, arg1: string[]): string;
    // private readModuleAttributes(arg0: ClassVisitor, arg1: Context, arg2: number, arg3: number, arg4: string): void;
    readPackage(arg0: number, arg1: string[]): string;
    // private readParameterAnnotations(arg0: MethodVisitor, arg1: Context, arg2: number, arg3: boolean): void;
    // private readRecordComponent(arg0: ClassVisitor, arg1: Context, arg2: number): number;
    readShort(arg0: number): number;
    // private readStackMapFrame(arg0: number, arg1: boolean, arg2: boolean, arg3: Context): number;
    // private readStringish(arg0: number, arg1: string[]): string;
    // private readTypeAnnotationTarget(arg0: Context, arg1: number): number;
    // private readTypeAnnotations(arg0: MethodVisitor, arg1: Context, arg2: number, arg3: boolean): number[];
    readUTF8(arg0: number, arg1: string[]): string;
    readUnsignedShort(arg0: number): number;
    readUtf(arg0: number, arg1: string[]): string;
    // private readUtf(arg0: number, arg1: number, arg2: string[]): string;
    // private readVerificationTypeInfo(arg0: number, arg1: Object[], arg2: number, arg3: string[], arg4: Label[]): number;
}