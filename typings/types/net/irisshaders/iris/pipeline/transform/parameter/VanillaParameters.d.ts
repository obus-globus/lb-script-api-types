import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { ShaderAttributeInputs } from '../../../../../../net/irisshaders/iris/gl/state/ShaderAttributeInputs.d.ts'
import type { TextureType } from '../../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { Patch } from '../../../../../../net/irisshaders/iris/pipeline/transform/Patch.d.ts'
import type { GeometryInfoParameters } from '../../../../../../net/irisshaders/iris/pipeline/transform/parameter/GeometryInfoParameters.d.ts'
import type { TextureStage } from '../../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export class VanillaParameters extends GeometryInfoParameters {
    static EMPTY: JobParameters;
    constructor(arg0: Patch, arg1: JavaMap<Tri<string, TextureType, TextureStage>, string>, arg2: AlphaTest, arg3: boolean, arg4: boolean, arg5: boolean, arg6: ShaderAttributeInputs, arg7: boolean, arg8: boolean)
    alpha: AlphaTest;
    hasChunkOffset: boolean;
    inputs: ShaderAttributeInputs;
    // private isClouds: boolean;
    // private isLines: boolean;
    equals(arg0: Object | null): boolean;
    getAlphaTest(): AlphaTest;
    getTextureStage(): TextureStage;
    hashCode(): number;
    isClouds(): boolean;
    isLines(): boolean;
}