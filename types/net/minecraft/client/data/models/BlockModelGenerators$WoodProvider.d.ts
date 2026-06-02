import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureMapping } from '../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockModelGenerators$WoodProvider extends Object {
    constructor(null_: BlockModelGenerators$WoodProvider, logMapping: TextureMapping)
    // private logMapping: TextureMapping;
    log(block: Block): BlockModelGenerators$WoodProvider;
    logUVLocked(block: Block): BlockModelGenerators$WoodProvider;
    logWithHorizontal(block: Block): BlockModelGenerators$WoodProvider;
    wood(block: Block): BlockModelGenerators$WoodProvider;
}