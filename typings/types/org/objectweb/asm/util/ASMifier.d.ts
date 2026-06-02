import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Printer } from '../../../../org/objectweb/asm/util/Printer.d.ts'
export class ASMifier extends Printer {
    static HANDLE_TAG: (Object | null)[];
    static OPCODES: (Object | null)[];
    static TYPES: (Object | null)[];
    static appendString(paramarg0: StringBuilder, paramarg1: string): void;
    static main(paramarg0: (Object | null)[]): void;
    constructor()
    constructor(arg0: number, arg1: string, arg2: number)
    // private id: number;
    // private labelNames: Map<Label, string>;
    // private name: string;
    // private appendAccessFlags(arg0: number): void;
    appendConstant(arg0: Object): void;
    // private appendFrameTypes(arg0: number, arg1: Object[]): void;
    appendLabel(arg0: Label): void;
    createASMifier(arg0: string, arg1: number): ASMifier;
    // private declareFrameTypes(arg0: number, arg1: Object[]): void;
    declareLabel(arg0: Label): void;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visit(arg0: string, arg1: Object): void;
    visitAnnotableParameterCount(arg0: number, arg1: boolean): ASMifier;
    visitAnnotation(arg0: string, arg1: boolean): ASMifier;
    visitAnnotation(arg0: string, arg1: string): ASMifier;
    visitAnnotationDefault(): ASMifier;
    visitAnnotationEnd(): void;
    visitArray(arg0: string): ASMifier;
    visitAttribute(arg0: Attribute): void;
    visitClassAnnotation(arg0: string, arg1: boolean): ASMifier;
    visitClassAttribute(arg0: Attribute): void;
    visitClassEnd(): void;
    visitClassTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitCode(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
    visitExport(arg0: string, arg1: number, arg2: string[]): void;
    // private visitExportOrOpen(arg0: string, arg1: string, arg2: number, arg3: string[]): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): ASMifier;
    visitFieldAnnotation(arg0: string, arg1: boolean): ASMifier;
    visitFieldAttribute(arg0: Attribute): void;
    visitFieldEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFieldTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitInsn(arg0: number): void;
    visitInsnAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLineNumber(arg0: number, arg1: Label): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): Printer;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMainClass(arg0: string): void;
    visitMaxs(arg0: number, arg1: number): void;
    // private visitMemberEnd(): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): ASMifier;
    visitMethodAnnotation(arg0: string, arg1: boolean): ASMifier;
    visitMethodAttribute(arg0: Attribute): void;
    visitMethodEnd(): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMethodTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitModule(arg0: string, arg1: number, arg2: string): Printer;
    visitModuleEnd(): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitNestHost(arg0: string): void;
    visitNestMember(arg0: string): void;
    visitOpen(arg0: string, arg1: number, arg2: string[]): void;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitPackage(arg0: string): void;
    visitParameter(arg0: string, arg1: number): void;
    visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): ASMifier;
    visitPermittedSubclass(arg0: string): void;
    visitProvide(arg0: string, arg1: string[]): void;
    visitRecordComponent(arg0: string, arg1: string, arg2: string): ASMifier;
    visitRecordComponentAnnotation(arg0: string, arg1: boolean): ASMifier;
    visitRecordComponentAttribute(arg0: Attribute): void;
    visitRecordComponentEnd(): void;
    visitRecordComponentTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitRequire(arg0: string, arg1: number, arg2: string): void;
    visitSource(arg0: string, arg1: string): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    visitTryCatchAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): ASMifier;
    visitTypeAnnotation(arg0: string, arg1: number, arg2: TypePath, arg3: string, arg4: boolean): ASMifier;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitUse(arg0: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}