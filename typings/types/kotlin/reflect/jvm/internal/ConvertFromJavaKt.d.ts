import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { TypeNullability } from '../../../../kotlin/reflect/jvm/internal/TypeNullability.d.ts'
export class ConvertFromJavaKt extends Object {
    static allTypeParameters(paramarg0: Class<Object>): TypeVariable<Object>[];
    static toKType(paramarg0: Type, paramarg1: Map<TypeVariable<Object>, KTypeParameter>, paramarg2: TypeNullability, paramarg3: boolean): KType;
    static toKTypeParameters(paramarg0: Object | null): KTypeParameter[];
}