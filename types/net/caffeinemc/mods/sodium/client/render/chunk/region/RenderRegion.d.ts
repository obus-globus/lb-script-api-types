import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/StagingBuffer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { MultiDrawBatch } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/MultiDrawBatch.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { SectionRenderDataStorage } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/SectionRenderDataStorage.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
import type { RenderRegion$DeviceResources } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion$DeviceResources.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ShadowRenderRegion } from '../../../../../../../../net/irisshaders/iris/mixinterface/ShadowRenderRegion.d.ts'
export class RenderRegion extends Object implements ShadowRenderRegion {
    static REGION_HEIGHT: number;
    static REGION_HEIGHT_M: number;
    static REGION_HEIGHT_SH: number;
    static REGION_LENGTH: number;
    static REGION_LENGTH_M: number;
    static REGION_LENGTH_SH: number;
    static REGION_SIZE: number;
    static REGION_WIDTH: number;
    static REGION_WIDTH_M: number;
    static REGION_WIDTH_SH: number;
    static SECTION_BUFFER_ESTIMATE: number;
    static SECTION_INDEX_COUNT_ESTIMATE: number;
    static SECTION_VERTEX_COUNT_ESTIMATE: number;
    static key(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: StagingBuffer)
    // private cachedBatches: Map<TerrainRenderPass, MultiDrawBatch>;
    readonly creationTime: number;
    // private regularCachedBatches: Map<Object | null, Object | null>;
    // private regularRenderList: ChunkRenderList;
    readonly renderList: ChunkRenderList;
    readonly resources: RenderRegion$DeviceResources;
    // private sectionCount: number;
    // private sectionRenderData: Map<TerrainRenderPass, SectionRenderDataStorage>;
    // private sections: RenderSection[];
    // private shadowCachedBatches: Map<Object | null, Object | null>;
    // private shadowRenderList: ChunkRenderList;
    // private stagingBuffer: StagingBuffer;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    addSection(arg0: RenderSection): void;
    clearAllCachedBatches(): void;
    clearCachedBatchFor(arg0: TerrainRenderPass): void;
    createResources(arg0: CommandList): RenderRegion$DeviceResources;
    createStorage(arg0: TerrainRenderPass): SectionRenderDataStorage;
    delete(arg0: CommandList): void;
    // private ensureRenderList(): void;
    getCachedBatch(arg0: TerrainRenderPass): MultiDrawBatch;
    getChunkX(): number;
    getChunkY(): number;
    getChunkZ(): number;
    getCreationTime(): number;
    getFillFractionInv(): number;
    getOriginX(): number;
    getOriginY(): number;
    getOriginZ(): number;
    getRenderList(): ChunkRenderList;
    getResources(): RenderRegion$DeviceResources;
    getSection(arg0: number): RenderSection;
    getStorage(arg0: TerrainRenderPass): SectionRenderDataStorage;
    getX(): number;
    getY(): number;
    getZ(): number;
    iris$forceClearAllBatches(): void;
    isEmpty(): boolean;
    refreshIndexedTesselation(arg0: CommandList): void;
    refreshTesselation(arg0: CommandList): void;
    removeSection(arg0: RenderSection): void;
    swapToRegularRenderList(): void;
    swapToShadowRenderList(): void;
    update(arg0: CommandList): void;
}