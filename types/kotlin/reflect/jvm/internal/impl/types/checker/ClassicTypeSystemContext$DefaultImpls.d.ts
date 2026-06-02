import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { PrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeCheckerState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { TypeCheckerState$SupertypesPolicy } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState$SupertypesPolicy.d.ts'
import type { ClassicTypeSystemContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/ClassicTypeSystemContext.d.ts'
import type { CaptureStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CaptureStatus.d.ts'
import type { CapturedTypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeConstructorMarker.d.ts'
import type { CapturedTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
import type { DefinitelyNotNullTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/DefinitelyNotNullTypeMarker.d.ts'
import type { DynamicTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/DynamicTypeMarker.d.ts'
import type { FlexibleTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/FlexibleTypeMarker.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeArgumentListMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentListMarker.d.ts'
import type { TypeArgumentMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSubstitutorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSubstitutorMarker.d.ts'
import type { TypeVariableTypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariableTypeConstructorMarker.d.ts'
import type { TypeVariance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariance.d.ts'
export class ClassicTypeSystemContext$DefaultImpls extends Object {
    static areEqualTypeConstructors(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker, paramarg2: TypeConstructorMarker): boolean;
    static argumentsCount(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): number;
    static arrayType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): SimpleTypeMarker;
    static asArgumentList(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): TypeArgumentListMarker;
    static asCapturedType(paramarg0: ClassicTypeSystemContext, paramarg1: SimpleTypeMarker): CapturedTypeMarker;
    static asDefinitelyNotNullType(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): DefinitelyNotNullTypeMarker;
    static asDynamicType(paramarg0: ClassicTypeSystemContext, paramarg1: FlexibleTypeMarker): DynamicTypeMarker;
    static asFlexibleType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): FlexibleTypeMarker;
    static asRigidType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): SimpleTypeMarker;
    static asTypeArgument(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): TypeArgumentMarker;
    static captureFromArguments(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: CaptureStatus): SimpleType;
    static captureStatus(paramarg0: ClassicTypeSystemContext, paramarg1: CapturedTypeMarker): CaptureStatus;
    static createFlexibleType(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: RigidTypeMarker): KotlinTypeMarker;
    static getArgument(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker, paramarg2: number): TypeArgumentMarker;
    static getArguments(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): TypeArgumentMarker[];
    static getBuiltIns(paramarg0: ClassicTypeSystemContext): KotlinBuiltIns;
    static getClassFqNameUnsafe(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): FqNameUnsafe;
    static getParameter(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker, paramarg2: number): TypeParameterMarker;
    static getParameters(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): TypeParameterMarker[];
    static getPrimitiveArrayType(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): PrimitiveType;
    static getPrimitiveType(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): PrimitiveType;
    static getRepresentativeUpperBound(paramarg0: ClassicTypeSystemContext, paramarg1: TypeParameterMarker): KotlinTypeMarker;
    static getType(paramarg0: ClassicTypeSystemContext, paramarg1: TypeArgumentMarker): KotlinTypeMarker;
    static getTypeConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: TypeParameterMarker): TypeConstructorMarker;
    static getTypeParameter(paramarg0: ClassicTypeSystemContext, paramarg1: TypeVariableTypeConstructorMarker): TypeParameterMarker;
    static getTypeParameterClassifier(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): TypeParameterMarker;
    static getUnsubstitutedUnderlyingType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): KotlinTypeMarker;
    static getUpperBounds(paramarg0: ClassicTypeSystemContext, paramarg1: TypeParameterMarker): KotlinTypeMarker[];
    static getVariance(paramarg0: ClassicTypeSystemContext, paramarg1: TypeArgumentMarker): TypeVariance;
    static getVariance(paramarg0: ClassicTypeSystemContext, paramarg1: TypeParameterMarker): TypeVariance;
    static hasAnnotation(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker, paramarg2: FqName): boolean;
    static hasRecursiveBounds(paramarg0: ClassicTypeSystemContext, paramarg1: TypeParameterMarker, paramarg2: TypeConstructorMarker): boolean;
    static identicalArguments(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: RigidTypeMarker): boolean;
    static intersectTypes(paramarg0: ClassicTypeSystemContext, paramarg1: E[]): KotlinTypeMarker;
    static isAnyConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isArrayOrNullableArray(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isClassTypeConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isCommonFinalClassConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isDenotable(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isError(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isInlineClass(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isIntegerLiteralTypeConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isIntersection(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isK2(paramarg0: ClassicTypeSystemContext): boolean;
    static isMarkedNullable(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isNotNullTypeParameter(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isNothingConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isNullableType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isOldCapturedType(paramarg0: ClassicTypeSystemContext, paramarg1: CapturedTypeMarker): boolean;
    static isPrimitiveType(paramarg0: ClassicTypeSystemContext, paramarg1: SimpleTypeMarker): boolean;
    static isProjectionNotNull(paramarg0: ClassicTypeSystemContext, paramarg1: CapturedTypeMarker): boolean;
    static isRawType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isSingleClassifierType(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isStarProjection(paramarg0: ClassicTypeSystemContext, paramarg1: TypeArgumentMarker): boolean;
    static isStubType(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isStubTypeForBuilderInference(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isTypeVariableType(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isUnderKotlinPackage(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static lowerBound(paramarg0: ClassicTypeSystemContext, paramarg1: FlexibleTypeMarker): SimpleTypeMarker;
    static lowerType(paramarg0: ClassicTypeSystemContext, paramarg1: CapturedTypeMarker): KotlinTypeMarker;
    static makeDefinitelyNotNullOrNotNull(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker, paramarg2: boolean): KotlinTypeMarker;
    static newTypeCheckerState(paramarg0: ClassicTypeSystemContext, paramarg1: boolean, paramarg2: boolean, paramarg3: boolean): TypeCheckerState;
    static nullableAnyType(paramarg0: ClassicTypeSystemContext): SimpleTypeMarker;
    static original(paramarg0: ClassicTypeSystemContext, paramarg1: DefinitelyNotNullTypeMarker): SimpleTypeMarker;
    static parametersCount(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): number;
    static possibleIntegerTypes(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): E[];
    static projection(paramarg0: ClassicTypeSystemContext, paramarg1: CapturedTypeConstructorMarker): TypeArgumentMarker;
    static safeSubstitute(paramarg0: ClassicTypeSystemContext, paramarg1: TypeSubstitutorMarker, paramarg2: KotlinTypeMarker): KotlinTypeMarker;
    static substitutionSupertypePolicy(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): TypeCheckerState$SupertypesPolicy;
    static supertypes(paramarg0: ClassicTypeSystemContext, paramarg1: TypeConstructorMarker): E[];
    static typeConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: CapturedTypeMarker): CapturedTypeConstructorMarker;
    static typeConstructor(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker): TypeConstructorMarker;
    static typeSubstitutorForUnderlyingType(paramarg0: ClassicTypeSystemContext, paramarg1: Map<TypeConstructorMarker, Object | null>): TypeSubstitutorMarker;
    static upperBound(paramarg0: ClassicTypeSystemContext, paramarg1: FlexibleTypeMarker): SimpleTypeMarker;
    static withNullability(paramarg0: ClassicTypeSystemContext, paramarg1: KotlinTypeMarker, paramarg2: boolean): KotlinTypeMarker;
    static withNullability(paramarg0: ClassicTypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: boolean): SimpleTypeMarker;
}