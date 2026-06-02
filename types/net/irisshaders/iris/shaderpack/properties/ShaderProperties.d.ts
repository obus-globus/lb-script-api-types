import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { BufferBlendInformation } from '../../../../../net/irisshaders/iris/gl/blending/BufferBlendInformation.d.ts'
import type { ShaderStorageInfo } from '../../../../../net/irisshaders/iris/gl/buffer/ShaderStorageInfo.d.ts'
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
    private constructor()
    constructor(arg0: string, arg1: ShaderPackOptions, arg2: StringPair[])
    readonly alphaTestOverrides: { [key: string]: AlphaTest };
    readonly backFaceCutout: OptionalBoolean;
    readonly backFaceCutoutMipped: OptionalBoolean;
    readonly backFaceSolid: OptionalBoolean;
    readonly backFaceTranslucent: OptionalBoolean;
    readonly beaconBeamDepth: OptionalBoolean;
    readonly blendModeOverrides: { [key: string]: BlendModeOverride };
    // private breaksAnisotropy: OptionalBoolean;
    readonly bufferBlendOverrides: { [key: string]: BufferBlendInformation[] };
    readonly bufferObjects: Int2ObjectArrayMap<ShaderStorageInfo>;
    readonly cloudSetting: CloudSetting;
    readonly concurrentCompute: OptionalBoolean;
    readonly conditionallyEnabledPrograms: { [key: string]: string };
    // private customTexAmount: number;
    readonly customTexturePatching: Map<Tri<string, TextureType, TextureStage>, string>;
    readonly customTextures: { [key in TextureStage]: { [key: string]: TextureDefinition } };
    readonly customUniforms: CustomUniforms$Builder;
    // private dhCloudSetting: CloudSetting;
    readonly dhShadowEnabled: OptionalBoolean;
    readonly dynamicHandLight: OptionalBoolean;
    readonly explicitFlips: { [key: string]: Object2BooleanMap<string> };
    readonly fallbackTex: number;
    readonly frustumCulling: OptionalBoolean;
    readonly indirectPointers: { [key: string]: IndirectPointer };
    readonly irisCustomImages: ImageInformation[];
    readonly irisCustomTextures: { [key: string]: TextureDefinition };
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
    readonly profiles: { [key: string]: string[] };
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
    readonly subScreenColumnCount: { [key: string]: number };
    readonly subScreenOptions: { [key: string]: string[] };
    readonly sun: OptionalBoolean;
    // private supportsColorCorrection: OptionalBoolean;
    // private supportsEndFlash: OptionalBoolean;
    readonly textureScaleOverrides: { [key: string]: TextureScaleOverride };
    readonly underwaterOverlay: OptionalBoolean;
    readonly viewportScaleOverrides: { [key: string]: ViewportData };
    readonly vignette: OptionalBoolean;
    readonly voxelizeLightBlocks: OptionalBoolean;
    readonly weather: OptionalBoolean;
    readonly weatherParticles: OptionalBoolean;
    breaksAnisotropy(): OptionalBoolean;
    getAlphaTestOverrides(): { [key: string]: AlphaTest };
    getBackFaceCutout(): OptionalBoolean;
    getBackFaceCutoutMipped(): OptionalBoolean;
    getBackFaceSolid(): OptionalBoolean;
    getBackFaceTranslucent(): OptionalBoolean;
    getBeaconBeamDepth(): OptionalBoolean;
    getBlendModeOverrides(): { [key: string]: BlendModeOverride };
    getBufferBlendOverrides(): { [key: string]: BufferBlendInformation[] };
    getBufferObjects(): Int2ObjectArrayMap<ShaderStorageInfo>;
    getCloudSetting(): CloudSetting;
    getConcurrentCompute(): OptionalBoolean;
    getConditionallyEnabledPrograms(): { [key: string]: string };
    getCustomTexturePatching(): Map<Tri<string, TextureType, TextureStage>, string>;
    getCustomTextures(): { [key in TextureStage]: { [key: string]: TextureDefinition } };
    getCustomUniforms(): CustomUniforms$Builder;
    getDHCloudSetting(): CloudSetting;
    getDhShadowEnabled(): OptionalBoolean;
    getDynamicHandLight(): OptionalBoolean;
    getExplicitFlips(): { [key: string]: Object2BooleanMap<string> };
    getFallbackTex(): number;
    getFrustumCulling(): OptionalBoolean;
    getIndirectPointers(): { [key: string]: IndirectPointer };
    getIrisCustomImages(): ImageInformation[];
    getIrisCustomTextures(): { [key: string]: TextureDefinition };
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
    getProfiles(): { [key: string]: string[] };
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
    getSubScreenColumnCount(): { [key: string]: number };
    getSubScreenOptions(): { [key: string]: string[] };
    getSun(): OptionalBoolean;
    getTextureScaleOverrides(): { [key: string]: TextureScaleOverride };
    getUnderwaterOverlay(): OptionalBoolean;
    getViewportScaleOverrides(): { [key: string]: ViewportData };
    getVignette(): OptionalBoolean;
    getVoxelizeLightBlocks(): OptionalBoolean;
    getWeather(): OptionalBoolean;
    getWeatherParticles(): OptionalBoolean;
    skipAllRendering(): OptionalBoolean;
    supportsColorCorrection(): OptionalBoolean;
    supportsEndFlash(): OptionalBoolean;
}