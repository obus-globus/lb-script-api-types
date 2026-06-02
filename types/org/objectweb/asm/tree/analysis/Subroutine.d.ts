import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JumpInsnNode } from '../../../../../org/objectweb/asm/tree/JumpInsnNode.d.ts'
import type { LabelNode } from '../../../../../org/objectweb/asm/tree/LabelNode.d.ts'
export class Subroutine extends Object {
    constructor(arg0: LabelNode, arg1: number, arg2: JumpInsnNode)
    constructor(arg0: Subroutine)
    // private callers: JumpInsnNode[];
    // private localsUsed: (Object | null)[];
    // private start: LabelNode;
    merge(arg0: Subroutine): boolean;
}