import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SpeleothemUtils extends Object {
    static isBase(paramstate: BlockState, parambaseBlock: Block, paramreplaceableBlocks: Holder<Block>[]): boolean;
    static isBaseOrLava(paramstate: BlockState, parambaseBlock: Block, paramreplaceableBlocks: Holder<Block>[]): boolean;
    static isEmptyOrWater(paramstate: BlockState): boolean;
    static isEmptyOrWaterOrLava(paramstate: BlockState): boolean;
    static isNeitherEmptyNorWater(paramstate: BlockState): boolean;
    constructor()
}