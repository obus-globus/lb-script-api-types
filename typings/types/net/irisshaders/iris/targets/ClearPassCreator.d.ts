import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PackRenderTargetDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackRenderTargetDirectives.d.ts'
import type { PackShadowDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { ClearPass } from '../../../../net/irisshaders/iris/targets/ClearPass.d.ts'
import type { RenderTargets } from '../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
export class ClearPassCreator extends Object {
    static createClearPasses(paramarg0: RenderTargets, paramarg1: boolean, paramarg2: PackRenderTargetDirectives): ClearPass[];
    static createShadowClearPasses(paramarg0: ShadowRenderTargets, paramarg1: boolean, paramarg2: PackShadowDirectives): ClearPass[];
    constructor()
}