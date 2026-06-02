import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LocationPredicate } from '../../../../net/minecraft/advancements/criterion/LocationPredicate.d.ts'
export class EntityPredicate$LocationWrapper extends Record {
    static CODEC: MapCodec<EntityPredicate$LocationWrapper>;
    constructor(located: Optional<LocationPredicate>, steppingOn: Optional<LocationPredicate>, affectsMovement: Optional<LocationPredicate>)
    // private affectsMovement: Optional<LocationPredicate>;
    // private located: Optional<LocationPredicate>;
    // private steppingOn: Optional<LocationPredicate>;
    affectsMovement(): Optional<LocationPredicate>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    located(): Optional<LocationPredicate>;
    steppingOn(): Optional<LocationPredicate>;
    toString(): string;
}