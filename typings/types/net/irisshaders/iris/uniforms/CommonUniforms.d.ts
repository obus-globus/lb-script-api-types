import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FogMode } from '../../../../net/irisshaders/iris/gl/state/FogMode.d.ts'
import type { DynamicUniformHolder } from '../../../../net/irisshaders/iris/gl/uniform/DynamicUniformHolder.d.ts'
import type { UniformHolder } from '../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { IdMap } from '../../../../net/irisshaders/iris/shaderpack/IdMap.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
export class CommonUniforms extends Object {
    static addCommonUniforms(paramarg0: DynamicUniformHolder, paramarg1: IdMap, paramarg2: PackDirectives, paramarg3: FrameUpdateNotifier, paramarg4: FogMode): void;
    static addDynamicUniforms(paramarg0: DynamicUniformHolder, paramarg1: FogMode): void;
    static addNonDynamicUniforms(paramarg0: UniformHolder, paramarg1: IdMap, paramarg2: PackDirectives, paramarg3: FrameUpdateNotifier): void;
    static generalCommonUniforms(paramarg0: UniformHolder, paramarg1: FrameUpdateNotifier, paramarg2: PackDirectives): void;
    private constructor()
}