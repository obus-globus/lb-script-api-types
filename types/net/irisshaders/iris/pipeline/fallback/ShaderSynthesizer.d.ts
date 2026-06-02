import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { FogMode } from '../../../../../net/irisshaders/iris/gl/state/FogMode.d.ts'
import type { ShaderAttributeInputs } from '../../../../../net/irisshaders/iris/gl/state/ShaderAttributeInputs.d.ts'
export class ShaderSynthesizer extends Object {
    static fsh(paramarg0: ShaderAttributeInputs, paramarg1: FogMode, paramarg2: AlphaTest, paramarg3: boolean, paramarg4: boolean): string;
    static vsh(paramarg0: boolean, paramarg1: ShaderAttributeInputs, paramarg2: FogMode, paramarg3: boolean, paramarg4: boolean): string;
    constructor()
}