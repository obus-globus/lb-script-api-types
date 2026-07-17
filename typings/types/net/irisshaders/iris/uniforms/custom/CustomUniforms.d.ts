import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { FunctionContext } from '../../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { LocationalUniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/LocationalUniformHolder.d.ts'
import type { CustomUniformFixedInputUniformsHolder } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniformFixedInputUniformsHolder.d.ts'
import type { CustomUniforms$Builder$Variable } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms$Builder$Variable.d.ts'
import type { CachedUniform } from '../../../../../net/irisshaders/iris/uniforms/custom/cached/CachedUniform.d.ts'
export class CustomUniforms extends Object implements FunctionContext {
    private constructor(arg0: CustomUniformFixedInputUniformsHolder, arg1: JavaMap<string, CustomUniforms$Builder$Variable>)
    // private dependsOn: JavaMap<CachedUniform, CachedUniform[]>;
    // private inputHolder: CustomUniformFixedInputUniformsHolder;
    // private locationMap: JavaMap<Object, JavaMap<any, any>>;
    // private uniformOrder: CachedUniform[];
    // private variables: JavaMap<string, CachedUniform>;
    // private variablesExpressions: JavaMap<string, Expression>;
    // private addVariable(arg0: Expression, arg1: CachedUniform): void;
    assignTo(arg0: LocationalUniformHolder): void;
    getVariable(arg0: string): Expression;
    hasVariable(arg0: string): boolean;
    mapholderToPass(arg0: LocationalUniformHolder, arg1: Object): void;
    optimise(): void;
    push(arg0: Object): void;
    update(): void;
}