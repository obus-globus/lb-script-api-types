import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeCheckerState } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
export abstract class TypeCheckerState$SupertypesPolicy extends Object {
    constructor(arg0: DefaultConstructorMarker)
    transformType(arg0: TypeCheckerState, arg1: KotlinTypeMarker): RigidTypeMarker;
}