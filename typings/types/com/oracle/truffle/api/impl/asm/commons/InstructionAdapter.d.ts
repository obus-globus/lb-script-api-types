import type { ConstantDynamic } from '../../../../../../../com/oracle/truffle/api/impl/asm/ConstantDynamic.d.ts'
import type { Handle } from '../../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../../../../com/oracle/truffle/api/impl/asm/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InstructionAdapter extends MethodVisitor {
    static OBJECT_TYPE: Type;
    constructor(methodVisitor: MethodVisitor)
    constructor(api: number, methodVisitor: MethodVisitor)
    aconst(value: Object): void;
    add(type: Type): void;
    aload(type: Type): void;
    and(type: Type): void;
    anew(type: Type): void;
    areturn(type: Type): void;
    arraylength(): void;
    astore(type: Type): void;
    athrow(): void;
    cast(from: Type, to: Type): void;
    cconst(constantDynamic: ConstantDynamic): void;
    checkcast(type: Type): void;
    cmpg(type: Type): void;
    cmpl(type: Type): void;
    dconst(doubleValue: number): void;
    div(type: Type): void;
    dup(): void;
    dup2(): void;
    dup2X1(): void;
    dup2X2(): void;
    dupX1(): void;
    dupX2(): void;
    fconst(floatValue: number): void;
    getfield(owner: string, name: string, descriptor: string): void;
    getstatic(owner: string, name: string, descriptor: string): void;
    goTo(label: Label): void;
    hconst(handle: Handle): void;
    iconst(intValue: number): void;
    ifacmpeq(label: Label): void;
    ifacmpne(label: Label): void;
    ifeq(label: Label): void;
    ifge(label: Label): void;
    ifgt(label: Label): void;
    ificmpeq(label: Label): void;
    ificmpge(label: Label): void;
    ificmpgt(label: Label): void;
    ificmple(label: Label): void;
    ificmplt(label: Label): void;
    ificmpne(label: Label): void;
    ifle(label: Label): void;
    iflt(label: Label): void;
    ifne(label: Label): void;
    ifnonnull(label: Label): void;
    ifnull(label: Label): void;
    iinc(varIndex: number, increment: number): void;
    instanceOf(type: Type): void;
    invokedynamic(name: string, descriptor: string, bootstrapMethodHandle: Handle, bootstrapMethodArguments: Object[]): void;
    invokeinterface(owner: string, name: string, descriptor: string): void;
    invokespecial(owner: string, name: string, descriptor: string): void;
    invokespecial(owner: string, name: string, descriptor: string, isInterface: boolean): void;
    invokestatic(owner: string, name: string, descriptor: string): void;
    invokestatic(owner: string, name: string, descriptor: string, isInterface: boolean): void;
    invokevirtual(owner: string, name: string, descriptor: string): void;
    invokevirtual(owner: string, name: string, descriptor: string, isInterface: boolean): void;
    jsr(label: Label): void;
    lcmp(): void;
    lconst(longValue: number): void;
    load(varIndex: number, type: Type): void;
    lookupswitch(dflt: Label, keys: number[], labels: Label[]): void;
    mark(label: Label): void;
    monitorenter(): void;
    monitorexit(): void;
    mul(type: Type): void;
    multianewarray(descriptor: string, numDimensions: number): void;
    neg(type: Type): void;
    newarray(type: Type): void;
    nop(): void;
    or(type: Type): void;
    pop(): void;
    pop2(): void;
    putfield(owner: string, name: string, descriptor: string): void;
    putstatic(owner: string, name: string, descriptor: string): void;
    rem(type: Type): void;
    ret(varIndex: number): void;
    shl(type: Type): void;
    shr(type: Type): void;
    store(varIndex: number, type: Type): void;
    sub(type: Type): void;
    swap(): void;
    tableswitch(min: number, max: number, dflt: Label, labels: Label[]): void;
    tconst(type: Type): void;
    ushr(type: Type): void;
    visitFieldInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitIincInsn(varIndex: number, increment: number): void;
    visitInsn(opcode: number): void;
    visitIntInsn(opcode: number, operand: number): void;
    visitInvokeDynamicInsn(name: string, descriptor: string, bootstrapMethodHandle: Handle, bootstrapMethodArguments: Object[]): void;
    visitJumpInsn(opcode: number, label: Label): void;
    visitLabel(label: Label): void;
    visitLdcInsn(value: Object): void;
    visitLookupSwitchInsn(dflt: Label, keys: number[], labels: Label[]): void;
    visitMethodInsn(opcode: number, owner: string, name: string, descriptor: string): void;
    visitMethodInsn(opcodeAndSource: number, owner: string, name: string, descriptor: string, isInterface: boolean): void;
    visitMultiANewArrayInsn(descriptor: string, numDimensions: number): void;
    visitTableSwitchInsn(min: number, max: number, dflt: Label, labels: Label[]): void;
    visitTypeInsn(opcode: number, type: string): void;
    visitVarInsn(opcode: number, varIndex: number): void;
    xor(type: Type): void;
}