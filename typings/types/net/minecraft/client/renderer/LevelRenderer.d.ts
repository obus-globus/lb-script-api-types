import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { FrameGraphBuilder } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GraphicsResourceAllocator } from '../../../../com/mojang/blaze3d/resource/GraphicsResourceAllocator.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SodiumWorldRenderer } from '../../../../net/caffeinemc/mods/sodium/client/render/SodiumWorldRenderer.d.ts'
import type { ChunkRenderMatrices } from '../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { LevelRendererExtension } from '../../../../net/caffeinemc/mods/sodium/client/world/LevelRendererExtension.d.ts'
import type { LevelRendererExtensions } from '../../../../net/fabricmc/fabric/impl/client/rendering/LevelRendererExtensions.d.ts'
import type { LevelExtractionContextImpl } from '../../../../net/fabricmc/fabric/impl/client/rendering/level/LevelExtractionContextImpl.d.ts'
import type { LevelRenderContextImpl } from '../../../../net/fabricmc/fabric/impl/client/rendering/level/LevelRenderContextImpl.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { LevelRendererAccessor } from '../../../../net/irisshaders/iris/mixin/LevelRendererAccessor.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { CullingDataCache } from '../../../../net/irisshaders/iris/shadows/CullingDataCache.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { CloudStatus } from '../../../../net/minecraft/client/CloudStatus.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { CloudRenderer } from '../../../../net/minecraft/client/renderer/CloudRenderer.d.ts'
import type { LevelRenderer$BrightnessGetter } from '../../../../net/minecraft/client/renderer/LevelRenderer$BrightnessGetter.d.ts'
import type { LevelRenderer$FinalizedGizmos } from '../../../../net/minecraft/client/renderer/LevelRenderer$FinalizedGizmos.d.ts'
import type { LevelTargetBundle } from '../../../../net/minecraft/client/renderer/LevelTargetBundle.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { PostChain } from '../../../../net/minecraft/client/renderer/PostChain.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { SectionOcclusionGraph } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph.d.ts'
import type { SkyRenderer } from '../../../../net/minecraft/client/renderer/SkyRenderer.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { ViewArea } from '../../../../net/minecraft/client/renderer/ViewArea.d.ts'
import type { WeatherEffectRenderer } from '../../../../net/minecraft/client/renderer/WeatherEffectRenderer.d.ts'
import type { WorldBorderRenderer } from '../../../../net/minecraft/client/renderer/WorldBorderRenderer.d.ts'
import type { BlockEntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderDispatcher.d.ts'
import type { ChunkSectionsToRender } from '../../../../net/minecraft/client/renderer/chunk/ChunkSectionsToRender.d.ts'
import type { SectionRenderDispatcher } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { TranslucencyPointOfView } from '../../../../net/minecraft/client/renderer/chunk/TranslucencyPointOfView.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer } from '../../../../net/minecraft/client/renderer/debug/DebugRenderer.d.ts'
import type { GameTestBlockHighlightRenderer } from '../../../../net/minecraft/client/renderer/debug/GameTestBlockHighlightRenderer.d.ts'
import type { EntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { FeatureRenderDispatcher } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { GameRenderState } from '../../../../net/minecraft/client/renderer/state/GameRenderState.d.ts'
import type { OptionsRenderState } from '../../../../net/minecraft/client/renderer/state/OptionsRenderState.d.ts'
import type { BlockOutlineRenderState } from '../../../../net/minecraft/client/renderer/state/level/BlockOutlineRenderState.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { LevelRenderState } from '../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Gizmos$TemporaryCollection } from '../../../../net/minecraft/gizmos/Gizmos$TemporaryCollection.d.ts'
import type { SimpleGizmoCollector } from '../../../../net/minecraft/gizmos/SimpleGizmoCollector.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { BlockDestructionProgress } from '../../../../net/minecraft/server/level/BlockDestructionProgress.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockAndLightGetter } from '../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
import type { CallbackInfo } from '../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export class LevelRenderer extends Object implements AutoCloseable, LevelRendererExtension, LevelRendererExtensions, FabricResourceReloader, LevelRendererAccessor, CullingDataCache, ResourceManagerReloadListener {
    static HALF_SECTION_SIZE: number;
    static NEARBY_SECTION_DISTANCE_IN_BLOCKS: number;
    static SECTION_SIZE: number;
    static getLightCoords(parambrightnessGetter: (param0: BlockAndLightGetter, param1: BlockPos) => number, paramlevel: BlockAndLightGetter, paramstate: BlockState, parampos: BlockPos): number;
    static getLightCoords(paramlevel: BlockAndLightGetter, parampos: BlockPos): number;
    static offsetFrustum(paramfrustum: Frustum): Frustum;
    constructor(minecraft: Minecraft, entityRenderDispatcher: EntityRenderDispatcher, blockEntityRenderDispatcher: BlockEntityRenderDispatcher, renderBuffers: RenderBuffers, gameRenderState: GameRenderState, featureRenderDispatcher: FeatureRenderDispatcher)
    // private blockEntityRenderDispatcher: BlockEntityRenderDispatcher;
    // private chunkLayerSampler: GpuSampler;
    readonly cloudRenderer: CloudRenderer;
    // private collectedGizmos: SimpleGizmoCollector;
    debugRenderer: DebugRenderer;
    // private destroyingBlocks: Int2ObjectMap<BlockDestructionProgress>;
    readonly destructionProgress: Long2ObjectMap<BlockDestructionProgress[]>;
    // private disableFrustumCulling: boolean;
    // private entityOutlineTarget: RenderTarget;
    readonly entityRenderDispatcher: EntityRenderDispatcher;
    // private extractionContext: LevelExtractionContextImpl;
    // private fabric$id: Identifier;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private finalizedGizmos: LevelRenderer$FinalizedGizmos;
    gameTestBlockHighlightRenderer: GameTestBlockHighlightRenderer;
    // private lastCameraSectionX: number;
    // private lastCameraSectionY: number;
    // private lastCameraSectionZ: number;
    // private lastSmartCull: boolean;
    // private lastTranslucentSortBlockPos: BlockPos;
    readonly lastViewDistance: number;
    readonly level: ClientLevel;
    readonly levelRenderState: LevelRenderState;
    // private matrices: ChunkRenderMatrices;
    // private minecraft: Minecraft;
    // private nearbyVisibleSections: SectionRenderDispatcher$RenderSection[];
    // private optionsRenderState: OptionsRenderState;
    // private pipeline: WorldRenderingPipeline;
    // private prevCamRotX: number;
    // private prevCamRotY: number;
    // private prevCamX: number;
    // private prevCamY: number;
    // private prevCamZ: number;
    // private random: RandomSource;
    readonly renderBuffers: RenderBuffers;
    // private renderContext: LevelRenderContextImpl;
    // private renderer: SodiumWorldRenderer;
    // private savedLastCameraPitch: number;
    // private savedLastCameraX: number;
    // private savedLastCameraY: number;
    // private savedLastCameraYaw: number;
    // private savedLastCameraZ: number;
    // private savedRenderChunks: Object[];
    readonly sectionOcclusionGraph: SectionOcclusionGraph;
    readonly sectionRenderDispatcher: SectionRenderDispatcher;
    // private skyRenderer: SkyRenderer;
    // private submitNodeStorage: SubmitNodeStorage;
    // private targets: LevelTargetBundle;
    // private ticks: number;
    // private translucencyResortIterationIndex: number;
    // private viewArea: ViewArea;
    readonly visibleSections: SectionRenderDispatcher$RenderSection[];
    // private warned: boolean;
    // private weatherEffectRenderer: WeatherEffectRenderer;
    // private worldBorderRenderer: WorldBorderRenderer;
    // private addCloudsPass(frame: FrameGraphBuilder, cloudStatus: CloudStatus, cameraPosition: Vec3, gameTime: number, partialTicks: number, cloudColor: number, cloudHeight: number, cloudRange: number): void;
    // private addLateDebugPass(frame: FrameGraphBuilder, camera: CameraRenderState, fog: GpuBufferSlice, modelViewMatrix: Matrix4fc): void;
    // private addMainPass(frame: FrameGraphBuilder, frustum: Frustum, modelViewMatrix: Matrix4fc, terrainFog: GpuBufferSlice, renderOutline: boolean, levelRenderState: LevelRenderState, deltaTracker: DeltaTracker, profiler: ProfilerFiller, chunkSectionsToRender: ChunkSectionsToRender): void;
    addRecentlyCompiledSection(section: SectionRenderDispatcher$RenderSection): void;
    // private addSkyPass(frame: FrameGraphBuilder, cameraState: CameraRenderState, skyFog: GpuBufferSlice): void;
    // private addWeatherPass(frame: FrameGraphBuilder, fog: GpuBufferSlice): void;
    allChanged(): void;
    // private applyFrustum(frustum: Frustum): void;
    blockChanged(level: BlockGetter, pos: BlockPos, old: BlockState, current: BlockState, updateFlags: number): void;
    // private checkPoseStack(poseStack: PoseStack): void;
    // private clearVisibleSections(): void;
    close(): void;
    collectPerFrameGizmos(): Gizmos$TemporaryCollection;
    // private compileSections(camera: Camera): void;
    countRenderedSections(): number;
    // private cullTerrain(arg0: Camera, arg1: Frustum, arg2: boolean): void;
    destroyBlockProgress(id: number, pos: BlockPos, progress: number): void;
    doEntityOutline(): void;
    endFrame(): void;
    entityOutlineTarget(): RenderTarget;
    // private extractBlockDestroyAnimation(camera: Camera, levelRenderState: LevelRenderState): void;
    // private extractBlockOutline(camera: Camera, levelRenderState: LevelRenderState): void;
    // private extractEntity(entity: Entity, partialTickTime: number): EntityRenderState;
    extractLevel(deltaTracker: DeltaTracker, camera: Camera, deltaPartialTick: number): void;
    // private extractVisibleBlockEntities(camera: Camera, deltaPartialTick: number, levelRenderState: LevelRenderState): void;
    // private extractVisibleEntities(camera: Camera, frustum: Frustum, deltaTracker: DeltaTracker, output: LevelRenderState): void;
    fabric$getId(): Identifier;
    fabric_prepareLevelExtractionContext(arg0: DeltaTracker): void;
    // private finalizeGizmoCollection(): void;
    getCloudRenderer(): CloudRenderer;
    getCloudsTarget(): RenderTarget;
    getEntityStatistics(): string;
    getItemEntityTarget(): RenderTarget;
    getLastViewDistance(): number;
    getName(): string;
    getParticlesTarget(): RenderTarget;
    getSectionOcclusionGraph(): SectionOcclusionGraph;
    getSectionRenderDispatcher(): SectionRenderDispatcher;
    getSectionStatistics(): string;
    getTotalSections(): number;
    getTranslucentTarget(): RenderTarget;
    // private getTransparencyChain(): PostChain;
    getVisibleSections(): SectionRenderDispatcher$RenderSection[];
    getWeatherTarget(): RenderTarget;
    hasRenderedAllSections(): boolean;
    initOutline(): void;
    // private iris$alwaysRenderSky(arg0: boolean): boolean;
    // private iris$disableFabulousGraphics(): void;
    // private iris$resetDebugRenderStage(arg0: CallbackInfo): void;
    // private iris$setDebugRenderStage(arg0: CallbackInfo): void;
    isSectionCompiledAndVisible(arg0: BlockPos): boolean;
    needsUpdate(): void;
    onChunkReadyToRender(pos: ChunkPos): void;
    onResourceManagerReload(resourceManager: ResourceManager): void;
    onSectionBecomingNonEmpty(sectionNode: number): void;
    prepareChunkRenders(arg0: Matrix4fc): ChunkSectionsToRender;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    // private removeBlockBreakingProgress(): void;
    // private removeProgress(block: BlockDestructionProgress): void;
    // private renderBlockOutline(bufferSource: MultiBufferSource$BufferSource, poseStack: PoseStack, onlyTranslucentBlocks: boolean, levelRenderState: LevelRenderState): void;
    // private renderHitOutline(poseStack: PoseStack, builder: VertexConsumer, camX: number, camY: number, camZ: number, state: BlockOutlineRenderState, color: number, width: number): void;
    renderLevel(resourceAllocator: GraphicsResourceAllocator, deltaTracker: DeltaTracker, renderOutline: boolean, cameraState: CameraRenderState, modelViewMatrix: Matrix4fc, terrainFog: GpuBufferSlice, fogColor: Vector4f, shouldRenderSky: boolean, chunkSectionsToRender: ChunkSectionsToRender): void;
    resetSampler(): void;
    resize(width: number, height: number): void;
    restoreState(): void;
    saveState(): void;
    // private scheduleResort(section: SectionRenderDispatcher$RenderSection, pointOfView: TranslucencyPointOfView, cameraPos: Vec3, blockPosChanged: boolean, isNearby: boolean): void;
    // private scheduleTranslucentSectionResort(cameraPos: Vec3): void;
    // private setBlockDirty(arg0: BlockPos, arg1: boolean): void;
    setBlockDirty(pos: BlockPos, oldState: BlockState, newState: BlockState): void;
    setBlocksDirty(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    setLevel(level: ClientLevel): void;
    setSectionDirty(sectionX: number, sectionY: number, sectionZ: number): void;
    // private setSectionDirty(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
    setSectionRangeDirty(minSectionX: number, minSectionY: number, minSectionZ: number, maxSectionX: number, maxSectionY: number, maxSectionZ: number): void;
    shouldShowEntityOutlines(): boolean;
    sodium$getMatrices(): ChunkRenderMatrices;
    sodium$getWorldRenderer(): SodiumWorldRenderer;
    sodium$setMatrices(arg0: ChunkRenderMatrices): void;
    // private submitBlockDestroyAnimation(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, levelRenderState: LevelRenderState): void;
    // private submitBlockEntities(poseStack: PoseStack, levelRenderState: LevelRenderState, submitNodeStorage: SubmitNodeStorage): void;
    // private submitEntities(poseStack: PoseStack, levelRenderState: LevelRenderState, output: SubmitNodeCollector): void;
    // private swap(): void;
    tick(camera: Camera): void;
    update(camera: Camera): void;
}