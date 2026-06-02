import type { FlowContext } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class DummyFlowValue extends FlowValue {
    static UNINITIALIZED: FlowValue;
    constructor(arg0: Type)
    addChild(arg0: FlowValue, arg1: number): void;
    equals(arg0: Object | null): boolean;
    finish(): void;
    getInput(arg0: number): FlowValue;
    getInsn(): AbstractInsnNode;
    hashCode(): number;
    inputCount(): number;
    mergeInputs(arg0: FlowValue[], arg1: FlowContext): void;
}