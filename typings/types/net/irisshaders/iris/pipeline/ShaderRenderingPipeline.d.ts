import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DHCompat } from '../../../../net/irisshaders/iris/compat/dh/DHCompat.d.ts'
import type { FeatureFlags } from '../../../../net/irisshaders/iris/features/FeatureFlags.d.ts'
import type { LevelRendererAccessor } from '../../../../net/irisshaders/iris/mixin/LevelRendererAccessor.d.ts'
import type { WorldRenderingPhase } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ShaderMap } from '../../../../net/irisshaders/iris/pipeline/programs/ShaderMap.d.ts'
import type { SodiumPrograms } from '../../../../net/irisshaders/iris/pipeline/programs/SodiumPrograms.d.ts'
import type { CloudSetting } from '../../../../net/irisshaders/iris/shaderpack/properties/CloudSetting.d.ts'
import type { ParticleRenderingSettings } from '../../../../net/irisshaders/iris/shaderpack/properties/ParticleRenderingSettings.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { DebugScreenDisplayer } from '../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export interface ShaderRenderingPipeline extends Object, WorldRenderingPipeline{
    addDebugText(arg0: DebugScreenDisplayer): void;
    allowConcurrentCompute(): boolean;
    beginHand(): void;
    beginLevelRendering(): void;
    beginTranslucents(): void;
    destroy(): void;
    finalizeGameRendering(): void;
    finalizeLevelRendering(): void;
    getAlbedoTex(): number;
    getCloudSetting(): CloudSetting;
    getCurrentNormalTexture(): number;
    getCurrentSpecularTexture(): number;
    getDHCompat(): DHCompat;
    getForcedShadowRenderDistanceChunksForDisplay(): OptionalInt;
    getFrameUpdateNotifier(): FrameUpdateNotifier;
    getParticleRenderingSettings(): ParticleRenderingSettings;
    getPhase(): WorldRenderingPhase;
    getShaderMap(): ShaderMap;
    getSodiumPrograms(): SodiumPrograms;
    getSunPathRotation(): number;
    hasFeature(arg0: FeatureFlags): boolean;
    onBeginClear(): void;
    onSetAlbedoTex(arg0: GpuTextureView): void;
    renderShadows(arg0: LevelRendererAccessor, arg1: Camera, arg2: CameraRenderState): void;
    setIsMainBound(arg0: boolean): void;
    setOverridePhase(arg0: WorldRenderingPhase): void;
    setPhase(arg0: WorldRenderingPhase): void;
    shouldDisableDirectionalShading(): boolean;
    shouldDisableFrustumCulling(): boolean;
    shouldDisableOcclusionCulling(): boolean;
    shouldDisableVanillaEntityShadows(): boolean;
    shouldOverrideShaders(): boolean;
    shouldRenderMoon(): boolean;
    shouldRenderSkyDisc(): boolean;
    shouldRenderStars(): boolean;
    shouldRenderSun(): boolean;
    shouldRenderUnderwaterOverlay(): boolean;
    shouldRenderVignette(): boolean;
    shouldRenderWeather(): boolean;
    shouldRenderWeatherParticles(): boolean;
    shouldWriteRainAndSnowToDepthBuffer(): boolean;
    supportsEndFlash(): boolean;
}