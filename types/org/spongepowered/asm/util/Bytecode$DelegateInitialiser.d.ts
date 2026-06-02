import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MethodInsnNode } from '../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
export class Bytecode$DelegateInitialiser extends Object {
    static NONE: Bytecode$DelegateInitialiser;
    constructor(arg0: MethodInsnNode, arg1: boolean)
    insn: MethodInsnNode;
    isPresent: boolean;
    isSuper: boolean;
    toString(): string;
}