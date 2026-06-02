import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class LootItemKilledByPlayerCondition extends Object implements LootItemCondition {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<LootItemKilledByPlayerCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static killedByPlayer(): () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
    private constructor()
    codec(): MapCodec<LootItemKilledByPlayerCondition>;
    getReferencedContextParams(): ContextKey<Object>[];
    test(context: LootContext): boolean;
}