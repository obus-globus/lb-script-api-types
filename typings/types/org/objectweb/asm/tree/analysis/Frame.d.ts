import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LabelNode } from '../../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { Interpreter } from '../../../../../org/objectweb/asm/tree/analysis/Interpreter.d.ts'
import type { Value } from '../../../../../org/objectweb/asm/tree/analysis/Value.d.ts'
export class Frame<V extends Value> extends Object {
    constructor(arg0: number, arg1: number)
    constructor(arg0: Frame<V>)
    // private maxStack: number;
    // private numLocals: number;
    // private numStack: number;
    // private returnValue: V;
    // private values: V[];
    clearStack(): void;
    execute(arg0: AbstractInsnNode, arg1: Interpreter<V>): void;
    // private executeDupX2(arg0: AbstractInsnNode, arg1: V, arg2: Interpreter<V>): boolean;
    // private executeInvokeInsn(arg0: AbstractInsnNode, arg1: string, arg2: Interpreter<V>): void;
    getLocal(arg0: number): V;
    getLocals(): number;
    getMaxStackSize(): number;
    getStack(arg0: number): V;
    getStackSize(): number;
    init(arg0: Frame<V>): Frame<V>;
    initJumpTarget(arg0: number, arg1: LabelNode): void;
    merge(arg0: Frame<V>, arg1: (Object | null)[]): boolean;
    merge(arg0: Frame<V>, arg1: Interpreter<V>): boolean;
    pop(): V;
    push(arg0: V): void;
    setLocal(arg0: number, arg1: V): void;
    setReturn(arg0: V): void;
    setStack(arg0: number, arg1: V): void;
    toString(): string;
}