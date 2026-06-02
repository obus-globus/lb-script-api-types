import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { TypeCheckerState$SupertypesPolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState$SupertypesPolicy.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
export class AbstractNullabilityChecker extends Object {
    static INSTANCE: AbstractNullabilityChecker;
    private constructor()
    hasNotNullSupertype(arg0: TypeCheckerState, arg1: RigidTypeMarker, arg2: TypeCheckerState$SupertypesPolicy): boolean;
    hasPathByNotMarkedNullableNodes(arg0: TypeCheckerState, arg1: RigidTypeMarker, arg2: TypeConstructorMarker): boolean;
    // private isApplicableAsEndNode(arg0: TypeCheckerState, arg1: RigidTypeMarker, arg2: TypeConstructorMarker): boolean;
    isPossibleSubtype(arg0: TypeCheckerState, arg1: RigidTypeMarker, arg2: RigidTypeMarker): boolean;
    // private runIsPossibleSubtype(arg0: TypeCheckerState, arg1: RigidTypeMarker, arg2: RigidTypeMarker): boolean;
}