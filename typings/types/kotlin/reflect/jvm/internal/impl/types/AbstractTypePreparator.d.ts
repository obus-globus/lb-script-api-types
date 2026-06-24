import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
export abstract class AbstractTypePreparator extends Object {
    constructor()
    clearTypeFromUnnecessaryAttributes(arg0: RigidTypeMarker): RigidTypeMarker;
    prepareType(arg0: KotlinTypeMarker): KotlinTypeMarker;
}