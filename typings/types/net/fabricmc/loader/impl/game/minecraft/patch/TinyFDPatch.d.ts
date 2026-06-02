import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ListIterator } from '../../../../../../../java/util/ListIterator.d.ts'
import type { GamePatch } from '../../../../../../../net/fabricmc/loader/impl/game/patch/GamePatch.d.ts'
import type { FabricLauncher } from '../../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class TinyFDPatch extends GamePatch {
    constructor()
    // private findTargetMethodNode(arg0: MethodNode): ListIterator<AbstractInsnNode>;
    // private patchMoreOptionsDialog(arg0: ClassNode): void;
    process(arg0: FabricLauncher, arg1: (param0: string) => ClassNode, arg2: (param0: ClassNode) => void): void;
}