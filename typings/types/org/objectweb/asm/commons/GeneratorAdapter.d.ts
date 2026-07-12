import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { ConstantDynamic } from '../../../../org/objectweb/asm/ConstantDynamic.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { LocalVariablesSorter } from '../../../../org/objectweb/asm/commons/LocalVariablesSorter.d.ts'
import type { Method } from '../../../../org/objectweb/asm/commons/Method.d.ts'
import type { TableSwitchGenerator } from '../../../../org/objectweb/asm/commons/TableSwitchGenerator.d.ts'
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
    constructor(arg0: number, arg1: MethodVisitor, arg2: number, arg3: string, arg4: string)
    constructor(arg0: number, arg1: Method, arg2: string, arg3: Type[], arg4: ClassVisitor)
    constructor(arg0: number, arg1: Method, arg2: MethodVisitor)
    constructor(arg0: MethodVisitor, arg1: number, arg2: string, arg3: string)
    readonly access: number;
    readonly argumentTypes: Type[];
    // private localTypes: Type[];
    readonly name: string;
    readonly returnType: Type;
    arrayLength(): void;
    arrayLoad(arg0: Type): void;
    arrayStore(arg0: Type): void;
    box(arg0: Type): void;
    cast(arg0: Type, arg1: Type): void;
    catchException(arg0: Label, arg1: Label, arg2: Type): void;
    checkCast(arg0: Type): void;
    dup(): void;
    dup2(): void;
    dup2X1(): void;
    dup2X2(): void;
    dupX1(): void;
    dupX2(): void;
    endMethod(): void;
    // private fieldInsn(arg0: number, arg1: Type, arg2: string, arg3: Type): void;
    getAccess(): number;
    // private getArgIndex(arg0: number): number;
    getArgumentTypes(): Type[];
    getField(arg0: Type, arg1: string, arg2: Type): void;
    getLocalType(arg0: number): Type;
    getName(): string;
    getReturnType(): Type;
    getStatic(arg0: Type, arg1: string, arg2: Type): void;
    goTo(arg0: Label): void;
    ifCmp(arg0: Type, arg1: number, arg2: Label): void;
    ifICmp(arg0: number, arg1: Label): void;
    ifNonNull(arg0: Label): void;
    ifNull(arg0: Label): void;
    ifZCmp(arg0: number, arg1: Label): void;
    iinc(arg0: number, arg1: number): void;
    instanceOf(arg0: Type): void;
    invokeConstructor(arg0: Type, arg1: Method): void;
    invokeDynamic(arg0: string, arg1: string, arg2: Handle, ...arg3: Object[]): void;
    // private invokeInsn(arg0: number, arg1: Type, arg2: Method, arg3: boolean): void;
    invokeInterface(arg0: Type, arg1: Method): void;
    invokeStatic(arg0: Type, arg1: Method): void;
    invokeVirtual(arg0: Type, arg1: Method): void;
    loadArg(arg0: number): void;
    loadArgArray(): void;
    loadArgs(): void;
    loadArgs(arg0: number, arg1: number): void;
    // private loadInsn(arg0: Type, arg1: number): void;
    loadLocal(arg0: number): void;
    loadLocal(arg0: number, arg1: Type): void;
    loadThis(): void;
    mark(): Label;
    mark(arg0: Label): void;
    math(arg0: number, arg1: Type): void;
    monitorEnter(): void;
    monitorExit(): void;
    newArray(arg0: Type): void;
    newInstance(arg0: Type): void;
    newLabel(): Label;
    not(): void;
    pop(): void;
    pop2(): void;
    push(arg0: boolean): void;
    push(arg0: number): void;
    push(arg0: string): void;
    push(arg0: ConstantDynamic): void;
    push(arg0: Handle): void;
    push(arg0: Type): void;
    putField(arg0: Type, arg1: string, arg2: Type): void;
    putStatic(arg0: Type, arg1: string, arg2: Type): void;
    ret(arg0: number): void;
    returnValue(): void;
    setLocalType(arg0: number, arg1: Type): void;
    storeArg(arg0: number): void;
    // private storeInsn(arg0: Type, arg1: number): void;
    storeLocal(arg0: number): void;
    storeLocal(arg0: number, arg1: Type): void;
    swap(): void;
    swap(arg0: Type, arg1: Type): void;
    tableSwitch(arg0: number[], arg1: TableSwitchGenerator): void;
    tableSwitch(arg0: number[], arg1: TableSwitchGenerator, arg2: boolean): void;
    throwException(): void;
    throwException(arg0: Type, arg1: string): void;
    // private typeInsn(arg0: number, arg1: Type): void;
    unbox(arg0: Type): void;
    valueOf(arg0: Type): void;
}