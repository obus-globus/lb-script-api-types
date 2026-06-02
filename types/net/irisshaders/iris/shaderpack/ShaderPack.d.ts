import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeatureFlags } from '../../../../net/irisshaders/iris/features/FeatureFlags.d.ts'
import type { BuiltShaderStorageInfo } from '../../../../net/irisshaders/iris/gl/buffer/BuiltShaderStorageInfo.d.ts'
import type { TextureDefinition } from '../../../../net/irisshaders/iris/gl/texture/TextureDefinition.d.ts'
import type { StringPair } from '../../../../net/irisshaders/iris/helpers/StringPair.d.ts'
import type { IdMap } from '../../../../net/irisshaders/iris/shaderpack/IdMap.d.ts'
import type { ImageInformation } from '../../../../net/irisshaders/iris/shaderpack/ImageInformation.d.ts'
import type { LanguageMap } from '../../../../net/irisshaders/iris/shaderpack/LanguageMap.d.ts'
import type { AbsolutePackPath } from '../../../../net/irisshaders/iris/shaderpack/include/AbsolutePackPath.d.ts'
import type { NamespacedId } from '../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { ProfileSet$ProfileResult } from '../../../../net/irisshaders/iris/shaderpack/option/ProfileSet$ProfileResult.d.ts'
import type { ShaderPackOptions } from '../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuContainer } from '../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
import type { ProgramSet } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { ProgramSetInterface } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSetInterface.d.ts'
import type { ShaderProperties } from '../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
import type { CustomTextureData } from '../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData.d.ts'
import type { TextureStage } from '../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { CustomUniforms$Builder } from '../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms$Builder.d.ts'
export class ShaderPack extends Object {
    constructor(arg0: Path[], arg1: StringPair[], arg2: boolean)
    constructor(arg0: Path[], arg1: { [key: string]: string }, arg2: StringPair[], arg3: boolean)
    // private activeFeatures: FeatureFlags[];
    // private base: ProgramSet;
    readonly bufferObjects: Int2ObjectArrayMap<BuiltShaderStorageInfo>;
    readonly customNoiseTexture: CustomTextureData;
    readonly customTextureDataMap: { [key in TextureStage]: { [key: string]: CustomTextureData } };
    customUniforms: CustomUniforms$Builder;
    // private dimensionIds: string[];
    readonly dimensionMap: Map<NamespacedId, string>;
    readonly idMap: IdMap;
    readonly irisCustomImages: ImageInformation[];
    readonly irisCustomTextureDataMap: { [key: string]: CustomTextureData };
    readonly languageMap: LanguageMap;
    readonly menuContainer: OptionMenuContainer;
    // private overrides: Map<NamespacedId, ProgramSetInterface>;
    // private profile: ProfileSet$ProfileResult;
    readonly profileInfo: string;
    readonly shaderPackOptions: ShaderPackOptions;
    // private shaderProperties: ShaderProperties;
    // private sourceProvider: (param0: AbsolutePackPath) => string;
    getBufferObjects(): Int2ObjectArrayMap<BuiltShaderStorageInfo>;
    // private getCurrentProfileName(): string;
    getCustomNoiseTexture(): CustomTextureData;
    getCustomTextureDataMap(): { [key in TextureStage]: { [key: string]: CustomTextureData } };
    getDimensionMap(): Map<NamespacedId, string>;
    getIdMap(): IdMap;
    getIrisCustomImages(): ImageInformation[];
    getIrisCustomTextureDataMap(): { [key: string]: CustomTextureData };
    getLanguageMap(): LanguageMap;
    getMenuContainer(): OptionMenuContainer;
    getProfileInfo(): string;
    getProgramSet(arg0: NamespacedId): ProgramSet;
    getShaderPackOptions(): ShaderPackOptions;
    hasFeature(arg0: FeatureFlags): boolean;
    // private loadMcMeta(arg0: Path[]): JsonObject;
    // private parseDimensionIds(arg0: Properties, arg1: string): string[];
    readTexture(arg0: Path[], arg1: TextureDefinition): CustomTextureData;
}