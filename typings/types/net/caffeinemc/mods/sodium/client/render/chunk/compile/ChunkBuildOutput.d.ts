import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { ChunkSortOutput } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkSortOutput.d.ts'
import type { BuiltSectionInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo.d.ts'
import type { BuiltSectionMeshParts } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionMeshParts.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { TranslucentData } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
export class ChunkBuildOutput extends ChunkSortOutput {
    constructor(arg0: RenderSection, arg1: number, arg2: TranslucentData, arg3: BuiltSectionInfo, arg4: JavaMap<TerrainRenderPass, BuiltSectionMeshParts>, arg5: boolean)
    blockingTask: boolean;
    info: BuiltSectionInfo;
    meshes: JavaMap<TerrainRenderPass, BuiltSectionMeshParts>;
    translucentData: TranslucentData;
    calculateResultSize(): number;
    destroy(): void;
    getMesh(arg0: TerrainRenderPass): BuiltSectionMeshParts;
    // private getMeshSize(): number;
}