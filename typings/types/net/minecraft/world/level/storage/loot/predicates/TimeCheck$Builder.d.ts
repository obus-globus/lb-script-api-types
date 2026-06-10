import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { WorldClock } from '../../../../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { IntRange } from '../../../../../../../net/minecraft/world/level/storage/loot/IntRange.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
import type { TimeCheck } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/TimeCheck.d.ts'
export class TimeCheck$Builder extends Object implements LootItemCondition$Builder {
    constructor(clock: Holder<WorldClock>, value: IntRange)
    // private clock: Holder<WorldClock>;
    // private period: Optional<number>;
    // private value: IntRange;
    and(other: () => LootItemCondition): AllOfCondition$Builder;
    build(): TimeCheck;
    invert(): () => LootItemCondition;
    or(other: () => LootItemCondition): AnyOfCondition$Builder;
    setPeriod(period: number): TimeCheck$Builder;
}