import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FuelValueEvents$Context } from '../../../../../net/fabricmc/fabric/api/registry/FuelValueEvents$Context.d.ts'
import type { FuelValues$Builder } from '../../../../../net/minecraft/world/level/block/entity/FuelValues$Builder.d.ts'
export interface FuelValueEvents$ExclusionsCallback extends Object{
    buildExclusions(arg0: FuelValues$Builder, arg1: FuelValueEvents$Context): void;
}