import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderKey } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
import type { ShaderSupplier } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderSupplier.d.ts'
import type { Patch } from '../../../../../net/irisshaders/iris/pipeline/transform/Patch.d.ts'
export class ShaderLoadingMap extends Object {
    constructor(arg0: (param0: ShaderKey, param1: Patch) => ShaderSupplier)
    // private shaders: ShaderSupplier[];
    forAllShaders(arg0: (param0: ShaderKey, param1: ShaderSupplier) => void): void;
}