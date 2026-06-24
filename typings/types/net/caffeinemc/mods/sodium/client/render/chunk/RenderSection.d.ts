import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { ChunkBuildOutput } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildOutput.d.ts'
import type { ChunkSortOutput } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkSortOutput.d.ts'
import type { ChunkJob } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { BuiltSectionInfo } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo.d.ts'
import type { RenderRegion } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { TranslucentData } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { CallbackInfo } from '../../../../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
import type { CallbackInfoReturnable } from '../../../../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.d.ts'
export class RenderSection extends Object {
    constructor(arg0: RenderRegion, arg1: number, arg2: number, arg3: number)
    adjacentDown: RenderSection;
    adjacentEast: RenderSection;
    readonly adjacentMask: number;
    adjacentNorth: RenderSection;
    adjacentSouth: RenderSection;
    adjacentUp: RenderSection;
    adjacentWest: RenderSection;
    // private allowedAngles: number;
    readonly chunkX: number;
    readonly chunkY: number;
    readonly chunkZ: number;
    // private consumeFade: boolean;
    readonly disposed: boolean;
    // private frameOfBuildSubmit: number;
    // private frameOfSortSubmit: number;
    readonly incomingDirectionsLocal: number;
    readonly incomingDirectionsRegular: number;
    readonly incomingDirectionsWide: number;
    readonly lastMeshResultSize: number;
    // private lastVisibleFrameShadow: number;
    // private pendingBuildOutput: ChunkBuildOutput;
    // private pendingDynamicSortOutput: ChunkSortOutput;
    readonly pendingUpdateSince: number;
    // private pendingUpdateType: number;
    readonly region: RenderRegion;
    // private runningJobs: ChunkJob[];
    readonly searchToken: number;
    readonly sectionIndex: number;
    readonly translucentData: TranslucentData;
    readonly visibilityData: number[];
    addBuildOutput(arg0: BuilderTaskOutput): boolean;
    // private addDynamicSortOutput(arg0: ChunkSortOutput): void;
    addIncomingDirectionsLocal(arg0: number): void;
    addIncomingDirectionsRegular(arg0: number): void;
    addIncomingDirectionsWide(arg0: number): void;
    // private addMeshBuildOutput(arg0: ChunkBuildOutput): void;
    addRunningJob(arg0: ChunkJob): void;
    blockLocalIncoming(): void;
    clearPendingUpdate(): void;
    // private clearRenderState(): number;
    clearRunningJob(arg0: ChunkJob): void;
    consumeFade(): boolean;
    delete(): void;
    getAdjacent(arg0: number): RenderSection;
    getAdjacentMask(): number;
    getCenterX(): number;
    getCenterY(): number;
    getCenterZ(): number;
    getChunkX(): number;
    getChunkY(): number;
    getChunkZ(): number;
    getIncomingDirectionsLocal(): number;
    getIncomingDirectionsRegular(): number;
    getIncomingDirectionsWide(): number;
    getLastMeshResultSize(): number;
    // private getLastVisibleFrameShadow(arg0: CallbackInfoReturnable<Object>): void;
    getOriginX(): number;
    getOriginY(): number;
    getOriginZ(): number;
    getPendingUpdate(): number;
    getPendingUpdateSince(): number;
    getPosition(): SectionPos;
    getRegion(): RenderRegion;
    getSearchToken(): number;
    getSectionIndex(): number;
    getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
    getTranslucentData(): TranslucentData;
    getVisibilityData(): number[];
    intersectSlopes(arg0: SectionPos, arg1: RenderSection, arg2: number): boolean;
    isBuilt(): boolean;
    isDisposed(): boolean;
    needsRender(): boolean;
    prepareTrigger(arg0: boolean): void;
    resetOnFirstVisit(arg0: number): void;
    retrievePendingBuildOutput(): ChunkBuildOutput;
    retrievePendingDynamicSortOutput(arg0: ChunkBuildOutput): ChunkSortOutput;
    setAdjacentNode(arg0: number, arg1: RenderSection): void;
    setInfo(arg0: BuiltSectionInfo): number;
    setLastMeshResultSize(arg0: number): void;
    // private setLastVisibleFrameShadow(arg0: number, arg1: CallbackInfo): void;
    setOriginAngles(): void;
    setPendingUpdate(arg0: number, arg1: number): void;
    // private setRenderState(arg0: BuiltSectionInfo): number;
    setTranslucentData(arg0: TranslucentData): void;
    toString(): string;
}