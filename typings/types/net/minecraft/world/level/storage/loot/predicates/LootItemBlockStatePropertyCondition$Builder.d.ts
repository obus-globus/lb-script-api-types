import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StatePropertiesPredicate } from '../../../../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate.d.ts'
import type { StatePropertiesPredicate$Builder } from '../../../../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate$Builder.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class LootItemBlockStatePropertyCondition$Builder extends Object implements LootItemCondition$Builder {
    constructor(block: Block)
    // private block: Holder<Block>;
    // private properties: Optional<StatePropertiesPredicate>;
    and(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AllOfCondition$Builder;
    build(): LootItemCondition;
    invert(): () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
    or(other: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): AnyOfCondition$Builder;
    setProperties(properties: StatePropertiesPredicate$Builder): LootItemBlockStatePropertyCondition$Builder;
}