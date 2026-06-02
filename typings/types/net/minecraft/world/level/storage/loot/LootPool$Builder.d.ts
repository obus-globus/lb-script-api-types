import type { ImmutableList$Builder } from '../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricLootPoolBuilder } from '../../../../../../net/fabricmc/fabric/api/loot/v3/FabricLootPoolBuilder.d.ts'
import type { LootPool } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { FunctionUserBuilder } from '../../../../../../net/minecraft/world/level/storage/loot/functions/FunctionUserBuilder.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemFunction$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction$Builder.d.ts'
import type { ConditionUserBuilder } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/ConditionUserBuilder.d.ts'
import type { LootItemCondition } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
import type { NumberProvider } from '../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class LootPool$Builder extends Object implements FabricLootPoolBuilder, FunctionUserBuilder<LootPool$Builder>, ConditionUserBuilder<LootPool$Builder> {
    static copyOf(paramarg0: LootPool): LootPool$Builder;
    constructor()
    // private bonusRolls: NumberProvider;
    // private conditions: ImmutableList$Builder<LootItemCondition>;
    // private entries: ImmutableList$Builder<LootPoolEntryContainer>;
    // private functions: ImmutableList$Builder<LootItemFunction>;
    // private rolls: NumberProvider;
    add(arg0: E[]): LootPool$Builder;
    add(arg0: LootPoolEntryContainer): LootPool$Builder;
    add(arg0: E[]): LootPool$Builder;
    add(arg0: LootPoolEntryContainer): LootPool$Builder;
    add(entry: LootPoolEntryContainer$Builder<Object>): LootPool$Builder;
    apply(arg0: E[]): LootPool$Builder;
    apply(arg0: LootItemFunction): LootPool$Builder;
    apply(arg0: E[]): LootPool$Builder;
    apply(arg0: LootItemFunction): LootPool$Builder;
    apply(function_: LootItemFunction$Builder): LootPool$Builder;
    apply<T extends FunctionUserBuilder<T>>(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    apply<T extends FunctionUserBuilder<T>>(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): T;
    build(): LootPool;
    // private self(): LootPool$Builder;
    setBonusRolls(bonusRolls: NumberProvider): LootPool$Builder;
    setRolls(rolls: NumberProvider): LootPool$Builder;
    unwrap(): LootPool$Builder;
    when(arg0: E[]): LootPool$Builder;
    when(arg0: LootItemCondition): LootPool$Builder;
    when(arg0: E[]): LootPool$Builder;
    when(arg0: LootItemCondition): LootPool$Builder;
    when(condition: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): LootPool$Builder;
    when<T extends ConditionUserBuilder<T>>(collection: E[], conditionProvider: (param0: E) => () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition): T;
}