import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { MeshData } from '../../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { MeshData$SortState } from '../../../../../com/mojang/blaze3d/vertex/MeshData$SortState.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { VisibilitySet } from '../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class SectionCompiler$Results extends Object {
    constructor()
    blockEntities: BlockEntity[];
    renderedLayers: JavaMap<ChunkSectionLayer, MeshData>;
    transparencyState: MeshData$SortState;
    visibilitySet: VisibilitySet;
    release(): void;
}