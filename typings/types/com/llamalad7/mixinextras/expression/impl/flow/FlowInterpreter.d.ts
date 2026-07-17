import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { FlowContext } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { VarInsnNode } from '../../../../../../org/objectweb/asm/tree/VarInsnNode.d.ts'
import type { Interpreter } from '../../../../../../org/objectweb/asm/tree/analysis/Interpreter.d.ts'
export class FlowInterpreter extends Interpreter<FlowValue> {
    static analyze(paramarg0: ClassNode, paramarg1: MethodNode, paramarg2: FlowContext): FlowValue[];
    constructor(arg0: ClassNode, arg1: MethodNode, arg2: FlowContext)
    // private cache: JavaMap<AbstractInsnNode, FlowValue>;
    // private context: FlowContext;
    // private localTypes: JavaMap<VarInsnNode, Type>;
    // private postProcessors: FlowPostProcessor[];
    binaryOperation(arg0: AbstractInsnNode, arg1: FlowValue, arg2: FlowValue): FlowValue;
    copyOperation(arg0: AbstractInsnNode, arg1: FlowValue): FlowValue;
    finish(): FlowValue[];
    merge(arg0: FlowValue, arg1: FlowValue): FlowValue;
    naryOperation(arg0: AbstractInsnNode, arg1: FlowValue[]): FlowValue;
    newOperation(arg0: AbstractInsnNode): FlowValue;
    newValue(arg0: Type): FlowValue;
    // private recordComputedFlow(arg0: number, arg1: (param0: FlowValue[]) => Type, arg2: AbstractInsnNode, ...arg3: FlowValue[]): FlowValue;
    // private recordFlow(arg0: Type, arg1: AbstractInsnNode, ...arg2: FlowValue[]): FlowValue;
    returnOperation(arg0: AbstractInsnNode, arg1: FlowValue, arg2: FlowValue): void;
    ternaryOperation(arg0: AbstractInsnNode, arg1: FlowValue, arg2: FlowValue, arg3: FlowValue): FlowValue;
    unaryOperation(arg0: AbstractInsnNode, arg1: FlowValue): FlowValue;
}