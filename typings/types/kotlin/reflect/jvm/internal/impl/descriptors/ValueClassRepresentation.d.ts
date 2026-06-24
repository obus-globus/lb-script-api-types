import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
export abstract class ValueClassRepresentation<Type extends RigidTypeMarker> extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    mapUnderlyingType<Other extends SimpleTypeMarker>(arg0: (param0: Type) => Other): ValueClassRepresentation<Other>;
}