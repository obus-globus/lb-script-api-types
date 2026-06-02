import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { WorldRenderingPhase } from '../../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
import type { ShaderKey } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
export class ShaderOverrides extends Object {
    static getSkyColorShader(paramarg0: IrisRenderingPipeline): ShaderKey;
    static getSkyShader(paramarg0: IrisRenderingPipeline): ShaderKey;
    static getSkyTexColorShader(paramarg0: IrisRenderingPipeline): ShaderKey;
    static getSkyTexShader(paramarg0: IrisRenderingPipeline): ShaderKey;
    static isBlockEntities(paramarg0: IrisRenderingPipeline): boolean;
    static isEntities(paramarg0: IrisRenderingPipeline): boolean;
    static isPhase(paramarg0: IrisRenderingPipeline, paramarg1: WorldRenderingPhase): boolean;
    static isSky(paramarg0: IrisRenderingPipeline): boolean;
    constructor()
}