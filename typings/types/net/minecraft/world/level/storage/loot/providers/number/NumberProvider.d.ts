import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextUser } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export interface NumberProvider extends Object, LootContextUser{
    codec(): MapCodec<NumberProvider>;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    getReferencedContextParams(): ContextKey<Object>[];
    validate(context: ValidationContext): void;
}