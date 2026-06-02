import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { ShaderKey } from '../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
export class IrisPipelines extends Object {
    static assignPipeline(paramarg0: RenderPipeline, paramarg1: ShaderKey): void;
    static copyPipeline(paramarg0: RenderPipeline, paramarg1: RenderPipeline): void;
    static getPipeline(paramarg0: IrisRenderingPipeline, paramarg1: RenderPipeline): ShaderKey;
    constructor()
}