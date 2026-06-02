import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { WaterFluid } from '../../../../../net/minecraft/world/level/material/WaterFluid.d.ts'
export class WaterFluid$Source extends WaterFluid {
    static FALLING: BooleanProperty;
    static FLUID_STATE_REGISTRY: FluidState[];
    static LEVEL: IntegerProperty;
    constructor()
    getAmount(fluidState: FluidState): number;
    isSource(fluidState: FluidState): boolean;
}