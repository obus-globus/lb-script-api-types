import type { GlProgram } from '../../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderKey } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
import type { ShaderLoadingMap } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderLoadingMap.d.ts'
import type { ShaderSupplier } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderSupplier.d.ts'
export class ShaderMap extends Object {
    constructor(arg0: ShaderLoadingMap, arg1: (param0: ShaderSupplier) => boolean, arg2: (param0: GlProgram) => void)
    // private shaders: GlProgram[];
    // private checkLinkingState(arg0: ShaderKey, arg1: ShaderSupplier): void;
    getShader(arg0: ShaderKey): GlProgram;
}