import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { Type$Boolean } from '../../../kroppeb/stareval/function/Type$Boolean.d.ts'
import type { Type$Float } from '../../../kroppeb/stareval/function/Type$Float.d.ts'
import type { Type$Int } from '../../../kroppeb/stareval/function/Type$Int.d.ts'
import type { TypedFunction$Parameter } from '../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
import type { UniformType } from '../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
export abstract class Type$Primitive extends Type {
    static AllPrimitives: Type$Primitive[];
    static Boolean: Type$Boolean;
    static BooleanParameter: TypedFunction$Parameter;
    static Float: Type$Float;
    static FloatParameter: TypedFunction$Parameter;
    static Int: Type$Int;
    static IntParameter: TypedFunction$Parameter;
    static convert(paramarg0: Type): UniformType;
    constructor()
}