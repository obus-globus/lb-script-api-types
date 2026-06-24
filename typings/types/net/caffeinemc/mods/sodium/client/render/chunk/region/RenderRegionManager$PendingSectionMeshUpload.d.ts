import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PendingUpload } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/PendingUpload.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { BuiltSectionMeshParts } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionMeshParts.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
export class RenderRegionManager$PendingSectionMeshUpload extends Record {
    private constructor(section: RenderSection, relativeBuiltTime: number, meshData: BuiltSectionMeshParts, pass: TerrainRenderPass, vertexUpload: PendingUpload)
    // private meshData: BuiltSectionMeshParts;
    // private pass: TerrainRenderPass;
    // private relativeBuiltTime: number;
    // private section: RenderSection;
    // private vertexUpload: PendingUpload;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    meshData(): BuiltSectionMeshParts;
    pass(): TerrainRenderPass;
    relativeBuiltTime(): number;
    section(): RenderSection;
    toString(): string;
    vertexUpload(): PendingUpload;
}