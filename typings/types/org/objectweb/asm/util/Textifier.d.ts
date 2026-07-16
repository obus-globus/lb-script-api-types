import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ConstantDynamic } from '../../../../org/objectweb/asm/ConstantDynamic.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Printer } from '../../../../org/objectweb/asm/util/Printer.d.ts'
export class Textifier extends Printer {
    static CLASS_SIGNATURE: number;
    static FIELD_DESCRIPTOR: number;
    static FIELD_SIGNATURE: number;
    static HANDLE_DESCRIPTOR: number;
    static HANDLE_TAG: string[];
    static INTERNAL_NAME: number;
    static METHOD_DESCRIPTOR: number;
    static METHOD_SIGNATURE: number;
    static OPCODES: string[];
    static TYPES: string[];
    static appendString(paramarg0: StringBuilder, paramarg1: string): void;
    static main(paramarg0: string[]): void;
    constructor()
    constructor(arg0: number)
    // private access: number;
    // private labelNames: Map<Label, string>;
    // private ltab: string;
    // private numAnnotationValues: number;
    // private tab: string;
    // private tab2: string;
    // private tab3: string;
    // private addNewTextifier(arg0: string): Textifier;
    // private appendAccess(arg0: number): void;
    // private appendBoostrapMethodArgs(arg0: Object[], arg1: string): void;
    // private appendConstant(arg0: Object): void;
    // private appendConstantDynamic(arg0: ConstantDynamic, arg1: string): void;
    appendDescriptor(arg0: number, arg1: string): void;
    // private appendFrameTypes(arg0: number, arg1: Object[]): void;
    appendHandle(arg0: Handle): void;
    appendHandle(arg0: Handle, arg1: string): void;
    // private appendJavaDeclaration(arg0: string, arg1: string): void;
    appendLabel(arg0: Label): void;
    // private appendRawAccess(arg0: number): void;
    // private appendTypeReference(arg0: number): void;
    createTextifier(): Textifier;
    // private maybeAppendComma(arg0: number): void;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visit(arg0: string, arg1: Object): void;
    visitAnnotableParameterCount(arg0: number, arg1: boolean): Textifier;
    visitAnnotation(arg0: string, arg1: boolean): Textifier;
    visitAnnotation(arg0: string, arg1: string): Textifier;
    visitAnnotationDefault(): Textifier;
    visitAnnotationEnd(): void;
    // private visitAnnotationValue(arg0: string): void;
    visitArray(arg0: string): Textifier;
    visitAttribute(arg0: Attribute): void;
    // private visitBoolean(arg0: boolean): void;
    // private visitByte(arg0: number): void;
    // private visitChar(arg0: string): void;
    visitClassAnnotation(arg0: string, arg1: boolean): Textifier;
    visitClassAttribute(arg0: Attribute): void;
    visitClassEnd(): void;
    visitClassTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitCode(): void;
    // private visitDouble(arg0: number): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    // private visitExportOrOpen(arg0: string, arg1: string, arg2: number, ...arg3: string[]): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): Textifier;
    visitFieldAnnotation(arg0: string, arg1: boolean): Textifier;
    visitFieldAttribute(arg0: Attribute): void;
    visitFieldEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFieldTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    // private visitFloat(arg0: number): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitInsn(arg0: number): void;
    visitInsnAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    // private visitInt(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, ...arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLineNumber(arg0: number, arg1: Label): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): Printer;
    // private visitLong(arg0: number): void;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMainClass(arg0: string): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): Textifier;
    visitMethodAnnotation(arg0: string, arg1: boolean): Textifier;
    visitMethodAttribute(arg0: Attribute): void;
    visitMethodEnd(): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMethodTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitModule(arg0: string, arg1: number, arg2: string): Printer;
    visitModuleEnd(): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitNestHost(arg0: string): void;
    visitNestMember(arg0: string): void;
    visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitPackage(arg0: string): void;
    visitParameter(arg0: string, arg1: number): void;
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): Textifier;
    visitPermittedSubclass(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): Printer;
    visitRecordComponentAnnotation(arg0: string, arg1: boolean): Textifier;
    visitRecordComponentAttribute(arg0: Attribute): void;
    visitRecordComponentEnd(): void;
    visitRecordComponentTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    // private visitShort(arg0: number): void;
    visitSource(arg0: string, arg1: string): void;
    // private visitString(arg0: string): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, ...arg3: Label[]): void;
    visitTryCatchAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    // private visitType(arg0: Type): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Textifier;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitUse(arg0: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}