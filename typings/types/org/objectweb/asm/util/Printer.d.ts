import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
export abstract class Printer extends Object {
    static HANDLE_TAG: (Object | null)[];
    static OPCODES: (Object | null)[];
    static TYPES: (Object | null)[];
    static appendString(paramarg0: StringBuilder, paramarg1: string): void;
    constructor(arg0: number)
    // private api: number;
    // private stringBuilder: StringBuilder;
    readonly text: Object[];
    getText(): Object[];
    print(arg0: PrintWriter): void;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visit(arg0: string, arg1: Object): void;
    visitAnnotableParameterCount(arg0: number, arg1: boolean): Printer;
    visitAnnotation(arg0: string, arg1: string): Printer;
    visitAnnotationDefault(): Printer;
    visitAnnotationEnd(): void;
    visitArray(arg0: string): Printer;
    visitClassAnnotation(arg0: string, arg1: boolean): Printer;
    visitClassAttribute(arg0: Attribute): void;
    visitClassEnd(): void;
    visitClassTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitCode(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
    visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): Printer;
    visitFieldAnnotation(arg0: string, arg1: boolean): Printer;
    visitFieldAttribute(arg0: Attribute): void;
    visitFieldEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFieldTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitInsn(arg0: number): void;
    visitInsnAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, ...arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLineNumber(arg0: number, arg1: Label): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): Printer;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMainClass(arg0: string): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): Printer;
    visitMethodAnnotation(arg0: string, arg1: boolean): Printer;
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
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): Printer;
    visitPermittedSubclass(arg0: string): void;
    visitProvide(arg0: string, ...arg1: string[]): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): Printer;
    visitRecordComponentAnnotation(arg0: string, arg1: boolean): Printer;
    visitRecordComponentAttribute(arg0: Attribute): void;
    visitRecordComponentEnd(): void;
    visitRecordComponentTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitSource(arg0: string, arg1: string): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, ...arg3: Label[]): void;
    visitTryCatchAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): Printer;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitUse(arg0: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}