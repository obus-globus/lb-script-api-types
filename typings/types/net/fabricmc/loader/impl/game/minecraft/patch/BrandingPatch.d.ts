import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { GamePatch } from '../../../../../../../net/fabricmc/loader/impl/game/patch/GamePatch.d.ts'
import type { FabricLauncher } from '../../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class BrandingPatch extends GamePatch {
    constructor()
    // private applyBrandingPatch(arg0: ClassNode): boolean;
    process(arg0: FabricLauncher, arg1: (param0: string) => ClassNode, arg2: (param0: ClassNode) => void): void;
}