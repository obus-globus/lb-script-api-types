import type { FlowContext } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { LocalVariableNode } from '../../../../../../org/objectweb/asm/tree/LocalVariableNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { VarInsnNode } from '../../../../../../org/objectweb/asm/tree/VarInsnNode.d.ts'
import type { BasicValue } from '../../../../../../org/objectweb/asm/tree/analysis/BasicValue.d.ts'
import type { Interpreter } from '../../../../../../org/objectweb/asm/tree/analysis/Interpreter.d.ts'
export class LocalsCalculator extends Interpreter<BasicValue> {
    static getLocalTypes(paramarg0: ClassNode, paramarg1: MethodNode, paramarg2: FlowContext): Map<VarInsnNode, Type>;
    private constructor(arg0: MethodNode, arg1: FlowContext)
    // private context: FlowContext;
    // private methodNode: MethodNode;
    // private results: Map<VarInsnNode, Object>;
    binaryOperation(arg0: AbstractInsnNode, arg1: BasicValue, arg2: BasicValue): BasicValue;
    copyOperation(arg0: AbstractInsnNode, arg1: BasicValue): BasicValue;
    // private getLocalVariableAt(arg0: VarInsnNode): LocalVariableNode;
    // private isOpcodeInRange(arg0: AbstractInsnNode[], arg1: LocalVariableNode, arg2: number): boolean;
    merge(arg0: BasicValue, arg1: BasicValue): BasicValue;
    naryOperation(arg0: AbstractInsnNode, arg1: BasicValue[]): BasicValue;
    newOperation(arg0: AbstractInsnNode): BasicValue;
    newValue(arg0: Type): BasicValue;
    // private recordType(arg0: VarInsnNode, arg1: Type): void;
    returnOperation(arg0: AbstractInsnNode, arg1: BasicValue, arg2: BasicValue): void;
    ternaryOperation(arg0: AbstractInsnNode, arg1: BasicValue, arg2: BasicValue, arg3: BasicValue): BasicValue;
    unaryOperation(arg0: AbstractInsnNode, arg1: BasicValue): BasicValue;
}