import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class SheepColorSpawnRules extends Object {
    static getSheepColor(parambiome: Holder<Biome>, paramrandom: RandomSource): DyeColor;
    constructor()
}