import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { LootContextArg } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { NbtProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
export class ContextNbtProvider extends Object implements NbtProvider {
    static INLINE_CODEC: Codec<ContextNbtProvider>;
    static MAP_CODEC: MapCodec<ContextNbtProvider>;
    static forContextEntity(paramsource: LootContext$EntityTarget): NbtProvider;
    private constructor(source: LootContextArg<Tag>)
    // private source: LootContextArg<Tag>;
    codec(): MapCodec<ContextNbtProvider>;
    get(context: LootContext): Tag;
    getReferencedContextParams(): ContextKey<Object>[];
}