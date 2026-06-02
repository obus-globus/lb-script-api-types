import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { TypeSystemContext } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
export class AbstractStrictEqualityTypeChecker extends Object {
    static INSTANCE: AbstractStrictEqualityTypeChecker;
    private constructor()
    // private strictEqualRigidTypes(arg0: TypeSystemContext, arg1: RigidTypeMarker, arg2: RigidTypeMarker): boolean;
    strictEqualTypes(arg0: TypeSystemContext, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker): boolean;
    // private strictEqualTypesInternal(arg0: TypeSystemContext, arg1: KotlinTypeMarker, arg2: KotlinTypeMarker): boolean;
}