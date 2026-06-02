import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface FabricBlock$FabricProperties extends Object{
    blockId(): ResourceKey<Block>;
    blockIdOrThrow(): ResourceKey<Block>;
}