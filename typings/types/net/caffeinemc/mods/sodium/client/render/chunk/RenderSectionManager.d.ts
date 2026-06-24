import type { ExecutorService } from '../../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkRenderer } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderer.d.ts'
import type { DeferMode } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/DeferMode.d.ts'
import type { RenderSection } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { UniformBufferManager } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/UniformBufferManager.d.ts'
import type { CullTask } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/async/CullTask.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { ChunkBuildOutput } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildOutput.d.ts'
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
import type { DeferredTaskList } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/DeferredTaskList.d.ts'
import type { SortedRenderLists } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortedRenderLists.d.ts'
import type { AsyncCameraTimingControl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/AsyncCameraTimingControl.d.ts'
import type { CullType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/CullType.d.ts'
import type { OcclusionCuller } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller.d.ts'
import type { SectionTree } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/SectionTree.d.ts'
import type { RenderRegionManager } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegionManager.d.ts'
import type { SortBehavior } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior.d.ts'
import type { CameraMovement } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { SortTriggering } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { RemovableMultiForest } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/RemovableMultiForest.d.ts'
import type { Viewport } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { ClonedChunkSectionCache } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ClonedChunkSectionCache.d.ts'
import type { ShadowRenderListAccess } from '../../../../../../../net/irisshaders/iris/mixinterface/ShadowRenderListAccess.d.ts'
import type { Camera } from '../../../../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { MappableRingBuffer } from '../../../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../org/joml/Vector3dc.d.ts'
export class RenderSectionManager extends Object implements ShadowRenderListAccess {
    constructor(arg0: ClientLevel, arg1: number, arg2: SortBehavior)
    // private asyncCullExecutor: ExecutorService;
    // private averageCullDurationNanos: number;
    // private averageFrameDuration: number;
    // private buildResults: ChunkJobResult<BuilderTaskOutput>[];
    readonly builder: ChunkBuilder;
    // private cameraChanged: boolean;
    // private cameraPosition: Vector3dc;
    // private cameraStableSince: number;
    // private cameraTimingControl: AsyncCameraTimingControl;
    readonly chunkRenderer: ChunkRenderer;
    // private cullResults: { [key in CullType]: SectionTree };
    // private deferredTasks: number;
    readonly frame: number;
    // private importantTasks: { [key in DeferMode]: RenderSection[] };
    // private jobDurationEstimator: JobDurationEstimator;
    // private jobUploadDurationEstimator: UploadDurationEstimator;
    // private lastBlockingCollector: ChunkJobCollector;
    // private lastFrameAtTime: number;
    // private lastFrameDuration: number;
    // private level: ClientLevel;
    // private meshTaskSizeEstimator: MeshTaskSizeEstimator;
    // private needsGraphUpdate: boolean;
    // private needsRenderListUpdate: boolean;
    // private nextFrameBlockingTasks: number;
    // private occlusionCuller: OcclusionCuller;
    // private pendingTask: CullTask;
    // private regions: RenderRegionManager;
    // private regularCameraChanged: boolean;
    // private regularNeedsGraphUpdate: boolean;
    // private regularNeedsRenderListUpdate: boolean;
    // private regularRenderLists: SortedRenderLists;
    // private regularTaskLists: DeferredTaskList;
    // private regularTree: SectionTree;
    // private regularUbo: MappableRingBuffer;
    // private regularUboUpdated: number;
    // private renderDistance: number;
    // private renderListStateIsShadow: boolean;
    readonly renderLists: SortedRenderLists;
    // private renderTree: SectionTree;
    // private renderableSectionTree: RemovableMultiForest;
    // private sectionByPosition: { [key: string]: any };
    // private sectionCache: ClonedChunkSectionCache;
    readonly sectionsWithGlobalEntities: RenderSection[];
    // private shadowNeedsRenderListUpdate: boolean;
    // private shadowRenderLists: SortedRenderLists;
    // private shadowScopeActive: boolean;
    // private shadowTaskLists: DeferredTaskList;
    // private shadowTree: SectionTree;
    // private shadowUbo: MappableRingBuffer;
    // private shadowUboUpdated: number;
    // private sortBehavior: SortBehavior;
    // private sortTriggering: SortTriggering;
    // private taskLists: DeferredTaskList;
    // private thisFrameBlockingTasks: number;
    // private applyBuildOutputs(arg0: BuilderTaskOutput[]): RenderSection[];
    beforeSectionUpdates(): void;
    cleanupAndFlip(): void;
    // private collectChunkBuildResults(): BuilderTaskOutput[];
    // private connectNeighborNodes(arg0: RenderSection): void;
    // private consumeCullTaskResults(arg0: boolean): void;
    createRebuildTask(arg0: RenderSection, arg1: number, arg2: boolean): ChunkBuilderMeshingTask;
    createSortTask(arg0: RenderSection, arg1: number): ChunkBuilderSortingTask;
    destroy(): void;
    // private disconnectNeighborNodes(arg0: RenderSection): void;
    finalizeRenderLists(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: boolean): void;
    // private finalizeRenderLists$mixinextras$wrapped$90(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: boolean): void;
    // private findBestTree(arg0: Viewport, arg1: FogParameters): SectionTree;
    getBuilder(): ChunkBuilder;
    getChunkRenderer(): ChunkRenderer;
    getChunksDebugString(): string;
    // private getCullTypeName(): string;
    getDebugStrings(arg0: boolean): string[];
    // private getDeferModeForPendingUpdate(arg0: number): DeferMode;
    // private getEffectiveRenderDistance(arg0: FogParameters): number;
    getFrame(): number;
    // private getRenderDistance(): number;
    getRenderLists(): SortedRenderLists;
    // private getRenderSection(arg0: number, arg1: number, arg2: number): RenderSection;
    // private getSearchDistance(arg0: FogParameters): number;
    // private getSearchDistanceForCullType(arg0: CullType, arg1: FogParameters): number;
    getSectionsWithGlobalEntities(): RenderSection[];
    getTotalSections(): number;
    getVisibleChunkCount(): number;
    // private invalidateRenderLists(): void;
    iris$beginShadowRenderListScope(): void;
    iris$endShadowRenderListScope(): void;
    // private iris$swapToRegularRenderLists(): void;
    // private iris$swapToShadowRenderLists(): void;
    isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    // private isOutOfGraph(arg0: SectionPos): boolean;
    isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
    // private isSectionEmpty(arg0: number, arg1: number, arg2: number): boolean;
    // private isSectionFrustumVisible(arg0: Viewport, arg1: RenderSection): boolean;
    // private isSectionImmediatePresentationCandidate(arg0: Viewport, arg1: RenderSection): boolean;
    markGraphDirty(): void;
    needsUpdate(): boolean;
    notifyChangedCamera(): void;
    onChunkAdded(arg0: number, arg1: number): void;
    onChunkRemoved(arg0: number, arg1: number): void;
    onSectionAdded(arg0: number, arg1: number, arg2: number): void;
    onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
    prepareFrame(arg0: Vector3dc): void;
    prepareRender(): void;
    prepareRenderTrees(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: boolean): void;
    // private processChunkBuildResults(arg0: BuilderTaskOutput[], arg1: Viewport, arg2: UniformBufferManager): number;
    processChunkBuilds(arg0: Viewport, arg1: UniformBufferManager): void;
    processGFNIMovement(arg0: CameraMovement): void;
    // private readRenderListFromTree(arg0: Viewport, arg1: FogParameters): void;
    // private renderOutOfGraph(arg0: Viewport, arg1: FogParameters): void;
    // private scheduleAsyncWork(arg0: Camera, arg1: Viewport, arg2: FogParameters, arg3: boolean): void;
    scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    scheduleSort(arg0: number, arg1: boolean): void;
    // private shouldPrioritizeTask(arg0: RenderSection, arg1: number): boolean;
    // private shouldUseOcclusionCulling(arg0: Camera, arg1: boolean): boolean;
    // private submitDeferredSectionTasks(arg0: ChunkJobCollector, arg1: UploadResourceBudget): void;
    // private submitImportantSectionTasks(arg0: ChunkJobCollector, arg1: UploadResourceBudget, arg2: DeferMode, arg3: Viewport): void;
    // private submitSectionTask(arg0: ChunkJobCollector, arg1: RenderSection, arg2: number, arg3: UploadResourceBudget, arg4: boolean): void;
    // private submitSectionTask(arg0: ChunkJobCollector, arg1: RenderSection, arg2: UploadResourceBudget): void;
    // private submitSectionTasks(arg0: ChunkJobCollector, arg1: ChunkJobCollector, arg2: ChunkJobCollector, arg3: UploadResourceBudget, arg4: Viewport): void;
    tickVisibleRenders(): void;
    updateChunks(arg0: Viewport, arg1: boolean): void;
    // private updateSectionInfo(arg0: RenderSection, arg1: BuiltSectionInfo): number;
    // private updateWithResult(arg0: Viewport, arg1: RenderSection, arg2: ChunkBuildOutput, arg3: RenderSection[]): number;
    // private upgradePendingUpdate(arg0: RenderSection, arg1: number): boolean;
}