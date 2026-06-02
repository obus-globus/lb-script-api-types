import type { FlowContext } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { Pair } from '../../../../../../com/llamalad7/mixinextras/lib/apache/commons/tuple/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { Value } from '../../../../../../org/objectweb/asm/tree/analysis/Value.d.ts'
export class FlowValue extends Object implements Value {
    constructor(arg0: Type, arg1: AbstractInsnNode, arg2: FlowValue[])
    readonly decorations: { [key: string]: Object };
    readonly insn: AbstractInsnNode;
    readonly next: Pair<FlowValue, number>[];
    // private nextIsReady: boolean;
    parents: FlowValue[];
    readonly type: Type;
    addChild(arg0: FlowValue, arg1: number): void;
    decorate<V extends Object | number | string | boolean>(arg0: string, arg1: V): void;
    finish(): void;
    getDecoration<V extends Object | number | string | boolean>(arg0: string): V;
    getDecorations(): { [key: string]: Object };
    getInput(arg0: number): FlowValue;
    getInsn(): AbstractInsnNode;
    getNext(): E[];
    getSize(): number;
    getType(): Type;
    hasDecoration(arg0: string): boolean;
    inputCount(): number;
    isComplex(): boolean;
    // private isTypeKnown(): boolean;
    // private markNextDirty(): void;
    mergeInputs(arg0: FlowValue[], arg1: FlowContext): void;
    mergeWith(arg0: FlowValue, arg1: FlowContext): FlowValue;
    onFinished(): void;
    removeParent(arg0: number): void;
    setInsn(arg0: AbstractInsnNode): void;
    setParent(arg0: number, arg1: FlowValue): void;
    setParents(arg0: FlowValue[]): void;
    typeMatches(arg0: Type): boolean;
}