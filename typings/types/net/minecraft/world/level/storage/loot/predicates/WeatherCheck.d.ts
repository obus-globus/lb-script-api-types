import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { WeatherCheck$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/WeatherCheck$Builder.d.ts'
export class WeatherCheck extends Record implements LootItemCondition {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<WeatherCheck>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static weather(): WeatherCheck$Builder;
    constructor(isRaining: Optional<boolean>, isThundering: Optional<boolean>)
    // private isRaining: Optional<boolean>;
    // private isThundering: Optional<boolean>;
    codec(): MapCodec<WeatherCheck>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isRaining(): Optional<boolean>;
    isThundering(): Optional<boolean>;
    test(context: LootContext): boolean;
    toString(): string;
}