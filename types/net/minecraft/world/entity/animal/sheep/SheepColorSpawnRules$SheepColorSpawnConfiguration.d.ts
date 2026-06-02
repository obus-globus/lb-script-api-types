import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { SheepColorSpawnRules$SheepColorProvider } from '../../../../../../net/minecraft/world/entity/animal/sheep/SheepColorSpawnRules$SheepColorProvider.d.ts'
export class SheepColorSpawnRules$SheepColorSpawnConfiguration extends Record {
    private constructor(colors: (param0: RandomSource) => net.minecraft.world.item.DyeColor)
    // private colors: (param0: RandomSource) => net.minecraft.world.item.DyeColor;
    colors(): (param0: RandomSource) => net.minecraft.world.item.DyeColor;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}