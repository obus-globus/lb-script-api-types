import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { BufferBlendInformation } from '../../../../../net/irisshaders/iris/gl/blending/BufferBlendInformation.d.ts'
import type { ViewportData } from '../../../../../net/irisshaders/iris/gl/framebuffer/ViewportData.d.ts'
import type { TextureDefinition } from '../../../../../net/irisshaders/iris/gl/texture/TextureDefinition.d.ts'
import type { TextureScaleOverride } from '../../../../../net/irisshaders/iris/gl/texture/TextureScaleOverride.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { OptionalBoolean } from '../../../../../net/irisshaders/iris/helpers/OptionalBoolean.d.ts'
import type { StringPair } from '../../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
import type { Tri } from '../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { ImageInformation } from '../../../../../net/irisshaders/iris/shaderpack/ImageInformation.d.ts'
import type { ShaderPackOptions } from '../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { CloudSetting } from '../../../../../net/irisshaders/iris/shaderpack/properties/CloudSetting.d.ts'
import type { IndirectPointer } from '../../../../../net/irisshaders/iris/shaderpack/properties/IndirectPointer.d.ts'
import type { ParticleRenderingSettings } from '../../../../../net/irisshaders/iris/shaderpack/properties/ParticleRenderingSettings.d.ts'
import type { ShadowCullState } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShadowCullState.d.ts'
import type { TextureStage } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { CustomUniforms$Builder } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms$Builder.d.ts'
export class ShaderProperties extends Object {
    static empty(): ShaderProperties;
    constructor(arg0: string, arg1: ShaderPackOptions, arg2: StringPair[])
    readonly alphaTestOverrides: JavaMap<string, AlphaTest>;
    readonly backFaceCutout: OptionalBoolean;
    readonly backFaceCutoutMipped: OptionalBoolean;
    readonly backFaceSolid: OptionalBoolean;
    readonly backFaceTranslucent: OptionalBoolean;
    readonly beaconBeamDepth: OptionalBoolean;
    readonly blendModeOverrides: JavaMap<string, BlendModeOverride>;
    // private breaksAnisotropy: OptionalBoolean;
    readonly bufferBlendOverrides: JavaMap<string, BufferBlendInformation[]>;
    readonly bufferObjects: JavaMap<any, any>;
    readonly cloudSetting: CloudSetting;
    readonly concurrentCompute: OptionalBoolean;
    readonly conditionallyEnabledPrograms: JavaMap<string, string>;
    // private customTexAmount: number;
    readonly customTexturePatching: JavaMap<Tri<string, TextureType, TextureStage>, string>;
    readonly customTextures: JavaMap<TextureStage, JavaMap<string, TextureDefinition>>;
    readonly customUniforms: CustomUniforms$Builder;
    // private dhCloudSetting: CloudSetting;
    readonly dhShadowEnabled: OptionalBoolean;
    readonly dynamicHandLight: OptionalBoolean;
    readonly explicitFlips: JavaMap<string, JavaMap<any, any>>;
    readonly fallbackTex: number;
    readonly frustumCulling: OptionalBoolean;
    readonly indirectPointers: JavaMap<string, IndirectPointer>;
    readonly irisCustomImages: ImageInformation[];
    readonly irisCustomTextures: JavaMap<string, TextureDefinition>;
    readonly mainScreenColumnCount: number;
    readonly mainScreenOptions: string[];
    readonly moon: OptionalBoolean;
    readonly noiseTexturePath: string;
    readonly occlusionCulling: OptionalBoolean;
    readonly oldHandLight: OptionalBoolean;
    readonly oldLighting: OptionalBoolean;
    readonly optionalFeatureFlags: string[];
    readonly particleRenderingSettings: ParticleRenderingSettings;
    readonly prepareBeforeShadow: OptionalBoolean;
    readonly profiles: JavaMap<string, string[]>;
    readonly rainDepth: OptionalBoolean;
    readonly requiredFeatureFlags: string[];
    readonly separateAo: OptionalBoolean;
    readonly separateEntityDraws: OptionalBoolean;
    readonly shadowBlockEntities: OptionalBoolean;
    readonly shadowCulling: ShadowCullState;
    readonly shadowEnabled: OptionalBoolean;
    readonly shadowEntities: OptionalBoolean;
    readonly shadowLightBlockEntities: OptionalBoolean;
    readonly shadowPlayer: OptionalBoolean;
    readonly shadowTerrain: OptionalBoolean;
    readonly shadowTranslucent: OptionalBoolean;
    // private skipAllRendering: OptionalBoolean;
    readonly sky: OptionalBoolean;
    readonly sliderOptions: string[];
    readonly stars: OptionalBoolean;
    readonly subScreenColumnCount: JavaMap<string, number>;
    readonly subScreenOptions: JavaMap<string, string[]>;
    readonly sun: OptionalBoolean;
    // private supportsColorCorrection: OptionalBoolean;
    // private supportsEndFlash: OptionalBoolean;
    readonly textureScaleOverrides: JavaMap<string, TextureScaleOverride>;
    readonly underwaterOverlay: OptionalBoolean;
    readonly viewportScaleOverrides: JavaMap<string, ViewportData>;
    readonly vignette: OptionalBoolean;
    readonly voxelizeLightBlocks: OptionalBoolean;
    readonly weather: OptionalBoolean;
    readonly weatherParticles: OptionalBoolean;
    breaksAnisotropy(): OptionalBoolean;
    getAlphaTestOverrides(): JavaMap<string, AlphaTest>;
    getBackFaceCutout(): OptionalBoolean;
    getBackFaceCutoutMipped(): OptionalBoolean;
    getBackFaceSolid(): OptionalBoolean;
    getBackFaceTranslucent(): OptionalBoolean;
    getBeaconBeamDepth(): OptionalBoolean;
    getBlendModeOverrides(): JavaMap<string, BlendModeOverride>;
    getBufferBlendOverrides(): JavaMap<string, BufferBlendInformation[]>;
    getBufferObjects(): JavaMap<any, any>;
    getCloudSetting(): CloudSetting;
    getConcurrentCompute(): OptionalBoolean;
    getConditionallyEnabledPrograms(): JavaMap<string, string>;
    getCustomTexturePatching(): JavaMap<Tri<string, TextureType, TextureStage>, string>;
    getCustomTextures(): JavaMap<TextureStage, JavaMap<string, TextureDefinition>>;
    getCustomUniforms(): CustomUniforms$Builder;
    getDHCloudSetting(): CloudSetting;
    getDhShadowEnabled(): OptionalBoolean;
    getDynamicHandLight(): OptionalBoolean;
    getExplicitFlips(): JavaMap<string, JavaMap<any, any>>;
    getFallbackTex(): number;
    getFrustumCulling(): OptionalBoolean;
    getIndirectPointers(): JavaMap<string, IndirectPointer>;
    getIrisCustomImages(): ImageInformation[];
    getIrisCustomTextures(): JavaMap<string, TextureDefinition>;
    getMainScreenColumnCount(): Optional<number>;
    getMainScreenOptions(): Optional<string[]>;
    getMoon(): OptionalBoolean;
    getNoiseTexturePath(): Optional<string>;
    getOcclusionCulling(): OptionalBoolean;
    getOldHandLight(): OptionalBoolean;
    getOldLighting(): OptionalBoolean;
    getOptionalFeatureFlags(): string[];
    getParticleRenderingSettings(): ParticleRenderingSettings;
    getPrepareBeforeShadow(): OptionalBoolean;
    getProfiles(): JavaMap<string, string[]>;
    getRainDepth(): OptionalBoolean;
    getRequiredFeatureFlags(): string[];
    getSeparateAo(): OptionalBoolean;
    getSeparateEntityDraws(): OptionalBoolean;
    getShadowBlockEntities(): OptionalBoolean;
    getShadowCulling(): ShadowCullState;
    getShadowEnabled(): OptionalBoolean;
    getShadowEntities(): OptionalBoolean;
    getShadowLightBlockEntities(): OptionalBoolean;
    getShadowPlayer(): OptionalBoolean;
    getShadowTerrain(): OptionalBoolean;
    getShadowTranslucent(): OptionalBoolean;
    getSky(): OptionalBoolean;
    getSliderOptions(): string[];
    getStars(): OptionalBoolean;
    getSubScreenColumnCount(): JavaMap<string, number>;
    getSubScreenOptions(): JavaMap<string, string[]>;
    getSun(): OptionalBoolean;
    getTextureScaleOverrides(): JavaMap<string, TextureScaleOverride>;
    getUnderwaterOverlay(): OptionalBoolean;
    getViewportScaleOverrides(): JavaMap<string, ViewportData>;
    getVignette(): OptionalBoolean;
    getVoxelizeLightBlocks(): OptionalBoolean;
    getWeather(): OptionalBoolean;
    getWeatherParticles(): OptionalBoolean;
    skipAllRendering(): OptionalBoolean;
    supportsColorCorrection(): OptionalBoolean;
    supportsEndFlash(): OptionalBoolean;
}