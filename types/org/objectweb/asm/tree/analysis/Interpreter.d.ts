import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { TryCatchBlockNode } from '../../../../../org/objectweb/asm/tree/TryCatchBlockNode.d.ts'
import type { Frame } from '../../../../../org/objectweb/asm/tree/analysis/Frame.d.ts'
import type { Value } from '../../../../../org/objectweb/asm/tree/analysis/Value.d.ts'
export abstract class Interpreter<V extends Value> extends Object {
    constructor(arg0: number)
    // private api: number;
    binaryOperation(arg0: AbstractInsnNode, arg1: V, arg2: V): V;
    copyOperation(arg0: AbstractInsnNode, arg1: V): V;
    merge(arg0: V, arg1: V): V;
    naryOperation(arg0: AbstractInsnNode, arg1: V[]): V;
    newEmptyValue(arg0: number): V;
    newExceptionValue(arg0: TryCatchBlockNode, arg1: Frame<V>, arg2: Type): V;
    newOperation(arg0: AbstractInsnNode): V;
    newParameterValue(arg0: boolean, arg1: number, arg2: Type): V;
    newReturnTypeValue(arg0: Type): V;
    newValue(arg0: Type): V;
    returnOperation(arg0: AbstractInsnNode, arg1: V, arg2: V): void;
    ternaryOperation(arg0: AbstractInsnNode, arg1: V, arg2: V, arg3: V): V;
    unaryOperation(arg0: AbstractInsnNode, arg1: V): V;
}