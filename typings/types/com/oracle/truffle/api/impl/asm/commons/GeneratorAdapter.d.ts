import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { ConstantDynamic } from '../../../../../../../com/oracle/truffle/api/impl/asm/ConstantDynamic.d.ts'
import type { Handle } from '../../../../../../../com/oracle/truffle/api/impl/asm/Handle.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../../../../com/oracle/truffle/api/impl/asm/Type.d.ts'
import type { LocalVariablesSorter } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/LocalVariablesSorter.d.ts'
import type { Method } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Method.d.ts'
import type { TableSwitchGenerator } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/TableSwitchGenerator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class GeneratorAdapter extends LocalVariablesSorter {
    static ADD: number;
    static AND: number;
    static DIV: number;
    static EQ: number;
    static GE: number;
    static GT: number;
    static LE: number;
    static LT: number;
    static MUL: number;
    static NE: number;
    static NEG: number;
    static OR: number;
    static REM: number;
    static SHL: number;
    static SHR: number;
    static SUB: number;
    static USHR: number;
    static XOR: number;
    constructor(methodVisitor: MethodVisitor, access: number, name: string, descriptor: string)
    constructor(api: number, methodVisitor: MethodVisitor, access: number, name: string, descriptor: string)
    constructor(access: number, method: Method, methodVisitor: MethodVisitor)
    constructor(access: number, method: Method, signature: string, exceptions: Type[], classVisitor: ClassVisitor)
    readonly access: number;
    readonly argumentTypes: Type[];
    // private localTypes: Type[];
    readonly name: string;
    readonly returnType: Type;
    arrayLength(): void;
    arrayLoad(type: Type): void;
    arrayStore(type: Type): void;
    box(type: Type): void;
    cast(from: Type, to: Type): void;
    catchException(start: Label, end: Label, exception: Type): void;
    checkCast(type: Type): void;
    dup(): void;
    dup2(): void;
    dup2X1(): void;
    dup2X2(): void;
    dupX1(): void;
    dupX2(): void;
    endMethod(): void;
    // private fieldInsn(opcode: number, ownerType: Type, name: string, fieldType: Type): void;
    getAccess(): number;
    // private getArgIndex(arg: number): number;
    getArgumentTypes(): Type[];
    getField(owner: Type, name: string, type: Type): void;
    getLocalType(local: number): Type;
    getName(): string;
    getReturnType(): Type;
    getStatic(owner: Type, name: string, type: Type): void;
    goTo(label: Label): void;
    ifCmp(type: Type, mode: number, label: Label): void;
    ifICmp(mode: number, label: Label): void;
    ifNonNull(label: Label): void;
    ifNull(label: Label): void;
    ifZCmp(mode: number, label: Label): void;
    iinc(local: number, amount: number): void;
    instanceOf(type: Type): void;
    invokeConstructor(type: Type, method: Method): void;
    invokeDynamic(name: string, descriptor: string, bootstrapMethodHandle: Handle, bootstrapMethodArguments: Object[]): void;
    // private invokeInsn(opcode: number, type: Type, method: Method, isInterface: boolean): void;
    invokeInterface(owner: Type, method: Method): void;
    invokeStatic(owner: Type, method: Method): void;
    invokeVirtual(owner: Type, method: Method): void;
    loadArg(arg: number): void;
    loadArgArray(): void;
    loadArgs(): void;
    loadArgs(arg: number, count: number): void;
    // private loadInsn(type: Type, index: number): void;
    loadLocal(local: number): void;
    loadLocal(local: number, type: Type): void;
    loadThis(): void;
    mark(): Label;
    mark(label: Label): void;
    math(op: number, type: Type): void;
    monitorEnter(): void;
    monitorExit(): void;
    newArray(type: Type): void;
    newInstance(type: Type): void;
    newLabel(): Label;
    not(): void;
    pop(): void;
    pop2(): void;
    push(constantDynamic: ConstantDynamic): void;
    push(handle: Handle): void;
    push(value: Type): void;
    push(value: boolean): void;
    push(value: number): void;
    push(value: number): void;
    push(value: number): void;
    push(value: number): void;
    push(value: string): void;
    putField(owner: Type, name: string, type: Type): void;
    putStatic(owner: Type, name: string, type: Type): void;
    ret(local: number): void;
    returnValue(): void;
    setLocalType(local: number, type: Type): void;
    storeArg(arg: number): void;
    // private storeInsn(type: Type, index: number): void;
    storeLocal(local: number): void;
    storeLocal(local: number, type: Type): void;
    swap(): void;
    swap(prev: Type, type: Type): void;
    tableSwitch(keys: number[], generator: TableSwitchGenerator): void;
    tableSwitch(keys: number[], generator: TableSwitchGenerator, useTable: boolean): void;
    throwException(): void;
    throwException(type: Type, message: string): void;
    // private typeInsn(opcode: number, type: Type): void;
    unbox(type: Type): void;
    valueOf(type: Type): void;
}