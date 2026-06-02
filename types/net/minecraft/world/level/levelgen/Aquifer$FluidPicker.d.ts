import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Aquifer$FluidStatus } from '../../../../../net/minecraft/world/level/levelgen/Aquifer$FluidStatus.d.ts'
export interface Aquifer$FluidPicker extends Object{
    computeFluid(blockX: number, blockY: number, blockZ: number): Aquifer$FluidStatus;
}