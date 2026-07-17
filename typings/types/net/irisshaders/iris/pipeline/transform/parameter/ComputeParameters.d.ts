import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { TextureType } from '../../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
import type { Tri } from '../../../../../../net/irisshaders/iris/helpers/Tri.d.ts'
import type { Patch } from '../../../../../../net/irisshaders/iris/pipeline/transform/Patch.d.ts'
import type { TextureStageParameters } from '../../../../../../net/irisshaders/iris/pipeline/transform/parameter/TextureStageParameters.d.ts'
import type { TextureStage } from '../../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export class ComputeParameters extends TextureStageParameters {
    static EMPTY: JobParameters;
    constructor(arg0: Patch, arg1: TextureStage, arg2: JavaMap<Tri<string, TextureType, TextureStage>, string>)
}