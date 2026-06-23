import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CacheableFunction } from '../../../net/minecraft/commands/CacheableFunction.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { LootTable } from '../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class AdvancementRewards extends Record {
    static CODEC: Codec<AdvancementRewards>;
    static EMPTY: AdvancementRewards;
    // private experience: number;
    // private function: Optional<CacheableFunction>;
    // private loot: ResourceKey<LootTable>[];
    // private recipes: ResourceKey<Recipe<any>>[];
    equals(o: Object | null): boolean;
    experience(): number;
    function(): Optional<CacheableFunction>;
    grant(player: ServerPlayer): void;
    hashCode(): number;
    loot(): ResourceKey<LootTable>[];
    recipes(): ResourceKey<Recipe<any>>[];
    toString(): string;
}