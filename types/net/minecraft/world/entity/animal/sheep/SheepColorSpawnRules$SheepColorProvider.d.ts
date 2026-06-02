import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
export interface SheepColorSpawnRules$SheepColorProvider extends Object{
    get(random: RandomSource): DyeColor;
}