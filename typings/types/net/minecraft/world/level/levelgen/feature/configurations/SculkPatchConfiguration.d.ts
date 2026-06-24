import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class SculkPatchConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<SculkPatchConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(chargeCount: number, amountPerCharge: number, spreadAttempts: number, growthRounds: number, spreadRounds: number, extraRareGrowths: IntProvider, catalystChance: number)
    // private amountPerCharge: number;
    // private catalystChance: number;
    // private chargeCount: number;
    // private extraRareGrowths: IntProvider;
    // private growthRounds: number;
    // private spreadAttempts: number;
    // private spreadRounds: number;
    amountPerCharge(): number;
    catalystChance(): number;
    chargeCount(): number;
    equals(o: Object | null): boolean;
    extraRareGrowths(): IntProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    growthRounds(): number;
    hashCode(): number;
    spreadAttempts(): number;
    spreadRounds(): number;
    toString(): string;
}