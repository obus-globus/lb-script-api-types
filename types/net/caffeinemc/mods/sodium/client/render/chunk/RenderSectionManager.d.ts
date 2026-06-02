import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { ChunkRenderer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderer.d.ts'
import type { RenderSection } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { TaskQueueType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/TaskQueueType.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { JobDurationEstimator } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/JobDurationEstimator.d.ts'
import type { MeshTaskSizeEstimator } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshTaskSizeEstimator.d.ts'
import type { UploadDurationEstimator } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/UploadDurationEstimator.d.ts'
import type { UploadResourceBudget } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/UploadResourceBudget.d.ts'
import type { ChunkBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkBuilder.d.ts'
import type { ChunkJobCollector } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobCollector.d.ts'
import type { ChunkJobResult } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobResult.d.ts'
import type { ChunkBuilderMeshingTask } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderMeshingTask.d.ts'
import type { ChunkBuilderSortingTask } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderSortingTask.d.ts'
import type { BuiltSectionInfo } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/data/BuiltSectionInfo.d.ts'
import type { SectionCollector } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SectionCollector.d.ts'
import type { SortedRenderLists } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortedRenderLists.d.ts'
import type { OcclusionCuller } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller.d.ts'
import type { RenderRegionManager } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegionManager.d.ts'
import type { TerrainRenderPass } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { SortBehavior } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior.d.ts'
import type { CameraMovement } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { SortTriggering } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { RemovableMultiForest } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/RemovableMultiForest.d.ts'
import type { Viewport } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { ClonedChunkSectionCache } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ClonedChunkSectionCache.d.ts'
import type { Camera } from '../../../../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../org/joml/Vector3dc.d.ts'
export class RenderSectionManager extends Object {
    constructor(arg0: ClientLevel, arg1: number, arg2: SortBehavior, arg3: CommandList)
    // private averageFrameDuration: number;
    // private buildResults: ChunkJobResult<BuilderTaskOutput>[];
    readonly builder: ChunkBuilder;
    // private cameraPosition: Vector3dc;
    // private chunkRenderer: ChunkRenderer;
    // private deferredTasks: number;
    // private frame: number;
    // private jobDurationEstimator: JobDurationEstimator;
    // private jobUploadDurationEstimator: UploadDurationEstimator;
    // private lastBlockingCollector: ChunkJobCollector;
    // private lastFrameAtTime: number;
    // private lastFrameDuration: number;
    // private lastSectionCollector: SectionCollector;
    // private lastUpdatedFrame: number;
    // private lastUpdatedFrameShadow: number;
    // private level: ClientLevel;
    // private meshTaskSizeEstimator: MeshTaskSizeEstimator;
    // private needsGraphUpdate: boolean;
    // private nextFrameBlockingTasks: number;
    // private occlusionCuller: OcclusionCuller;
    // private regions: RenderRegionManager;
    // private renderDistance: number;
    // private renderListStateIsShadow: boolean;
    readonly renderLists: SortedRenderLists;
    // private renderableSectionTree: RemovableMultiForest;
    // private sectionByPosition: Long2ReferenceMap<RenderSection>;
    // private sectionCache: ClonedChunkSectionCache;
    // private sectionCollector: SectionCollector;
    readonly sectionsWithGlobalEntities: RenderSection[];
    // private shadowNeedsRenderListUpdate: boolean;
    // private shadowRenderLists: SortedRenderLists;
    // private shadowTaskLists: Map<Object | null, Object | null>;
    // private sortBehavior: SortBehavior;
    // private sortTriggering: SortTriggering;
    // private taskLists: { [key in TaskQueueType]: RenderSection[] };
    // private thisFrameBlockingTasks: number;
    beforeSectionUpdates(): void;
    cleanupAndFlip(): void;
    // private collectChunkBuildResults(): BuilderTaskOutput[];
    // private connectNeighborNodes(arg0: RenderSection): void;
    createRebuildTask(arg0: RenderSection, arg1: number): ChunkBuilderMeshingTask;
    createSortTask(arg0: RenderSection, arg1: number): ChunkBuilderSortingTask;
    // private createTerrainRenderList(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: number, arg4: boolean): boolean;
    // private createTerrainRenderList$mixinextras$wrapped$68(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: number, arg4: boolean): boolean;
    destroy(): void;
    // private disconnectNeighborNodes(arg0: RenderSection): void;
    finalizeRenderLists(arg0: Viewport): void;
    getBuilder(): ChunkBuilder;
    getDebugStrings(arg0: boolean): E[];
    // private getEffectiveRenderDistance(arg0: FogParameters): number;
    // private getRenderDistance(): number;
    getRenderLists(): SortedRenderLists;
    // private getRenderSection(arg0: number, arg1: number, arg2: number): RenderSection;
    // private getSearchDistance(arg0: FogParameters): number;
    getSectionsWithGlobalEntities(): E[];
    getTotalSections(): number;
    getVisibleChunkCount(): number;
    // private isOutOfGraph(arg0: SectionPos): boolean;
    isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
    // private isSectionImmediatePresentationCandidate(arg0: RenderSection): boolean;
    isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
    markGraphDirty(): void;
    needsUpdate(): boolean;
    onChunkAdded(arg0: number, arg1: number): void;
    onChunkRemoved(arg0: number, arg1: number): void;
    onSectionAdded(arg0: number, arg1: number, arg2: number): void;
    onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
    prepareFrame(arg0: Vector3dc): void;
    // private processChunkBuildResults(arg0: BuilderTaskOutput[]): boolean;
    processGFNIMovement(arg0: CameraMovement): void;
    renderLayer(arg0: ChunkRenderMatrices, arg1: TerrainRenderPass, arg2: number, arg3: number, arg4: number, arg5: FogParameters, arg6: GpuSampler): void;
    // private resetRenderLists(): void;
    scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    scheduleSort(arg0: number, arg1: boolean): void;
    // private sectionVisible(arg0: RenderSection): boolean;
    // private shouldPrioritizeTask(arg0: RenderSection, arg1: number): boolean;
    // private shouldUseOcclusionCulling(arg0: Camera, arg1: boolean): boolean;
    // private submitSectionTask(arg0: ChunkJobCollector, arg1: RenderSection, arg2: number, arg3: UploadResourceBudget, arg4: boolean): void;
    // private submitSectionTasks(arg0: ChunkJobCollector, arg1: UploadResourceBudget, arg2: TaskQueueType): void;
    // private submitSectionTasks(arg0: ChunkJobCollector, arg1: ChunkJobCollector, arg2: ChunkJobCollector, arg3: UploadResourceBudget): void;
    tickVisibleRenders(): void;
    update(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: boolean): void;
    updateChunks(arg0: boolean): void;
    // private updateSectionInfo(arg0: RenderSection, arg1: BuiltSectionInfo): boolean;
    // private upgradePendingUpdate(arg0: RenderSection, arg1: number): boolean;
    uploadChunks(): void;
}