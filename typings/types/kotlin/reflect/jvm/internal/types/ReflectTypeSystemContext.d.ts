import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState$SupertypesPolicy } from '../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState$SupertypesPolicy.d.ts'
import type { CaptureStatus } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/CaptureStatus.d.ts'
import type { CapturedTypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeConstructorMarker.d.ts'
import type { CapturedTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
import type { DefinitelyNotNullTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/DefinitelyNotNullTypeMarker.d.ts'
import type { DynamicTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/DynamicTypeMarker.d.ts'
import type { FlexibleTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/FlexibleTypeMarker.d.ts'
import type { KotlinTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeArgumentListMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentListMarker.d.ts'
import type { TypeArgumentMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSubstitutorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSubstitutorMarker.d.ts'
import type { TypeSystemContext } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
import type { TypeVariableTypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariableTypeConstructorMarker.d.ts'
import type { TypeVariance } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariance.d.ts'
export class ReflectTypeSystemContext extends Object implements TypeSystemContext {
    static INSTANCE: ReflectTypeSystemContext;
    areEqualTypeConstructors(c1: TypeConstructorMarker, c2: TypeConstructorMarker): boolean;
    argumentsCount(arg0: KotlinTypeMarker): number;
    asArgumentList(arg0: RigidTypeMarker): TypeArgumentListMarker;
    asCapturedType(arg0: SimpleTypeMarker): CapturedTypeMarker;
    asCapturedTypeUnwrappingDnn(arg0: RigidTypeMarker): CapturedTypeMarker;
    asDefinitelyNotNullType(arg0: RigidTypeMarker): DefinitelyNotNullTypeMarker;
    asDynamicType(arg0: FlexibleTypeMarker): DynamicTypeMarker;
    asFlexibleType(arg0: KotlinTypeMarker): FlexibleTypeMarker;
    asRigidType(arg0: KotlinTypeMarker): RigidTypeMarker;
    asTypeArgument(arg0: KotlinTypeMarker): TypeArgumentMarker;
    captureFromArguments(type: RigidTypeMarker, status: CaptureStatus): RigidTypeMarker | null;
    captureFromExpression(type: KotlinTypeMarker): KotlinTypeMarker | null;
    captureStatus(arg0: CapturedTypeMarker): CaptureStatus;
    createEmptySubstitutor(): TypeSubstitutorMarker;
    get(arg0: TypeArgumentListMarker, arg1: number): TypeArgumentMarker;
    getArgument(arg0: KotlinTypeMarker, arg1: number): TypeArgumentMarker;
    getArgumentOrNull(arg0: RigidTypeMarker, arg1: number): TypeArgumentMarker;
    getParameter(arg0: TypeConstructorMarker, arg1: number): TypeParameterMarker;
    getType(arg0: TypeArgumentMarker): KotlinTypeMarker;
    getTypeConstructor(arg0: TypeParameterMarker): TypeConstructorMarker;
    getTypeParameter(arg0: TypeVariableTypeConstructorMarker): TypeParameterMarker;
    getTypeParameterClassifier(arg0: TypeConstructorMarker): TypeParameterMarker;
    getVariance(arg0: TypeArgumentMarker): TypeVariance;
    getVariance(arg0: TypeParameterMarker): TypeVariance;
    hasFlexibleNullability(arg0: KotlinTypeMarker): boolean;
    hasRecursiveBounds(arg0: TypeParameterMarker, arg1: TypeConstructorMarker): boolean;
    identicalArguments(arg0: RigidTypeMarker, arg1: RigidTypeMarker): boolean;
    intersectTypes(types: KotlinTypeMarker[]): KotlinTypeMarker;
    intersectTypes(types: SimpleTypeMarker[]): SimpleTypeMarker;
    isAnyConstructor(arg0: TypeConstructorMarker): boolean;
    isCapturedType(arg0: KotlinTypeMarker): boolean;
    isClassType(arg0: RigidTypeMarker): boolean;
    isClassTypeConstructor(arg0: TypeConstructorMarker): boolean;
    isCommonFinalClassConstructor(arg0: TypeConstructorMarker): boolean;
    isDefinitelyNotNullType(arg0: KotlinTypeMarker): boolean;
    isDefinitelyNotNullType(arg0: RigidTypeMarker): boolean;
    isDenotable(arg0: TypeConstructorMarker): boolean;
    isDynamic(arg0: KotlinTypeMarker): boolean;
    isError(arg0: KotlinTypeMarker): boolean;
    isFlexible(arg0: KotlinTypeMarker): boolean;
    isFlexibleWithDifferentTypeConstructors(arg0: KotlinTypeMarker): boolean;
    isIntegerLiteralType(arg0: RigidTypeMarker): boolean;
    isIntegerLiteralTypeConstructor(arg0: TypeConstructorMarker): boolean;
    isIntersection(arg0: TypeConstructorMarker): boolean;
    isMarkedNullable(arg0: KotlinTypeMarker): boolean;
    isNotNullTypeParameter(arg0: KotlinTypeMarker): boolean;
    isNothing(arg0: KotlinTypeMarker): boolean;
    isNothingConstructor(arg0: TypeConstructorMarker): boolean;
    isNullableType(arg0: KotlinTypeMarker): boolean;
    isOldCapturedType(arg0: CapturedTypeMarker): boolean;
    isPrimitiveType(arg0: SimpleTypeMarker): boolean;
    isProjectionNotNull(arg0: CapturedTypeMarker): boolean;
    isRawType(arg0: KotlinTypeMarker): boolean;
    isSingleClassifierType(arg0: RigidTypeMarker): boolean;
    isStarProjection(arg0: TypeArgumentMarker): boolean;
    isStubType(arg0: RigidTypeMarker): boolean;
    isStubTypeForBuilderInference(arg0: RigidTypeMarker): boolean;
    isTypeVariableType(arg0: KotlinTypeMarker): boolean;
    lowerBound(arg0: FlexibleTypeMarker): RigidTypeMarker;
    lowerBoundIfFlexible(arg0: KotlinTypeMarker): RigidTypeMarker;
    lowerType(arg0: CapturedTypeMarker): KotlinTypeMarker;
    makeDefinitelyNotNullOrNotNull(arg0: KotlinTypeMarker): KotlinTypeMarker;
    makeDefinitelyNotNullOrNotNull(arg0: KotlinTypeMarker, arg1: boolean): KotlinTypeMarker;
    original(arg0: DefinitelyNotNullTypeMarker): SimpleTypeMarker;
    originalIfDefinitelyNotNullable(arg0: RigidTypeMarker): SimpleTypeMarker;
    parametersCount(arg0: TypeConstructorMarker): number;
    projection(arg0: CapturedTypeConstructorMarker): TypeArgumentMarker;
    safeSubstitute(arg0: TypeSubstitutorMarker, arg1: KotlinTypeMarker): KotlinTypeMarker;
    size(arg0: TypeArgumentListMarker): number;
    substitutionSupertypePolicy(type: RigidTypeMarker): TypeCheckerState$SupertypesPolicy;
    typeConstructor(arg0: CapturedTypeMarker): CapturedTypeConstructorMarker;
    typeConstructor(arg0: KotlinTypeMarker): TypeConstructorMarker;
    typeConstructor(arg0: RigidTypeMarker): TypeConstructorMarker;
    typeSubstitutorByTypeConstructor(map: Map<TypeConstructorMarker, KotlinTypeMarker>): TypeSubstitutorMarker;
    upperBound(arg0: FlexibleTypeMarker): RigidTypeMarker;
    upperBoundIfFlexible(arg0: KotlinTypeMarker): RigidTypeMarker;
    withNullability(arg0: KotlinTypeMarker, arg1: boolean): KotlinTypeMarker;
    withNullability(arg0: RigidTypeMarker, arg1: boolean): RigidTypeMarker;
}