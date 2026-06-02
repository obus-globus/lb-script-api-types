import type { ValueClassRepresentation } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
export class InlineClassRepresentation<Type extends RigidTypeMarker> extends ValueClassRepresentation<Type> {
    constructor(arg0: Name, arg1: Type)
    readonly underlyingPropertyName: Name;
    readonly underlyingType: Type;
    containsPropertyWithName(arg0: Name): boolean;
    getUnderlyingPropertyName(): Name;
    getUnderlyingType(): Type;
    toString(): string;
}