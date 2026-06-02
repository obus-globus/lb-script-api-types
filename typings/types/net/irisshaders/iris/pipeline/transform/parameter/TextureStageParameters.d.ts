import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureType } from '../../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { Patch } from '../../../../../../net/irisshaders/iris/pipeline/transform/Patch.d.ts'
import type { Parameters } from '../../../../../../net/irisshaders/iris/pipeline/transform/parameter/Parameters.d.ts'
import type { TextureStage } from '../../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export class TextureStageParameters extends Parameters {
    static EMPTY: JobParameters;
    constructor(arg0: Patch, arg1: TextureStage, arg2: Map<Tri<string, TextureType, TextureStage>, string>)
    // private stage: TextureStage;
    equals(arg0: Object | null): boolean;
    getTextureStage(): TextureStage;
    hashCode(): number;
}