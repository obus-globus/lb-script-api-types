import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CaptureStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CaptureStatus.d.ts'
import type { CapturedTypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeConstructorMarker.d.ts'
import type { CapturedTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
import type { FlexibleTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/FlexibleTypeMarker.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeArgumentListMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentListMarker.d.ts'
import type { TypeArgumentMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSystemContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
import type { TypeVariableTypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariableTypeConstructorMarker.d.ts'
import type { TypeVariance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariance.d.ts'
export class TypeSystemContextContextualKt extends Object {
    static argumentsCount(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): number;
    static asArgumentList(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): TypeArgumentListMarker;
    static asCapturedTypeUnwrappingDnn(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): CapturedTypeMarker;
    static asFlexibleType(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): FlexibleTypeMarker;
    static asRigidType(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): RigidTypeMarker;
    static asTypeArgument(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): TypeArgumentMarker;
    static captureStatus(paramarg0: TypeSystemContext, paramarg1: CapturedTypeMarker): CaptureStatus;
    static fastCorrespondingSupertypes(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: TypeConstructorMarker): SimpleTypeMarker[];
    static get(paramarg0: TypeSystemContext, paramarg1: TypeArgumentListMarker, paramarg2: number): TypeArgumentMarker;
    static getArgument(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker, paramarg2: number): TypeArgumentMarker;
    static getArgumentOrNull(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: number): TypeArgumentMarker;
    static getParameter(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker, paramarg2: number): TypeParameterMarker;
    static getType(paramarg0: TypeSystemContext, paramarg1: TypeArgumentMarker): KotlinTypeMarker;
    static getTypeParameter(paramarg0: TypeSystemContext, paramarg1: TypeVariableTypeConstructorMarker): TypeParameterMarker;
    static getVariance(paramarg0: TypeSystemContext, paramarg1: TypeArgumentMarker): TypeVariance;
    static getVariance(paramarg0: TypeSystemContext, paramarg1: TypeParameterMarker): TypeVariance;
    static hasRecursiveBounds(paramarg0: TypeSystemContext, paramarg1: TypeParameterMarker, paramarg2: TypeConstructorMarker): boolean;
    static isAnyConstructor(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isCapturedType(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isClassType(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isClassTypeConstructor(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isCommonFinalClassConstructor(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isDefinitelyNotNullType(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isDefinitelyNotNullType(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isDenotable(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isDynamic(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isError(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isFlexible(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isFlexibleWithDifferentTypeConstructors(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isIntegerLiteralType(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isIntegerLiteralTypeConstructor(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isIntersection(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isMarkedNullable(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isNotNullTypeParameter(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): boolean;
    static isNothingConstructor(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): boolean;
    static isOldCapturedType(paramarg0: TypeSystemContext, paramarg1: CapturedTypeMarker): boolean;
    static isSingleClassifierType(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isStarProjection(paramarg0: TypeSystemContext, paramarg1: TypeArgumentMarker): boolean;
    static isStubType(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static isStubTypeForBuilderInference(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): boolean;
    static lowerBound(paramarg0: TypeSystemContext, paramarg1: FlexibleTypeMarker): RigidTypeMarker;
    static lowerBoundIfFlexible(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): RigidTypeMarker;
    static lowerType(paramarg0: TypeSystemContext, paramarg1: CapturedTypeMarker): KotlinTypeMarker;
    static makeDefinitelyNotNullOrNotNull(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): KotlinTypeMarker;
    static originalIfDefinitelyNotNullable(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): SimpleTypeMarker;
    static parametersCount(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): number;
    static possibleIntegerTypes(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): KotlinTypeMarker[];
    static projection(paramarg0: TypeSystemContext, paramarg1: CapturedTypeConstructorMarker): TypeArgumentMarker;
    static size(paramarg0: TypeSystemContext, paramarg1: TypeArgumentListMarker): number;
    static supertypes(paramarg0: TypeSystemContext, paramarg1: TypeConstructorMarker): KotlinTypeMarker[];
    static typeConstructor(paramarg0: TypeSystemContext, paramarg1: CapturedTypeMarker): CapturedTypeConstructorMarker;
    static typeConstructor(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): TypeConstructorMarker;
    static typeConstructor(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker): TypeConstructorMarker;
    static upperBoundIfFlexible(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker): RigidTypeMarker;
    static withNullability(paramarg0: TypeSystemContext, paramarg1: KotlinTypeMarker, paramarg2: boolean): KotlinTypeMarker;
    static withNullability(paramarg0: TypeSystemContext, paramarg1: RigidTypeMarker, paramarg2: boolean): RigidTypeMarker;
}