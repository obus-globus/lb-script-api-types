import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextUser } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export interface NbtProvider extends Object, LootContextUser{
    codec(): MapCodec<NbtProvider>;
    get(context: LootContext): Tag;
    getReferencedContextParams(): ContextKey<Object>[];
    validate(context: ValidationContext): void;
}