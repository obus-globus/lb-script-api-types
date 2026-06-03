import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
export abstract class ValueClassRepresentation<Type extends RigidTypeMarker> extends Object {
    private constructor()
    containsPropertyWithName(arg0: Name): boolean;
    mapUnderlyingType(arg0: (param0: Type) => Other): ValueClassRepresentation<Other>;
}