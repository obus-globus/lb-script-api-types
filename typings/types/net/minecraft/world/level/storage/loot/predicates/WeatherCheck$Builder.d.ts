import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
import type { WeatherCheck } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/WeatherCheck.d.ts'
export class WeatherCheck$Builder extends Object implements LootItemCondition$Builder {
    constructor()
    // private isRaining: Optional<boolean>;
    // private isThundering: Optional<boolean>;
    and(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AllOfCondition$Builder;
    build(): WeatherCheck;
    invert(): () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
    or(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AnyOfCondition$Builder;
    setRaining(raining: boolean): WeatherCheck$Builder;
    setThundering(thundering: boolean): WeatherCheck$Builder;
}