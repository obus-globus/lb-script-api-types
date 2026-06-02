import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { Value } from '../../../../../org/objectweb/asm/tree/analysis/Value.d.ts'
export class SourceValue extends Object implements Value {
    constructor(arg0: number)
    constructor(arg0: number, arg1: AbstractInsnNode[])
    constructor(arg0: number, arg1: AbstractInsnNode)
    insns: AbstractInsnNode[];
    readonly size: number;
    equals(arg0: Object | null): boolean;
    getSize(): number;
    hashCode(): number;
}