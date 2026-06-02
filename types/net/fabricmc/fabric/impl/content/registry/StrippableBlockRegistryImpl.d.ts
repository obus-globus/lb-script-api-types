import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StrippableBlockRegistry$StrippingTransformer } from '../../../../../../net/fabricmc/fabric/api/registry/StrippableBlockRegistry$StrippingTransformer.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class StrippableBlockRegistryImpl extends Object {
    static getStrippedBlockState(paramarg0: BlockState): BlockState;
    static getTransformer(paramarg0: Block): StrippableBlockRegistry$StrippingTransformer;
    static register(paramarg0: Block, paramarg1: Block, paramarg2: StrippableBlockRegistry$StrippingTransformer): void;
    constructor()
}