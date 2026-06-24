import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { FrameGraphBuilder } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GraphicsResourceAllocator } from '../../../../com/mojang/blaze3d/resource/GraphicsResourceAllocator.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SodiumWorldRenderer } from '../../../../net/caffeinemc/mods/sodium/client/render/SodiumWorldRenderer.d.ts'
import type { ChunkRenderMatrices } from '../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { LevelRendererExtension } from '../../../../net/caffeinemc/mods/sodium/client/world/LevelRendererExtension.d.ts'
import type { LevelRenderContextImpl } from '../../../../net/fabricmc/fabric/impl/client/rendering/level/LevelRenderContextImpl.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { LevelRendererAccessor } from '../../../../net/irisshaders/iris/mixin/LevelRendererAccessor.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { CullingDataCache } from '../../../../net/irisshaders/iris/shadows/CullingDataCache.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { CloudStatus } from '../../../../net/minecraft/client/CloudStatus.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Options } from '../../../../net/minecraft/client/Options.d.ts'
import type { BlockColors } from '../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { CloudRenderer } from '../../../../net/minecraft/client/renderer/CloudRenderer.d.ts'
import type { GameRenderer } from '../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer$FinalizedGizmos } from '../../../../net/minecraft/client/renderer/LevelRenderer$FinalizedGizmos.d.ts'
import type { LevelTargetBundle } from '../../../../net/minecraft/client/renderer/LevelTargetBundle.d.ts'
import type { PostChain } from '../../../../net/minecraft/client/renderer/PostChain.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { SectionOcclusionGraph } from '../../../../net/minecraft/client/renderer/SectionOcclusionGraph.d.ts'
import type { ShaderManager } from '../../../../net/minecraft/client/renderer/ShaderManager.d.ts'
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
import type { EntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { FeatureRenderDispatcher } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { FeatureRenderDispatcher$PreparedFrame } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher$PreparedFrame.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { OptionsRenderState } from '../../../../net/minecraft/client/renderer/state/OptionsRenderState.d.ts'
import type { BlockOutlineRenderState } from '../../../../net/minecraft/client/renderer/state/level/BlockOutlineRenderState.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { LevelRenderState } from '../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { ModelManager } from '../../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { AtlasManager } from '../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Gizmos$TemporaryCollection } from '../../../../net/minecraft/gizmos/Gizmos$TemporaryCollection.d.ts'
import type { SimpleGizmoCollector } from '../../../../net/minecraft/gizmos/SimpleGizmoCollector.d.ts'
import type { SimpleGizmoCollector$GizmoInstance } from '../../../../net/minecraft/gizmos/SimpleGizmoCollector$GizmoInstance.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
import type { CallbackInfo } from '../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export class LevelRenderer extends Object implements AutoCloseable, LevelRendererExtension, FabricResourceReloader, LevelRendererAccessor, CullingDataCache {
    constructor(entityRenderDispatcher: EntityRenderDispatcher, blockEntityRenderDispatcher: BlockEntityRenderDispatcher, modelManager: ModelManager, textureManager: TextureManager, atlasManager: AtlasManager, shaderManager: ShaderManager, gameRenderer: GameRenderer, width: number, height: number)
    // private atlasManager: AtlasManager;
    // private blockEntityRenderDispatcher: BlockEntityRenderDispatcher;
    // private chunkLayerSampler: GpuSampler;
    // private cloudRenderer: CloudRenderer;
    // private disableFrustumCulling: boolean;
    // private entityOutlineTarget: RenderTarget;
    // private fabric$id: Identifier;
    // private featureRenderDispatcher: FeatureRenderDispatcher;
    // private finalizedGizmos: LevelRenderer$FinalizedGizmos;
    // private gameRenderer: GameRenderer;
    // private iris$modelMatrix: Matrix4f;
    // private lastTranslucentSortBlockPos: BlockPos;
    readonly levelRenderState: LevelRenderState;
    // private liquid_bounce$hasCustomOutlineMesh: boolean;
    // private matrices: ChunkRenderMatrices;
    // private modelManager: ModelManager;
    // private nearbyVisibleSections: SectionRenderDispatcher$RenderSection[];
    // private optionsRenderState: OptionsRenderState;
    // private pipeline: WorldRenderingPipeline;
    readonly renderBuffers: RenderBuffers;
    // private renderContext: LevelRenderContextImpl;
    // private renderThreadGizmos: SimpleGizmoCollector;
    // private renderer: SodiumWorldRenderer;
    // private savedLastCameraPitch: number;
    // private savedLastCameraX: number;
    // private savedLastCameraY: number;
    // private savedLastCameraYaw: number;
    // private savedLastCameraZ: number;
    // private savedRenderChunks: Object[];
    // private sectionOcclusionGraph: SectionOcclusionGraph;
    // private sectionRenderDispatcher: SectionRenderDispatcher;
    // private shaderManager: ShaderManager;
    // private skyRenderer: SkyRenderer;
    submitNodeStorage: SubmitNodeStorage;
    // private targets: LevelTargetBundle;
    // private textureManager: TextureManager;
    // private translucencyResortIterationIndex: number;
    // private viewArea: ViewArea;
    // private visibleSections: SectionRenderDispatcher$RenderSection[];
    // private warned: boolean;
    // private weatherEffectRenderer: WeatherEffectRenderer;
    // private worldBorderRenderer: WorldBorderRenderer;
    // private addAlwaysOnTopPass(frame: FrameGraphBuilder, featureFrame: FeatureRenderDispatcher$PreparedFrame, fog: GpuBufferSlice): void;
    // private addCloudsPass(frame: FrameGraphBuilder, cloudStatus: CloudStatus, cameraPosition: Vec3, gameTime: number, partialTicks: number, cloudColor: number, cloudHeight: number, cloudRange: number): void;
    // private addMainPass(frame: FrameGraphBuilder, featureFrame: FeatureRenderDispatcher$PreparedFrame, terrainFog: GpuBufferSlice, levelRenderState: LevelRenderState, profiler: ProfilerFiller, chunkSectionsToRender: ChunkSectionsToRender): void;
    addMainThreadGizmos(mainThreadGizmos: SimpleGizmoCollector$GizmoInstance[]): void;
    // private addSkyPass(frame: FrameGraphBuilder, cameraState: CameraRenderState, skyFog: GpuBufferSlice): void;
    // private addWeatherPass(frame: FrameGraphBuilder, fog: GpuBufferSlice): void;
    blockEntityRenderDispatcher(): BlockEntityRenderDispatcher;
    // private checkPoseStack(poseStack: PoseStack): void;
    clearVisibleSections(): void;
    close(): void;
    cloudRenderer(): CloudRenderer;
    cloudsTarget(): RenderTarget;
    collectPerFrameRenderThreadGizmos(): Gizmos$TemporaryCollection;
    // private compileSections(camera: CameraRenderState): void;
    doEntityOutline(): void;
    endFrame(): void;
    entityOutlineTarget(): RenderTarget;
    entityRenderDispatcher(): EntityRenderDispatcher;
    expectedChunks(): (Object | null)[];
    fabric$getId(): Identifier;
    // private finalizeGizmoCollection(): void;
    getEntityRenderDispatcher(): EntityRenderDispatcher;
    getLevelRenderState(): LevelRenderState;
    getName(): string;
    getRenderBuffers(): RenderBuffers;
    // private getTransparencyChain(): PostChain;
    hasRenderedAllSections(): boolean;
    invalidateCompiledGeometry(level: ClientLevel, options: Options, camera: Camera, blockColors: BlockColors): void;
    // private iris$alwaysRenderSky(arg0: boolean): boolean;
    // private iris$beginBlockOutline(arg0: RenderType): RenderType;
    // private iris$resetDebugRenderStage(arg0: CallbackInfo): void;
    // private iris$setDebugRenderStage(arg0: CallbackInfo): void;
    isSectionCompiledAndVisible(arg0: BlockPos): boolean;
    itemEntityTarget(): RenderTarget;
    nearbyVisibleSections(): SectionRenderDispatcher$RenderSection[];
    particlesTarget(): RenderTarget;
    prepareChunkRenders(arg0: Matrix4fc): ChunkSectionsToRender;
    render(resourceAllocator: GraphicsResourceAllocator, deltaTracker: DeltaTracker, renderOutline: boolean, cameraState: CameraRenderState, modelViewMatrix: Matrix4fc, terrainFog: GpuBufferSlice, fogColor: Vector4f, shouldRenderSky: boolean): void;
    // private repositionCamera(camera: CameraRenderState): void;
    resetLevelRenderData(): void;
    resize(width: number, height: number): void;
    restoreState(): void;
    saveState(): void;
    // private scheduleResort(section: SectionRenderDispatcher$RenderSection, pointOfView: TranslucencyPointOfView, cameraPos: Vec3, blockPosChanged: boolean, isNearby: boolean): void;
    // private scheduleTranslucentSectionResort(cameraPos: Vec3): void;
    sectionOcclusionGraph(): SectionOcclusionGraph;
    sectionRenderDispatcher(): SectionRenderDispatcher;
    setRenderBuffers(arg0: RenderBuffers): void;
    skyRenderer(): SkyRenderer;
    sodium$getMatrices(): ChunkRenderMatrices;
    sodium$getWorldRenderer(): SodiumWorldRenderer;
    sodium$setMatrices(arg0: ChunkRenderMatrices): void;
    // private submitBlockDestroyAnimation(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, levelRenderState: LevelRenderState): void;
    // private submitBlockEntities(poseStack: PoseStack, levelRenderState: LevelRenderState, submitNodeCollector: SubmitNodeCollector): void;
    // private submitBlockOutline(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, levelRenderState: LevelRenderState): void;
    // private submitEntities(poseStack: PoseStack, levelRenderState: LevelRenderState, output: SubmitNodeCollector): void;
    // private submitFeatures(levelRenderState: LevelRenderState, submitNodeCollector: SubmitNodeCollector, renderOutline: boolean): void;
    // private submitHitOutline(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, renderType: RenderType, state: BlockOutlineRenderState, color: number, width: number, afterTerrain: boolean): void;
    // private swap(): void;
    translucentTarget(): RenderTarget;
    viewArea(): ViewArea;
    visibleSections(): SectionRenderDispatcher$RenderSection[];
    weatherEffectRenderer(): WeatherEffectRenderer;
    weatherTarget(): RenderTarget;
    worldBorderRenderer(): WorldBorderRenderer;
}