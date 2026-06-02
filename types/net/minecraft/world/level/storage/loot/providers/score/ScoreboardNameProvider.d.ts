import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextUser } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { ScoreHolder } from '../../../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export interface ScoreboardNameProvider extends Object, LootContextUser{
    codec(): MapCodec<ScoreboardNameProvider>;
    getReferencedContextParams(): ContextKey<Object>[];
    getScoreHolder(context: LootContext): ScoreHolder;
    validate(context: ValidationContext): void;
}