import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class InsnRange extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    end: number;
    marker: number;
    start: number;
    apply(arg0: AbstractInsnNode[], arg1: boolean): AbstractInsnNode[];
    contains(arg0: number): boolean;
    excludes(arg0: number): boolean;
    isValid(): boolean;
    toString(): string;
}