import type { JavaMap } from '../../../../JavaMap.d.ts'
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
    static allTypeParameters(self: Class<Object>): TypeVariable<any>[];
    static computeVisibilityForJavaModifiers(self: number): KVisibility | null;
    static getPurelyImplementedSupertype(kClass: KClassImpl<Object>): KType | null;
    static isEnumValuesValueOfMethod(self: Member): boolean;
    static isMappedBuiltin(paramarg0: KClass<Object>): boolean;
    static toKType(self: Type, knownTypeParameters: JavaMap<TypeVariable<any>, KTypeParameter>, nullability: TypeNullability, isForAnnotationParameter: boolean, replaceNonArrayArgumentsWithStarProjections: boolean, howThisTypeIsUsed: TypeUsage): KType;
    static toKTypeParameters(self: TypeVariable<any>[], container: KTypeParameterOwnerImpl): KTypeParameter[];
}