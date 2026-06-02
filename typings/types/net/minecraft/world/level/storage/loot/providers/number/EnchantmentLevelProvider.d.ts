import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelBasedValue } from '../../../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class EnchantmentLevelProvider extends Record implements NumberProvider {
    static MAP_CODEC: MapCodec<EnchantmentLevelProvider>;
    static forEnchantmentLevel(paramamount: LevelBasedValue): EnchantmentLevelProvider;
    constructor(amount: LevelBasedValue)
    // private amount: LevelBasedValue;
    amount(): LevelBasedValue;
    codec(): MapCodec<EnchantmentLevelProvider>;
    equals(o: Object | null): boolean;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    hashCode(): number;
    toString(): string;
}