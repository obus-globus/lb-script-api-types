import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FluidPredicate } from '../../../../net/minecraft/advancements/criterion/FluidPredicate.d.ts'
import type { StatePropertiesPredicate } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class FluidPredicate$Builder extends Object {
    static fluid(): FluidPredicate$Builder;
    private constructor()
    // private fluids: Optional<Holder<Fluid>[]>;
    // private properties: Optional<StatePropertiesPredicate>;
    build(): FluidPredicate;
    of(fluids: Holder<Fluid>[]): FluidPredicate$Builder;
    of(fluid: Fluid): FluidPredicate$Builder;
    setProperties(properties: StatePropertiesPredicate): FluidPredicate$Builder;
}