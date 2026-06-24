import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { TypeArgumentListMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentListMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSystemContext } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
import type { TypeVariance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeVariance.d.ts'
export class AbstractTypeChecker extends Object {
    static INSTANCE: AbstractTypeChecker;
    static RUN_SLOW_ASSERTIONS: boolean;
    private constructor()
    // private checkSubtypeForIntegerLiteralType(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker, arg3: RigidTypeMarker): boolean;
    // private checkSubtypeForSpecialCases(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker, arg3: RigidTypeMarker): boolean;
    // private collectAllSupertypesWithGivenTypeConstructor(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker, arg3: TypeConstructorMarker): RigidTypeMarker[];
    // private collectAndFilter(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker, arg3: TypeConstructorMarker): RigidTypeMarker[];
    // private completeIsSubTypeOf(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: KotlinTypeMarker, arg3: KotlinTypeMarker, arg4: boolean): boolean;
    effectiveVariance(arg0: TypeVariance, arg1: TypeVariance): TypeVariance;
    equalTypes(arg0: TypeCheckerState, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker): boolean;
    // private filterOutEquivalentSupertypesWithSameConstructor(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker[]): RigidTypeMarker[];
    findCorrespondingSupertypes(arg0: TypeCheckerState, arg1: RigidTypeMarker, arg2: TypeConstructorMarker): RigidTypeMarker[];
    findCorrespondingSupertypes(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker, arg3: TypeConstructorMarker): RigidTypeMarker[];
    // private getTypeParameterForArgumentInBaseIfItEqualToTarget(arg0: TypeSystemContext, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker): TypeParameterMarker;
    // private hasNothingSupertype(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker): boolean;
    // private isCommonDenotableType(arg0: TypeSystemContext, arg1: KotlinTypeMarker): boolean;
    // private isStubTypeSubtypeOfAnother(arg0: TypeSystemContext, arg1: RigidTypeMarker, arg2: RigidTypeMarker): boolean;
    isSubtypeForSameConstructor(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: TypeArgumentListMarker, arg3: RigidTypeMarker): boolean;
    // private isSubtypeForSameConstructorWithIntersectedTypeArguments(arg0: TypeSystemContext, arg1: TypeCheckerState, arg2: RigidTypeMarker, arg3: RigidTypeMarker, arg4: TypeConstructorMarker, arg5: RigidTypeMarker[]): boolean;
    isSubtypeOf(arg0: TypeCheckerState, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker): boolean;
    isSubtypeOf(arg0: TypeCheckerState, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker, arg3: boolean): boolean;
    // private isSubtypeOfForSingleClassifierType(arg0: TypeCheckerState, arg1: TypeSystemContext, arg2: RigidTypeMarker, arg3: RigidTypeMarker): boolean;
    // private isTypeVariableAgainstStarProjectionForSelfType(arg0: TypeSystemContext, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker, arg3: TypeConstructorMarker): boolean;
    // private selectOnlyPureKotlinSupertypes(arg0: TypeSystemContext, arg1: RigidTypeMarker[]): RigidTypeMarker[];
}