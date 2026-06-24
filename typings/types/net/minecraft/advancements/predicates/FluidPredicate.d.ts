import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StatePropertiesPredicate } from '../../../../net/minecraft/advancements/predicates/StatePropertiesPredicate.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class FluidPredicate extends Record {
    static CODEC: Codec<FluidPredicate>;
    constructor(fluids: Optional<Holder<Fluid>[]>, properties: Optional<StatePropertiesPredicate>)
    // private fluids: Optional<Holder<Fluid>[]>;
    // private properties: Optional<StatePropertiesPredicate>;
    equals(o: Object | null): boolean;
    fluids(): Optional<Holder<Fluid>[]>;
    hashCode(): number;
    matches(level: ServerLevel, pos: BlockPos): boolean;
    properties(): Optional<StatePropertiesPredicate>;
    toString(): string;
}