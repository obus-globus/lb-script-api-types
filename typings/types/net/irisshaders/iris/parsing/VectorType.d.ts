import type { Type } from '../../../../kroppeb/stareval/function/Type.d.ts'
import type { Type$Boolean } from '../../../../kroppeb/stareval/function/Type$Boolean.d.ts'
import type { Type$Float } from '../../../../kroppeb/stareval/function/Type$Float.d.ts'
import type { Type$Int } from '../../../../kroppeb/stareval/function/Type$Int.d.ts'
import type { Type$ObjectType } from '../../../../kroppeb/stareval/function/Type$ObjectType.d.ts'
import type { Type$Primitive } from '../../../../kroppeb/stareval/function/Type$Primitive.d.ts'
import type { TypedFunction$Parameter } from '../../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
import type { UniformType } from '../../../../net/irisshaders/iris/gl/uniform/UniformType.d.ts'
import type { VectorType$ArrayVector } from '../../../../net/irisshaders/iris/parsing/VectorType$ArrayVector.d.ts'
import type { VectorType$JOMLVector } from '../../../../net/irisshaders/iris/parsing/VectorType$JOMLVector.d.ts'
import type { Vector2f } from '../../../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../../../org/joml/Vector2i.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../../../org/joml/Vector3i.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
import type { Vector4i } from '../../../../org/joml/Vector4i.d.ts'
export abstract class VectorType extends Type$ObjectType {
    static AllArrayVectorTypes: VectorType$ArrayVector[];
    static AllPrimitives: Type$Primitive[];
    static AllVectorTypes: VectorType[];
    static B_VEC2: VectorType;
    static B_VEC3: VectorType;
    static B_VEC4: VectorType;
    static Boolean: Type$Boolean;
    static BooleanParameter: TypedFunction$Parameter;
    static Float: Type$Float;
    static FloatParameter: TypedFunction$Parameter;
    static I_VEC2: VectorType$JOMLVector<Vector2i>;
    static I_VEC3: VectorType$JOMLVector<Vector3i>;
    static I_VEC4: VectorType$JOMLVector<Vector4i>;
    static Int: Type$Int;
    static IntParameter: TypedFunction$Parameter;
    static VEC2: VectorType$JOMLVector<Vector2f>;
    static VEC3: VectorType$JOMLVector<Vector3f>;
    static VEC4: VectorType$JOMLVector<Vector4f>;
    static convert(paramarg0: Type): UniformType;
    static of(paramarg0: Type$Primitive, paramarg1: number): VectorType;
    constructor()
}