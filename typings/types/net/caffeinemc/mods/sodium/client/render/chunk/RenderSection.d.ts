import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkJob } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { BuiltSectionInfo } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo.d.ts'
import type { RenderRegion } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { TranslucentData } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class RenderSection extends Object {
    constructor(arg0: RenderRegion, arg1: number, arg2: number, arg3: number)
    adjacentDown: RenderSection;
    adjacentEast: RenderSection;
    readonly adjacentMask: number;
    adjacentNorth: RenderSection;
    adjacentSouth: RenderSection;
    adjacentUp: RenderSection;
    adjacentWest: RenderSection;
    readonly animatedSprites: TextureAtlasSprite[];
    readonly built: boolean;
    readonly chunkX: number;
    readonly chunkY: number;
    readonly chunkZ: number;
    readonly culledBlockEntities: BlockEntity[];
    readonly disposed: boolean;
    readonly fadeTime: number;
    readonly flags: number;
    readonly globalBlockEntities: BlockEntity[];
    readonly incomingDirections: number;
    readonly lastMeshResultSize: number;
    readonly lastSubmittedFrame: number;
    readonly lastUploadFrame: number;
    readonly lastVisibleFrame: number;
    // private lastVisibleFrameShadow: number;
    readonly pendingUpdateSince: number;
    // private pendingUpdateType: number;
    readonly region: RenderRegion;
    readonly runningJob: ChunkJob;
    readonly sectionIndex: number;
    readonly translucentData: TranslucentData;
    readonly visibilityData: number;
    addIncomingDirections(arg0: number): void;
    clearPendingUpdate(): void;
    // private clearRenderState(): boolean;
    delete(): void;
    getAdjacent(arg0: number): RenderSection;
    getAdjacentMask(): number;
    getAnimatedSprites(): TextureAtlasSprite[];
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getChunkX(): number;
    getChunkY(): number;
    getChunkZ(): number;
    getCulledBlockEntities(): BlockEntity[];
    getCurrentVisibility(): number;
    getFlags(): number;
    getGlobalBlockEntities(): BlockEntity[];
    getIncomingDirections(): number;
    getLastMeshResultSize(): number;
    getLastSubmittedFrame(): number;
    getLastUploadFrame(): number;
    getLastVisibleFrame(): number;
    getOriginX(): number;
    getOriginY(): number;
    getOriginZ(): number;
    getPendingUpdate(): number;
    getPendingUpdateSince(): number;
    getPosition(): SectionPos;
    getRegion(): RenderRegion;
    getRunningJob(): ChunkJob;
    getSectionIndex(): number;
    getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
    getSquaredDistance(arg0: BlockPos): number;
    getTranslucentData(): TranslucentData;
    getVisibilityData(): number;
    isBuilt(): boolean;
    isDisposed(): boolean;
    prepareTrigger(arg0: boolean): void;
    setAdjacentNode(arg0: number, arg1: RenderSection): void;
    setFadeTime(arg0: number): void;
    setIncomingDirections(arg0: number): void;
    setInfo(arg0: BuiltSectionInfo): boolean;
    setLastMeshResultSize(arg0: number): void;
    setLastSubmittedFrame(arg0: number): void;
    setLastUploadFrame(arg0: number): void;
    setLastVisibleFrame(arg0: number): void;
    setPendingUpdate(arg0: number, arg1: number): void;
    // private setRenderState(arg0: BuiltSectionInfo): boolean;
    setRunningJob(arg0: ChunkJob): void;
    setTranslucentData(arg0: TranslucentData): void;
    toString(): string;
}