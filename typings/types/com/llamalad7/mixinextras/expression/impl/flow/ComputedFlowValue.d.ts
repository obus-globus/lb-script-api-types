import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class ComputedFlowValue extends FlowValue {
    constructor(arg0: number, arg1: (param0: FlowValue[]) => Type, arg2: AbstractInsnNode, ...arg3: FlowValue[])
    // private computer: (param0: FlowValue[]) => Type;
    readonly size: number;
    getSize(): number;
    getType(): Type;
}