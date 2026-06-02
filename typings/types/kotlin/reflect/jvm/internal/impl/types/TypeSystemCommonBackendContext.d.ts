import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSubstitutorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSubstitutorMarker.d.ts'
import type { TypeSystemContext } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
export interface TypeSystemCommonBackendContext extends Object, TypeSystemContext{
    arrayType(arg0: KotlinTypeMarker): SimpleTypeMarker;
    getClassFqNameUnsafe(arg0: TypeConstructorMarker): FqNameUnsafe;
    getPrimitiveArrayType(arg0: TypeConstructorMarker): PrimitiveType;
    getPrimitiveType(arg0: TypeConstructorMarker): PrimitiveType;
    getRepresentativeUpperBound(arg0: TypeParameterMarker): KotlinTypeMarker;
    getUnsubstitutedUnderlyingType(arg0: KotlinTypeMarker): KotlinTypeMarker;
    hasAnnotation(arg0: KotlinTypeMarker, arg1: FqName): boolean;
    isArrayOrNullableArray(arg0: KotlinTypeMarker): boolean;
    isInlineClass(arg0: TypeConstructorMarker): boolean;
    isUnderKotlinPackage(arg0: TypeConstructorMarker): boolean;
    makeNullable(arg0: KotlinTypeMarker): KotlinTypeMarker;
    nullableAnyType(): SimpleTypeMarker;
    typeSubstitutorForUnderlyingType(arg0: Map<TypeConstructorMarker, KotlinTypeMarker>): TypeSubstitutorMarker;
}