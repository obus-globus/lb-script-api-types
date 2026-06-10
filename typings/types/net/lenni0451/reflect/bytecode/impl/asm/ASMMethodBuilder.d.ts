import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BytecodeBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/BytecodeBuilder.d.ts'
import type { MethodBuilder } from '../../../../../../net/lenni0451/reflect/bytecode/builder/MethodBuilder.d.ts'
import type { BytecodeLabel } from '../../../../../../net/lenni0451/reflect/bytecode/wrapper/BytecodeLabel.d.ts'
export class ASMMethodBuilder extends Object implements MethodBuilder {
    constructor(arg0: (param0: string) => number, arg1: Object)
    readonly methodVisitor: Object;
    // private opcodeResolver: (param0: string) => number;
    aaload(): MethodBuilder;
    aastore(): MethodBuilder;
    aconstNull(): MethodBuilder;
    aload(arg0: number): MethodBuilder;
    anewarray(arg0: string): MethodBuilder;
    areturn(): MethodBuilder;
    astore(arg0: number): MethodBuilder;
    athrow(): MethodBuilder;
    bipush(arg0: number): MethodBuilder;
    box(arg0: Class<Object>): MethodBuilder;
    checkcast(arg0: string): MethodBuilder;
    dconst0(): MethodBuilder;
    dconst1(): MethodBuilder;
    dload(arg0: number): MethodBuilder;
    dreturn(): MethodBuilder;
    dstore(arg0: number): MethodBuilder;
    dup(): MethodBuilder;
    dupX1(): MethodBuilder;
    fconst0(): MethodBuilder;
    fconst1(): MethodBuilder;
    fconst2(): MethodBuilder;
    // private field(arg0: number, arg1: string, arg2: string, arg3: string): MethodBuilder;
    fload(arg0: number): MethodBuilder;
    freturn(): MethodBuilder;
    fstore(arg0: number): MethodBuilder;
    getMethodVisitor(): Object;
    getfield(arg0: string, arg1: string, arg2: string): MethodBuilder;
    getstatic(arg0: string, arg1: string, arg2: string): MethodBuilder;
    goto_(arg0: BytecodeLabel): MethodBuilder;
    i2l(): MethodBuilder;
    iconst0(): MethodBuilder;
    iconst1(): MethodBuilder;
    iconst2(): MethodBuilder;
    iconst3(): MethodBuilder;
    iconst4(): MethodBuilder;
    iconst5(): MethodBuilder;
    iconstM1(): MethodBuilder;
    ifne(arg0: BytecodeLabel): MethodBuilder;
    ifnonnull(arg0: BytecodeLabel): MethodBuilder;
    iload(arg0: number): MethodBuilder;
    // private insn(arg0: number): MethodBuilder;
    intPush(arg0: number): MethodBuilder;
    // private int_(arg0: number, arg1: number): MethodBuilder;
    invokeinterface(arg0: string, arg1: string, arg2: string): MethodBuilder;
    invokespecial(arg0: string, arg1: string, arg2: string, arg3: boolean): MethodBuilder;
    invokestatic(arg0: string, arg1: string, arg2: string, arg3: boolean): MethodBuilder;
    invokevirtual(arg0: string, arg1: string, arg2: string): MethodBuilder;
    ireturn(): MethodBuilder;
    istore(arg0: number): MethodBuilder;
    // private jump(arg0: number, arg1: BytecodeLabel): MethodBuilder;
    label(arg0: BytecodeLabel): MethodBuilder;
    lconst0(): MethodBuilder;
    lconst1(): MethodBuilder;
    ldc(arg0: Object): MethodBuilder;
    lload(arg0: number): MethodBuilder;
    load(arg0: Class<Object>, arg1: number): MethodBuilder;
    lreturn(): MethodBuilder;
    lstore(arg0: number): MethodBuilder;
    maxs(arg0: number, arg1: number): MethodBuilder;
    // private method(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): MethodBuilder;
    newLabel(): BytecodeLabel;
    new_(arg0: string): MethodBuilder;
    pop(): MethodBuilder;
    putfield(arg0: string, arg1: string, arg2: string): MethodBuilder;
    putstatic(arg0: string, arg1: string, arg2: string): MethodBuilder;
    return_(arg0: Class<Object>): MethodBuilder;
    return_(): MethodBuilder;
    sipush(arg0: number): MethodBuilder;
    store(arg0: Class<Object>, arg1: number): MethodBuilder;
    tryCatch(arg0: BytecodeLabel, arg1: BytecodeLabel, arg2: BytecodeLabel, arg3: string): MethodBuilder;
    // private type(arg0: number, arg1: string): MethodBuilder;
    typeLdc(arg0: BytecodeBuilder, arg1: Class<Object>): MethodBuilder;
    unbox(arg0: Class<Object>): MethodBuilder;
    // private var(arg0: number, arg1: number): MethodBuilder;
}