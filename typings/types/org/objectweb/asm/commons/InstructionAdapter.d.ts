import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConstantDynamic } from '../../../../org/objectweb/asm/ConstantDynamic.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
export class InstructionAdapter extends MethodVisitor {
    static OBJECT_TYPE: Type;
    constructor(arg0: number, arg1: MethodVisitor)
    constructor(arg0: MethodVisitor)
    aconst(arg0: Object): void;
    add(arg0: Type): void;
    aload(arg0: Type): void;
    and(arg0: Type): void;
    anew(arg0: Type): void;
    areturn(arg0: Type): void;
    arraylength(): void;
    astore(arg0: Type): void;
    athrow(): void;
    cast(arg0: Type, arg1: Type): void;
    cconst(arg0: ConstantDynamic): void;
    checkcast(arg0: Type): void;
    cmpg(arg0: Type): void;
    cmpl(arg0: Type): void;
    dconst(arg0: number): void;
    div(arg0: Type): void;
    dup(): void;
    dup2(): void;
    dup2X1(): void;
    dup2X2(): void;
    dupX1(): void;
    dupX2(): void;
    fconst(arg0: number): void;
    getfield(arg0: string, arg1: string, arg2: string): void;
    getstatic(arg0: string, arg1: string, arg2: string): void;
    goTo(arg0: Label): void;
    hconst(arg0: Handle): void;
    iconst(arg0: number): void;
    ifacmpeq(arg0: Label): void;
    ifacmpne(arg0: Label): void;
    ifeq(arg0: Label): void;
    ifge(arg0: Label): void;
    ifgt(arg0: Label): void;
    ificmpeq(arg0: Label): void;
    ificmpge(arg0: Label): void;
    ificmpgt(arg0: Label): void;
    ificmple(arg0: Label): void;
    ificmplt(arg0: Label): void;
    ificmpne(arg0: Label): void;
    ifle(arg0: Label): void;
    iflt(arg0: Label): void;
    ifne(arg0: Label): void;
    ifnonnull(arg0: Label): void;
    ifnull(arg0: Label): void;
    iinc(arg0: number, arg1: number): void;
    instanceOf(arg0: Type): void;
    invokedynamic(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    invokeinterface(arg0: string, arg1: string, arg2: string): void;
    invokespecial(arg0: string, arg1: string, arg2: string): void;
    invokespecial(arg0: string, arg1: string, arg2: string, arg3: boolean): void;
    invokestatic(arg0: string, arg1: string, arg2: string): void;
    invokestatic(arg0: string, arg1: string, arg2: string, arg3: boolean): void;
    invokevirtual(arg0: string, arg1: string, arg2: string): void;
    invokevirtual(arg0: string, arg1: string, arg2: string, arg3: boolean): void;
    jsr(arg0: Label): void;
    lcmp(): void;
    lconst(arg0: number): void;
    load(arg0: number, arg1: Type): void;
    lookupswitch(arg0: Label, arg1: number[], arg2: Label[]): void;
    mark(arg0: Label): void;
    monitorenter(): void;
    monitorexit(): void;
    mul(arg0: Type): void;
    multianewarray(arg0: string, arg1: number): void;
    neg(arg0: Type): void;
    newarray(arg0: Type): void;
    nop(): void;
    or(arg0: Type): void;
    pop(): void;
    pop2(): void;
    putfield(arg0: string, arg1: string, arg2: string): void;
    putstatic(arg0: string, arg1: string, arg2: string): void;
    rem(arg0: Type): void;
    ret(arg0: number): void;
    shl(arg0: Type): void;
    shr(arg0: Type): void;
    store(arg0: number, arg1: Type): void;
    sub(arg0: Type): void;
    swap(): void;
    tableswitch(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    tconst(arg0: Type): void;
    ushr(arg0: Type): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
    xor(arg0: Type): void;
}