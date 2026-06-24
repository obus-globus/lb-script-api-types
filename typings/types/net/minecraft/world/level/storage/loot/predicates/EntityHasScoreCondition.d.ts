import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { IntRange } from '../../../../../../../net/minecraft/world/level/storage/loot/IntRange.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { EntityHasScoreCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/EntityHasScoreCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { Scoreboard } from '../../../../../../../net/minecraft/world/scores/Scoreboard.d.ts'
export class EntityHasScoreCondition extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<EntityHasScoreCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static hasScores(paramtarget: LootContext$EntityTarget): EntityHasScoreCondition$Builder;
    constructor(scores: { [key: string]: IntRange }, entityTarget: LootContext$EntityTarget)
    // private entityTarget: LootContext$EntityTarget;
    // private scores: { [key: string]: IntRange };
    codec(): MapCodec<EntityHasScoreCondition>;
    entityTarget(): LootContext$EntityTarget;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    // private hasScore(context: LootContext, entity: Entity, scoreboard: Scoreboard, objectiveName: string, range: IntRange): boolean;
    hashCode(): number;
    scores(): { [key: string]: IntRange };
    test(context: LootContext): boolean;
    toString(): string;
    validate(context: ValidationContext): void;
}