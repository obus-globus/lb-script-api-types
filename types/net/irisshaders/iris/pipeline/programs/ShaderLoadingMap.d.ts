import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderKey } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
import type { ShaderSupplier } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderSupplier.d.ts'
export class ShaderLoadingMap extends Object {
    constructor(arg0: (param0: ShaderKey) => ShaderSupplier)
    // private shaders: ShaderSupplier[];
    forAllShaders(arg0: (param0: ShaderKey, param1: ShaderSupplier) => void): void;
}