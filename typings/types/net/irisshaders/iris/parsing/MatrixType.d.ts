import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
import type { Type$Boolean } from '../../../../kroppeb/stareval/function/Type$Boolean.d.ts'
import type { Type$Float } from '../../../../kroppeb/stareval/function/Type$Float.d.ts'
import type { Type$Int } from '../../../../kroppeb/stareval/function/Type$Int.d.ts'
import type { Type$ObjectType } from '../../../../kroppeb/stareval/function/Type$ObjectType.d.ts'
import type { TypedFunction$Parameter } from '../../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
import type { UniformType } from '../../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
import type { Matrix2f } from '../../../../org/joml/Matrix2f.d.ts'
import type { Matrix3f } from '../../../../org/joml/Matrix3f.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
export class MatrixType<T extends Object | number | string | boolean> extends Type$ObjectType {
    static AllPrimitives: (Object | null)[];
    static Boolean: Type$Boolean;
    static BooleanParameter: TypedFunction$Parameter;
    static Float: Type$Float;
    static FloatParameter: TypedFunction$Parameter;
    static Int: Type$Int;
    static IntParameter: TypedFunction$Parameter;
    static MAT2: MatrixType<Matrix2f>;
    static MAT3: MatrixType<Matrix3f>;
    static MAT4: MatrixType<Matrix4f>;
    static convert(paramarg0: Type): UniformType;
    constructor(arg0: string, arg1: () => T)
    // private name: string;
    toString(): string;
}