import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureScaleOverride } from '../../../../../net/irisshaders/iris/gl/texture/TextureScaleOverride.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { DirectiveHolder } from '../../../../../net/irisshaders/iris/shaderpack/parsing/DirectiveHolder.d.ts'
import type { CloudSetting } from '../../../../../net/irisshaders/iris/shaderpack/properties/CloudSetting.d.ts'
import type { PackRenderTargetDirectives } from '../../../../../net/irisshaders/iris/shaderpack/properties/PackRenderTargetDirectives.d.ts'
import type { PackShadowDirectives } from '../../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives.d.ts'
import type { ParticleRenderingSettings } from '../../../../../net/irisshaders/iris/shaderpack/properties/ParticleRenderingSettings.d.ts'
import type { ShaderProperties } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
import type { TextureStage } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
export class PackDirectives extends Object {
    constructor(arg0: number[], arg1: PackDirectives)
    constructor(arg0: number[], arg1: ShaderProperties)
    readonly ambientOcclusionLevel: number;
    // private breaksAnisotropy: boolean;
    readonly centerDepthHalfLife: number;
    readonly cloudSetting: CloudSetting;
    readonly concurrentCompute: boolean;
    // private dhCloudSetting: CloudSetting;
    readonly drynessHalfLife: number;
    // private explicitFlips: JavaMap<string, JavaMap<any, any>>;
    readonly eyeBrightnessHalfLife: number;
    readonly fallbackTex: number;
    // private frustumCulling: boolean;
    // private moon: boolean;
    readonly noiseTextureResolution: number;
    // private occlusionCulling: boolean;
    readonly oldHandLight: boolean;
    readonly oldLighting: boolean;
    readonly particleRenderingSettings: ParticleRenderingSettings;
    readonly prepareBeforeShadow: boolean;
    // private rainDepth: boolean;
    readonly renderTargetDirectives: PackRenderTargetDirectives;
    // private scaleOverrides: JavaMap<string, TextureScaleOverride>;
    // private separateAo: boolean;
    // private separateEntityDraws: boolean;
    readonly shadowDirectives: PackShadowDirectives;
    // private skipAllRendering: boolean;
    // private sky: boolean;
    // private stars: boolean;
    // private sun: boolean;
    readonly sunPathRotation: number;
    // private supportsColorCorrection: boolean;
    // private supportsEndFlash: boolean;
    readonly textureMap: JavaMap<Tri<string, TextureType, TextureStage>, string>;
    // private underwaterOverlay: boolean;
    // private vignette: boolean;
    // private voxelizeLightBlocks: boolean;
    // private weather: boolean;
    // private weatherParticles: boolean;
    readonly wetnessHalfLife: number;
    acceptDirectivesFrom(arg0: DirectiveHolder): void;
    breaksAnisotropy(): boolean;
    getAmbientOcclusionLevel(): number;
    getCenterDepthHalfLife(): number;
    getCloudSetting(): CloudSetting;
    getConcurrentCompute(): boolean;
    getDHCloudSetting(): CloudSetting;
    getDrynessHalfLife(): number;
    getExplicitFlips(arg0: string): JavaMap<number, boolean>;
    getEyeBrightnessHalfLife(): number;
    getFallbackTex(): number;
    getNoiseTextureResolution(): number;
    getParticleRenderingSettings(): ParticleRenderingSettings;
    getRenderTargetDirectives(): PackRenderTargetDirectives;
    getShadowDirectives(): PackShadowDirectives;
    getSunPathRotation(): number;
    getTextureMap(): JavaMap<Tri<string, TextureType, TextureStage>, string>;
    getTextureScaleOverride(arg0: number, arg1: number, arg2: number): Vector2i;
    getWetnessHalfLife(): number;
    isOldHandLight(): boolean;
    isOldLighting(): boolean;
    isPrepareBeforeShadow(): boolean;
    rainDepth(): boolean;
    shouldRenderMoon(): boolean;
    shouldRenderSkyDisc(): boolean;
    shouldRenderStars(): boolean;
    shouldRenderSun(): boolean;
    shouldRenderWeather(): boolean;
    shouldRenderWeatherParticles(): boolean;
    shouldUseFrustumCulling(): boolean;
    shouldUseOcclusionCulling(): boolean;
    shouldUseSeparateAo(): boolean;
    shouldUseSeparateEntityDraws(): boolean;
    shouldVoxelizeLightBlocks(): boolean;
    skipAllRendering(): boolean;
    supportsColorCorrection(): boolean;
    supportsEndFlash(): boolean;
    underwaterOverlay(): boolean;
    vignette(): boolean;
}