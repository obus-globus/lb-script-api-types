import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { TextureType } from '../../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { Patch } from '../../../../../../net/irisshaders/iris/pipeline/transform/Patch.d.ts'
import type { PatchShaderType } from '../../../../../../net/irisshaders/iris/pipeline/transform/PatchShaderType.d.ts'
import type { TextureStage } from '../../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export abstract class Parameters extends Object implements JobParameters {
    static EMPTY: JobParameters;
    constructor(arg0: Patch, arg1: JavaMap<Tri<string, TextureType, TextureStage>, string>)
    name: string;
    patch: Patch;
    readonly textureMap: JavaMap<Tri<string, TextureType, TextureStage>, string>;
    type: PatchShaderType;
    equals(arg0: Object | null): boolean;
    getAlphaTest(): AlphaTest;
    getTextureMap(): JavaMap<Tri<string, TextureType, TextureStage>, string>;
    getTextureStage(): TextureStage;
    hashCode(): number;
}