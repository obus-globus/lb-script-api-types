import type { LocalVariableNode } from '../../../../org/objectweb/asm/tree/LocalVariableNode.d.ts'
import type { Locals$Settings } from '../../../../org/spongepowered/asm/util/Locals$Settings.d.ts'
export class Locals$ZombieLocalVariableNode extends LocalVariableNode {
    constructor(arg0: LocalVariableNode, arg1: string)
    // private ancestor: LocalVariableNode;
    // private frames: number;
    // private lifetime: number;
    // private type: string;
    checkResurrect(arg0: Locals$Settings): boolean;
    toString(): string;
}