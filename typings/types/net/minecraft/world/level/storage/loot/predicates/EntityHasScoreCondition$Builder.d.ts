import type { ImmutableMap$Builder } from '../../../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IntRange } from '../../../../../../../net/minecraft/world/level/storage/loot/IntRange.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class EntityHasScoreCondition$Builder extends Object implements LootItemCondition$Builder {
    constructor(entityTarget: LootContext$EntityTarget)
    // private entityTarget: LootContext$EntityTarget;
    // private scores: ImmutableMap$Builder<string, IntRange>;
    and(other: () => LootItemCondition): AllOfCondition$Builder;
    build(): LootItemCondition;
    invert(): () => LootItemCondition;
    or(other: () => LootItemCondition): AnyOfCondition$Builder;
    withScore(score: string, bounds: IntRange): EntityHasScoreCondition$Builder;
}