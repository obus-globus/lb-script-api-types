import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BakedChunkModelBuilder } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers/BakedChunkModelBuilder.d.ts'
import type { ChunkModelBuilder } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers/ChunkModelBuilder.d.ts'
import type { BuiltSectionInfo$Builder } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo$Builder.d.ts'
import type { BuiltSectionMeshParts } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionMeshParts.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { Material } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { ChunkVertexType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class ChunkBuildBuffers extends Object {
    static makeVertexSegments(): number[];
    constructor(arg0: ChunkVertexType)
    // private builders: JavaMap<TerrainRenderPass, BakedChunkModelBuilder>;
    // private vertexType: ChunkVertexType;
    createMesh(arg0: TerrainRenderPass, arg1: number, arg2: boolean, arg3: boolean): BuiltSectionMeshParts;
    createModifiedTranslucentMesh(arg0: (Object | null)[]): BuiltSectionMeshParts;
    destroy(): void;
    get(arg0: TerrainRenderPass): ChunkModelBuilder;
    get(arg0: Material): ChunkModelBuilder;
    init(arg0: BuiltSectionInfo$Builder, arg1: number): void;
}