import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { WaterFluid } from '../../../../../net/minecraft/world/level/material/WaterFluid.d.ts'
export class WaterFluid$Flowing extends WaterFluid {
    static FALLING: BooleanProperty;
    static FLUID_STATE_REGISTRY: FluidState[];
    static LEVEL: IntegerProperty;
    constructor()
    createFluidStateDefinition(builder: StateDefinition$Builder<Fluid, FluidState>): void;
    getAmount(fluidState: FluidState): number;
    isSource(fluidState: FluidState): boolean;
}