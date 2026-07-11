import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { UniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { CustomUniformFixedInputUniformsHolder } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniformFixedInputUniformsHolder.d.ts'
import type { CustomUniforms } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
import type { CustomUniforms$Builder$Variable } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms$Builder$Variable.d.ts'
export class CustomUniforms$Builder extends Object {
    constructor()
    // private variables: { [key: string]: CustomUniforms$Builder$Variable };
    addVariable(arg0: string, arg1: string, arg2: string, arg3: boolean): void;
    build(...arg0: (param0: UniformHolder) => void[]): CustomUniforms;
    build(arg0: CustomUniformFixedInputUniformsHolder): CustomUniforms;
}