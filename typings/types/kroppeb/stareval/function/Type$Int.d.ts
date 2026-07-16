import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConstantExpression } from '../../../kroppeb/stareval/expression/ConstantExpression.d.ts'
import type { FunctionReturn } from '../../../kroppeb/stareval/function/FunctionReturn.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { Type$Boolean } from '../../../kroppeb/stareval/function/Type$Boolean.d.ts'
import type { Type$Float } from '../../../kroppeb/stareval/function/Type$Float.d.ts'
import type { Type$Primitive } from '../../../kroppeb/stareval/function/Type$Primitive.d.ts'
import type { TypedFunction$Parameter } from '../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
import type { UniformType } from '../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
export class Type$Int extends Type$Primitive {
    static AllPrimitives: Type$Primitive[];
    static Boolean: Type$Boolean;
    static BooleanParameter: TypedFunction$Parameter;
    static Float: Type$Float;
    static FloatParameter: TypedFunction$Parameter;
    static Int: Type$Int;
    static IntParameter: TypedFunction$Parameter;
    static convert(paramarg0: Type): UniformType;
    constructor()
    createArray(arg0: number): Object;
    createConstant(arg0: FunctionReturn): ConstantExpression;
    getValueFromArray(arg0: Object, arg1: number, arg2: FunctionReturn): void;
    setValueFromReturn(arg0: Object, arg1: number, arg2: FunctionReturn): void;
    toString(): string;
}