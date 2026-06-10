import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockEntry } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/BlockEntry.d.ts'
import type { BlockRenderType } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/BlockRenderType.d.ts'
import type { NamespacedId } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { TagEntry } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/TagEntry.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockMaterialMapping extends Object {
    static convertBlockToRenderType(paramarg0: BlockRenderType): ChunkSectionLayer;
    static createBlockStateIdMap(paramarg0: Int2ObjectLinkedOpenHashMap<BlockEntry[]>, paramarg1: Int2ObjectLinkedOpenHashMap<TagEntry[]>): Object2IntMap<BlockState>;
    static createBlockTypeMap(paramarg0: Map<NamespacedId, BlockRenderType>): Map<Block, BlockRenderType>;
    constructor()
}