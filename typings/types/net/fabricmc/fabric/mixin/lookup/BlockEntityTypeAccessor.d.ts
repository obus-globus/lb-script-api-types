import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface BlockEntityTypeAccessor extends Object{
    getBlocks(): Block[];
}