import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KClassImpl } from '../../../../kotlin/reflect/jvm/internal/KClassImpl.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { TypeNullability } from '../../../../kotlin/reflect/jvm/internal/TypeNullability.d.ts'
import type { TypeUsage } from '../../../../kotlin/reflect/jvm/internal/TypeUsage.d.ts'
export class ConvertFromJavaKt extends Object {
    static allTypeParameters(paramarg0: Class<Object>): TypeVariable<any>[];
    static computeVisibilityForJavaModifiers(paramarg0: number): KVisibility;
    static getPurelyImplementedSupertype(paramarg0: KClassImpl<Object>): KType;
    static isEnumValuesValueOfMethod(paramarg0: Member): boolean;
    static isMappedBuiltin(paramarg0: KClass<Object>): boolean;
    static toKType(paramarg0: Type, paramarg1: Map<TypeVariable<any>, KTypeParameter>, paramarg2: TypeNullability, paramarg3: boolean, paramarg4: boolean, paramarg5: TypeUsage): KType;
    static toKTypeParameters(paramarg0: Object | null, paramarg1: KTypeParameterOwnerImpl): KTypeParameter[];
}