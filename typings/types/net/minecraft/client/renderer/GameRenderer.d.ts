import type { Lighting } from '../../../../com/mojang/blaze3d/platform/Lighting.d.ts'
import type { CrossFrameResourcePool } from '../../../../com/mojang/blaze3d/resource/CrossFrameResourcePool.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FogParameters } from '../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { GameRendererStorage } from '../../../../net/caffeinemc/mods/sodium/client/util/GameRendererStorage.d.ts'
import type { GameRendererAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/render/frustum/GameRendererAccessor.d.ts'
import type { GameRendererAccessor as GameRendererAccessor_2 } from '../../../../net/irisshaders/iris/mixin/GameRendererAccessor.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiRenderer } from '../../../../net/minecraft/client/gui/render/GuiRenderer.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { GlobalSettingsUniform } from '../../../../net/minecraft/client/renderer/GlobalSettingsUniform.d.ts'
import type { ItemInHandRenderer } from '../../../../net/minecraft/client/renderer/ItemInHandRenderer.d.ts'
import type { Lightmap } from '../../../../net/minecraft/client/renderer/Lightmap.d.ts'
import type { LightmapRenderStateExtractor } from '../../../../net/minecraft/client/renderer/LightmapRenderStateExtractor.d.ts'
import type { Panorama } from '../../../../net/minecraft/client/renderer/Panorama.d.ts'
import type { Projection } from '../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { RenderBuffers } from '../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { ScreenEffectRenderer } from '../../../../net/minecraft/client/renderer/ScreenEffectRenderer.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { UiLightmap } from '../../../../net/minecraft/client/renderer/UiLightmap.d.ts'
import type { FeatureRenderDispatcher } from '../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { FogRenderer } from '../../../../net/minecraft/client/renderer/fog/FogRenderer.d.ts'
import type { GameRenderState } from '../../../../net/minecraft/client/renderer/state/GameRenderState.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { OverlayTexture } from '../../../../net/minecraft/client/renderer/texture/OverlayTexture.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { ModelManager } from '../../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceProvider } from '../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { TrackedWaypoint$Projector } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint$Projector.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class GameRenderer extends Object implements AutoCloseable, GameRendererStorage, GameRendererAccessor, GameRendererAccessor_2, TrackedWaypoint$Projector {
    static MAX_BLUR_RADIUS: number;
    static PROJECTION_3D_HUD_Z_FAR: number;
    static getNightVisionScale(paramcamera: LivingEntity, parama: number): number;
    constructor(minecraft: Minecraft, itemInHandRenderer: ItemInHandRenderer, renderBuffers: RenderBuffers, modelManager: ModelManager)
    // private areShadersOn: boolean;
    // private bobStack: Matrix4fc;
    // private bobbingEffectsModel: Matrix4fc;
    // private bossOverlayWorldDarkening: number;
    // private bossOverlayWorldDarkeningO: number;
    // private effectActive: boolean;
    readonly featureRenderDispatcher: FeatureRenderDispatcher;
    fogRenderer: FogRenderer;
    readonly gameRenderState: GameRenderState;
    readonly globalSettingsUniform: GlobalSettingsUniform;
    // private guiRenderer: GuiRenderer;
    // private hasWorldScreenshot: boolean;
    // private hud3dProjectionMatrixBuffer: ProjectionMatrixBuffer;
    // private hudProjection: Projection;
    itemInHandRenderer: ItemInHandRenderer;
    // private lastScreenshotAttempt: number;
    // private levelProjectionMatrixBuffer: ProjectionMatrixBuffer;
    readonly lighting: Lighting;
    // private lightmap: Lightmap;
    // private lightmapRenderStateExtractor: LightmapRenderStateExtractor;
    readonly mainCamera: Camera;
    readonly minecraft: Minecraft;
    // private overlayTexture: OverlayTexture;
    readonly panorama: Panorama;
    // private postEffectId: Identifier;
    // private projection: Matrix4f;
    // private random: RandomSource;
    readonly renderBlockOutline: boolean;
    renderBuffers: RenderBuffers;
    readonly resourcePool: CrossFrameResourcePool;
    // private screenEffectRenderer: ScreenEffectRenderer;
    // private sodium$redirectWindowMinimizedState: boolean;
    readonly spinningEffectSpeed: number;
    readonly spinningEffectTime: number;
    readonly submitNodeStorage: SubmitNodeStorage;
    // private uiLightmap: UiLightmap;
    // private useUiLightmap: boolean;
    // private bobHurt(cameraState: CameraRenderState, poseStack: PoseStack): void;
    // private bobView(cameraState: CameraRenderState, poseStack: PoseStack): void;
    checkEntityPostEffect(cameraEntity: Entity): void;
    clearPostEffect(): void;
    close(): void;
    currentPostEffect(): Identifier;
    displayItemActivation(itemStack: ItemStack): void;
    extract(deltaTracker: DeltaTracker, advanceGameTime: boolean): void;
    // private extractCamera(deltaTracker: DeltaTracker, worldPartialTicks: number, cameraEntityPartialTicks: number): void;
    // private extractGui(deltaTracker: DeltaTracker, shouldRenderLevel: boolean, resourcesLoaded: boolean): void;
    // private extractOptions(): void;
    // private extractWindow(): void;
    getBossOverlayWorldDarkening(a: number): number;
    getFeatureRenderDispatcher(): FeatureRenderDispatcher;
    getGameRenderState(): GameRenderState;
    getGlobalSettingsUniform(): GlobalSettingsUniform;
    getLighting(): Lighting;
    getMainCamera(): Camera;
    getMinecraft(): Minecraft;
    getPanorama(): Panorama;
    getSubmitNodeStorage(): SubmitNodeStorage;
    levelLightmap(): GpuTextureView;
    lightmap(): GpuTextureView;
    overlayTexture(): OverlayTexture;
    preloadUiShader(resourceProvider: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>): void;
    processBlurEffect(): void;
    projectHorizonToScreen(): number;
    projectPointToScreen(point: Vec3): Vec3;
    registerPanoramaTextures(textureManager: TextureManager): void;
    render(deltaTracker: DeltaTracker, advanceGameTime: boolean): void;
    // private renderActiveTextDebug(): void;
    // private renderItemInHand(cameraState: CameraRenderState, deltaPartialTick: number, modelViewMatrix: Matrix4fc): void;
    renderLevel(deltaTracker: DeltaTracker): void;
    resetData(): void;
    resize(width: number, height: number): void;
    setLevel(level: ClientLevel): void;
    // private setPostEffect(id: Identifier): void;
    setRenderBlockOutline(renderBlockOutline: boolean): void;
    // private shouldRenderBlockOutline(): boolean;
    sodium$getFogParameters(): FogParameters;
    sodium$getProjectionMatrix(): Matrix4fc;
    // private takeAutoScreenshot(screenshotFile: Path[]): void;
    tick(): void;
    togglePostEffect(): void;
    // private tryTakeScreenshotIfNeeded(): void;
    update(deltaTracker: DeltaTracker, advanceGameTime: boolean): void;
}