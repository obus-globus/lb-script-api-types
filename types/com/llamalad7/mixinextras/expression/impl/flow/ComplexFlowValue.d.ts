import type { FlowContext } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class ComplexFlowValue extends FlowValue {
    constructor(arg0: number, arg1: FlowValue[], arg2: FlowContext)
    // private context: FlowContext;
    readonly size: number;
    // private sources: FlowValue[];
    addChild(arg0: FlowValue, arg1: number): void;
    finish(): void;
    getInput(arg0: number): FlowValue;
    getInsn(): AbstractInsnNode;
    getSize(): number;
    getType(): Type;
    inputCount(): number;
    mergeInputs(arg0: FlowValue[], arg1: FlowContext): void;
    mergeWith(arg0: FlowValue, arg1: FlowContext): FlowValue;
}