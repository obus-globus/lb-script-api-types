import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockRenderType } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/BlockRenderType.d.ts'
import type { NamespacedId } from '../../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockMaterialMapping extends Object {
    static convertBlockToRenderType(paramarg0: BlockRenderType): ChunkSectionLayer;
    static createBlockStateIdMap(paramarg0: JavaMap<any, any>, paramarg1: JavaMap<any, any>): JavaMap<any, any>;
    static createBlockTypeMap(paramarg0: JavaMap<NamespacedId, BlockRenderType>): JavaMap<Block, BlockRenderType>;
    constructor()
}