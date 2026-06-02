import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../../kroppeb/stareval/expression/Expression.d.ts'
import type { VariableExpression } from '../../../../../../kroppeb/stareval/expression/VariableExpression.d.ts'
import type { FunctionContext } from '../../../../../../kroppeb/stareval/function/FunctionContext.d.ts'
import type { FunctionReturn } from '../../../../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../../../../kroppeb/stareval/function/Type.d.ts'
import type { UniformUpdateFrequency } from '../../../../../../net/irisshaders/iris/gl/uniform/UniformUpdateFrequency.d.ts'
export abstract class CachedUniform extends Object implements VariableExpression {
    static forExpression(paramarg0: string, paramarg1: Type, paramarg2: Expression, paramarg3: FunctionContext): CachedUniform;
    constructor(arg0: string, arg1: UniformUpdateFrequency)
    // private changed: boolean;
    readonly name: string;
    readonly updateFrequency: UniformUpdateFrequency;
    doUpdate(): boolean;
    evaluateTo(arg0: FunctionContext, arg1: FunctionReturn): void;
    getName(): string;
    getType(): Type;
    getUpdateFrequency(): UniformUpdateFrequency;
    listVariables(arg0: E[]): void;
    markUnchanged(): void;
    push(arg0: number): void;
    pushIfChanged(arg0: number): void;
    update(): void;
    writeTo(arg0: FunctionReturn): void;
}