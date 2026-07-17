import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/StagingBuffer.d.ts'
import type { MultiDrawBatch } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/batch/MultiDrawBatch.d.ts'
import type { IntPool } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/IntPool.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { BuiltSectionInfo } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo.d.ts'
import type { SectionRenderDataStorage } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/SectionRenderDataStorage.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
import type { RenderRegion$DeviceResources } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion$DeviceResources.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ShadowRenderRegion } from '../../../../../../../../net/irisshaders/iris/mixinterface/ShadowRenderRegion.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
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
    readonly animatedSprites: TextureAtlasSprite[][];
    // private cachedBatches: JavaMap<TerrainRenderPass, MultiDrawBatch>;
    readonly creationTime: number;
    readonly culledBlockEntities: BlockEntity[][];
    readonly globalBlockEntities: BlockEntity[][];
    // private iris$shadowRenderListActive: boolean;
    // private regularCachedBatches: JavaMap<Object | null, Object | null>;
    // private regularRenderList: ChunkRenderList;
    readonly renderList: ChunkRenderList;
    readonly resources: RenderRegion$DeviceResources;
    // private sectionCount: number;
    readonly sectionFlags: number[];
    // private sectionRenderData: JavaMap<TerrainRenderPass, SectionRenderDataStorage>;
    // private sections: RenderSection[];
    // private shadowCachedBatches: JavaMap<Object | null, Object | null>;
    // private shadowRenderList: ChunkRenderList;
    // private stagingBuffer: StagingBuffer;
    // private uniqueId: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    addSection(arg0: RenderSection): void;
    clearAllCachedBatches(): void;
    clearCachedBatchFor(arg0: TerrainRenderPass): void;
    clearSectionRenderState(arg0: number): void;
    createResources(): RenderRegion$DeviceResources;
    createStorage(arg0: TerrainRenderPass): SectionRenderDataStorage;
    delete(): void;
    // private ensureRenderList(): void;
    getAnimatedSprites(arg0: number): TextureAtlasSprite[];
    getCachedBatch(arg0: TerrainRenderPass): MultiDrawBatch;
    getChunkX(): number;
    getChunkY(): number;
    getChunkZ(): number;
    getCreationTime(): number;
    getCulledBlockEntities(arg0: number): BlockEntity[];
    getFillFractionInv(): number;
    getGlobalBlockEntities(arg0: number): BlockEntity[];
    getId(): number;
    getOrAcquireId(arg0: IntPool): number;
    getOriginX(): number;
    getOriginY(): number;
    getOriginZ(): number;
    getRenderList(): ChunkRenderList;
    getResources(): RenderRegion$DeviceResources;
    getSectionFlags(arg0: number): number;
    getStorage(arg0: TerrainRenderPass): SectionRenderDataStorage;
    getX(): number;
    getY(): number;
    getZ(): number;
    iris$forceClearAllBatches(): void;
    isEmpty(): boolean;
    onBufferResized(): void;
    onIndexBufferResized(): void;
    removeSection(arg0: RenderSection): void;
    sectionNeedsRender(arg0: number): boolean;
    setSectionRenderState(arg0: number, arg1: BuiltSectionInfo): void;
    swapToRegularRenderList(): void;
    swapToShadowRenderList(): void;
    update(): void;
}