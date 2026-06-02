import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { LavaFluid } from '../../../../../net/minecraft/world/level/material/LavaFluid.d.ts'
export class LavaFluid$Flowing extends LavaFluid {
    static FALLING: BooleanProperty;
    static FLUID_STATE_REGISTRY: FluidState[];
    static LEVEL: IntegerProperty;
    static LIGHT_EMISSION: number;
    static MIN_LEVEL_CUTOFF: number;
    constructor()
    createFluidStateDefinition(builder: StateDefinition$Builder<Fluid, FluidState>): void;
    getAmount(fluidState: FluidState): number;
    isSource(fluidState: FluidState): boolean;
}