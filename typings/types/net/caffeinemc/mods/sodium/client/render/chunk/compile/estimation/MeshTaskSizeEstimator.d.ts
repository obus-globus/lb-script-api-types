import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { Average1DEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator.d.ts'
import type { MeshResultSize } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshResultSize.d.ts'
import type { MeshResultSize$SectionCategory } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshResultSize$SectionCategory.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export class MeshTaskSizeEstimator extends Average1DEstimator<MeshResultSize$SectionCategory> {
    static NEW_DATA_RATIO: number;
    constructor(arg0: ClientLevel)
    // private seaLevelChunk: number;
    createMap(): { [key in MeshResultSize$SectionCategory]: T };
    estimateSize(arg0: RenderSection): number;
    resultForSection(arg0: RenderSection, arg1: number): MeshResultSize;
}