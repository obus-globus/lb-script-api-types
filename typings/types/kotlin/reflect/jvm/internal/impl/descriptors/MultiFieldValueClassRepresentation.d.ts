import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { ValueClassRepresentation } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
export class MultiFieldValueClassRepresentation<Type extends RigidTypeMarker> extends ValueClassRepresentation<Type> {
    constructor(arg0: Pair<Name, Type>[])
    // private map: JavaMap<Name, Type>;
    readonly underlyingPropertyNamesToTypes: Pair<Name, Type>[];
    getUnderlyingPropertyNamesToTypes(): Pair<Name, Type>[];
    toString(): string;
}