import type { GlProgram } from '../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DHCompat } from '../../../../net/irisshaders/iris/compat/dh/DHCompat.d.ts'
import type { FeatureFlags } from '../../../../net/irisshaders/iris/features/FeatureFlags.d.ts'
import type { AlphaTest } from '../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { ShaderStorageBufferHolder } from '../../../../net/irisshaders/iris/gl/buffer/ShaderStorageBufferHolder.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { GlImage } from '../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { ImageClearPass } from '../../../../net/irisshaders/iris/gl/image/ImageClearPass.d.ts'
import type { ImageHolder } from '../../../../net/irisshaders/iris/gl/image/ImageHolder.d.ts'
import type { ComputeProgram } from '../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { GlSampler } from '../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { SamplerHolder } from '../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { FogMode } from '../../../../net/irisshaders/iris/gl/state/FogMode.d.ts'
import type { TextureType } from '../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { LevelRendererAccessor } from '../../../../net/irisshaders/iris/mixin/LevelRendererAccessor.d.ts'
import type { CenterDepthSampler } from '../../../../net/irisshaders/iris/pathways/CenterDepthSampler.d.ts'
import type { HorizonRenderer } from '../../../../net/irisshaders/iris/pathways/HorizonRenderer.d.ts'
import type { ColorSpace } from '../../../../net/irisshaders/iris/pathways/colorspace/ColorSpace.d.ts'
import type { ColorSpaceConverter } from '../../../../net/irisshaders/iris/pathways/colorspace/ColorSpaceConverter.d.ts'
import type { CompositeRenderer } from '../../../../net/irisshaders/iris/pipeline/CompositeRenderer.d.ts'
import type { CustomTextureManager } from '../../../../net/irisshaders/iris/pipeline/CustomTextureManager.d.ts'
import type { FinalPassRenderer } from '../../../../net/irisshaders/iris/pipeline/FinalPassRenderer.d.ts'
import type { ShaderRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/ShaderRenderingPipeline.d.ts'
import type { WorldRenderingPhase } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ShaderKey } from '../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
import type { ShaderMap } from '../../../../net/irisshaders/iris/pipeline/programs/ShaderMap.d.ts'
import type { ShaderSupplier } from '../../../../net/irisshaders/iris/pipeline/programs/ShaderSupplier.d.ts'
import type { SodiumPrograms } from '../../../../net/irisshaders/iris/pipeline/programs/SodiumPrograms.d.ts'
import type { ShaderPack } from '../../../../net/irisshaders/iris/shaderpack/ShaderPack.d.ts'
import type { ProgramId } from '../../../../net/irisshaders/iris/shaderpack/loading/ProgramId.d.ts'
import type { ComputeSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ComputeSource.d.ts'
import type { ProgramFallbackResolver } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramFallbackResolver.d.ts'
import type { ProgramSet } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { ProgramSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { CloudSetting } from '../../../../net/irisshaders/iris/shaderpack/properties/CloudSetting.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { PackShadowDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives.d.ts'
import type { ParticleRenderingSettings } from '../../../../net/irisshaders/iris/shaderpack/properties/ParticleRenderingSettings.d.ts'
import type { TextureStage } from '../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { ShadowCompositeRenderer } from '../../../../net/irisshaders/iris/shadows/ShadowCompositeRenderer.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { ShadowRenderer } from '../../../../net/irisshaders/iris/shadows/ShadowRenderer.d.ts'
import type { ClearPass } from '../../../../net/irisshaders/iris/targets/ClearPass.d.ts'
import type { RenderTargets } from '../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { CustomUniforms } from '../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { DebugScreenDisplayer } from '../../../../net/minecraft/client/gui/components/debug/DebugScreenDisplayer.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { DynamicTexture } from '../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class IrisRenderingPipeline extends Object implements ShaderRenderingPipeline, WorldRenderingPipeline {
    constructor(arg0: ProgramSet)
    readonly albedoTex: number;
    // private allowConcurrentCompute: boolean;
    // private beginRenderer: CompositeRenderer;
    readonly biggerWhitePixel: DynamicTexture;
    // private centerDepthSampler: CenterDepthSampler;
    // private clearImages: ImageClearPass[];
    // private clearPasses: ClearPass[];
    // private clearPassesFull: ClearPass[];
    readonly cloudSetting: CloudSetting;
    // private colorSpaceConverter: ColorSpaceConverter;
    // private compositeRenderer: CompositeRenderer;
    // private currentColorSpace: ColorSpace;
    readonly currentNormalTexture: AbstractTexture;
    readonly currentSpecularTexture: AbstractTexture;
    // private customImages: GlImage[];
    // private customTextureManager: CustomTextureManager;
    // private customTextureMap: Map<Tri<string, TextureType, TextureStage>, string>;
    readonly customUniforms: CustomUniforms;
    // private defaultFB: GlFramebuffer;
    // private defaultFBAlt: GlFramebuffer;
    // private defaultFBShadow: GlFramebuffer;
    // private deferredRenderer: CompositeRenderer;
    // private destroyed: boolean;
    // private dhCloudSetting: CloudSetting;
    // private dhCompat: DHCompat;
    // private finalPassRenderer: FinalPassRenderer;
    readonly flippedAfterPrepare: number[];
    readonly flippedAfterTranslucent: number[];
    readonly flippedBeforeShadow: number[];
    // private forcedShadowRenderDistanceChunks: OptionalInt;
    // private frustumCulling: boolean;
    // private horizonRenderer: HorizonRenderer;
    // private initializedBlockIds: boolean;
    isBeforeTranslucent: boolean;
    readonly isMainBound: boolean;
    // private isRenderingWorld: boolean;
    // private loadedShaders: GlProgram[];
    readonly normalSampler: GlSampler;
    // private occlusionCulling: boolean;
    // private oldLighting: boolean;
    readonly overridePhase: WorldRenderingPhase;
    // private pack: ShaderPack;
    // private packDirectives: PackDirectives;
    readonly particleRenderingSettings: ParticleRenderingSettings;
    readonly phase: WorldRenderingPhase;
    // private prepareRenderer: CompositeRenderer;
    // private renderTargets: RenderTargets;
    // private resolver: ProgramFallbackResolver;
    // private separateHardwareSamplers: boolean;
    // private setup: ComputeProgram[];
    readonly shaderMap: ShaderMap;
    // private shaderStorageBufferHolder: ShaderStorageBufferHolder;
    // private shadowClearPasses: ClearPass[];
    // private shadowClearPassesFull: ClearPass[];
    // private shadowCompositeRenderer: ShadowCompositeRenderer;
    // private shadowComputes: ComputeProgram[];
    // private shadowDirectives: PackShadowDirectives;
    // private shadowMapResolution: number;
    // private shadowRenderTargets: ShadowRenderTargets;
    // private shadowRenderer: ShadowRenderer;
    // private shadowTargetsSupplier: () => ShadowRenderTargets;
    // private shouldBindPBR: boolean;
    // private shouldRemovePhase: boolean;
    // private shouldRenderMoon: boolean;
    // private shouldRenderSkyDisc: boolean;
    // private shouldRenderStars: boolean;
    // private shouldRenderSun: boolean;
    // private shouldRenderUnderwaterOverlay: boolean;
    // private shouldRenderVignette: boolean;
    // private shouldRenderWeather: boolean;
    // private shouldRenderWeatherParticles: boolean;
    // private shouldWriteRainAndSnowToDepthBuffer: boolean;
    // private skipAllRendering: boolean;
    readonly sodiumPrograms: SodiumPrograms;
    readonly specularSampler: GlSampler;
    // private stackSize: number;
    readonly sunPathRotation: number;
    // private supportsEndFlash: boolean;
    // private updateNotifier: FrameUpdateNotifier;
    readonly whitePixel: DynamicTexture;
    addDebugText(arg0: DebugScreenDisplayer): void;
    addGbufferOrShadowSamplers(arg0: SamplerHolder, arg1: ImageHolder, arg2: () => number[], arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): void;
    allowConcurrentCompute(): boolean;
    beginHand(): void;
    beginLevelRendering(): void;
    beginTranslucents(): void;
    bindDefault(): void;
    bindDefaultShadow(): void;
    createDHFramebuffer(arg0: ProgramSource, arg1: boolean): GlFramebuffer;
    createDHFramebufferShadow(arg0: ProgramSource): GlFramebuffer;
    // private createFallbackShader(arg0: string, arg1: ShaderKey): ShaderSupplier;
    // private createFallbackShadowShader(arg0: string, arg1: ShaderKey): ShaderSupplier;
    // private createSetupComputes(arg0: ComputeSource[], arg1: ProgramSet, arg2: TextureStage): ComputeProgram[];
    // private createShader(arg0: string, arg1: Optional<ProgramSource>, arg2: ShaderKey): ShaderSupplier;
    // private createShader(arg0: string, arg1: ShaderKey, arg2: ProgramSource, arg3: ProgramId, arg4: AlphaTest, arg5: VertexFormat, arg6: FogMode, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean): ShaderSupplier;
    // private createShadowComputes(arg0: ComputeSource[], arg1: ProgramSet): ComputeProgram[];
    // private createShadowShader(arg0: string, arg1: Optional<ProgramSource>, arg2: ShaderKey): ShaderSupplier;
    // private createShadowShader(arg0: string, arg1: ShaderKey, arg2: ProgramSource, arg3: ProgramId, arg4: AlphaTest, arg5: VertexFormat, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean): ShaderSupplier;
    destroy(): void;
    // private destroyShaders(): void;
    finalizeGameRendering(): void;
    finalizeLevelRendering(): void;
    getAlbedoTex(): number;
    getBiggerWhitePixel(): AbstractTexture;
    getCloudSetting(): CloudSetting;
    getCurrentNormalTexture(): number;
    getCurrentSpecularTexture(): number;
    getCustomUniforms(): CustomUniforms;
    getDHCloudSetting(): CloudSetting;
    getDHCompat(): DHCompat;
    getDHGenericShader(): Optional<ProgramSource>;
    getDHShadowShader(): Optional<ProgramSource>;
    getDHTerrainShader(): Optional<ProgramSource>;
    getDHWaterShader(): Optional<ProgramSource>;
    getFlippedAfterPrepare(): number[];
    getFlippedAfterTranslucent(): number[];
    getFlippedBeforeShadow(): number[];
    getForcedShadowRenderDistanceChunksForDisplay(): OptionalInt;
    getFrameUpdateNotifier(): FrameUpdateNotifier;
    getNormalSampler(): GlSampler;
    getParticleRenderingSettings(): ParticleRenderingSettings;
    getPhase(): WorldRenderingPhase;
    getShaderMap(): ShaderMap;
    getSodiumPrograms(): SodiumPrograms;
    getSpecularSampler(): GlSampler;
    getSunPathRotation(): number;
    getTextureMap(): Map<Tri<string, TextureType, TextureStage>, string>;
    getWhitePixel(): AbstractTexture;
    hasFeature(arg0: FeatureFlags): boolean;
    hasShadowRenderTargets(): boolean;
    onBeginClear(): void;
    onSetAlbedoTex(arg0: GpuTextureView): void;
    removePhaseIfNeeded(): void;
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
    skipAllRendering(): boolean;
    supportsEndFlash(): boolean;
}