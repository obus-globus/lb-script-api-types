import type { ImmutableList$Builder } from '../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricLootTableBuilder } from '../../../../../../net/fabricmc/fabric/api/loot/v3/FabricLootTableBuilder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { LootPool } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool.d.ts'
import type { LootPool$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { FunctionUserBuilder } from '../../../../../../net/minecraft/world/level/storage/loot/functions/FunctionUserBuilder.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemFunction$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction$Builder.d.ts'
export class LootTable$Builder extends Object implements FabricLootTableBuilder, FunctionUserBuilder<LootTable$Builder> {
    static copyOf(paramarg0: LootTable): LootTable$Builder;
    constructor()
    // private functions: ImmutableList$Builder<LootItemFunction>;
    // private paramSet: ContextKeySet;
    // private pools: ImmutableList$Builder<LootPool>;
    // private randomSequence: Optional<Identifier>;
    apply(arg0: LootItemFunction[]): LootTable$Builder;
    apply(arg0: LootItemFunction): LootTable$Builder;
    apply<E extends unknown>(collection: E[], functionProvider: (param0: E) => LootItemFunction$Builder): LootTable$Builder;
    apply(arg0: (Object | null)[]): LootTable$Builder;
    apply(function_: LootItemFunction$Builder): LootTable$Builder;
    build(): LootTable;
    modifyPools(arg0: (param0: LootPool$Builder) => void): LootTable$Builder;
    modifyPools(arg0: (param0: Object) => void): LootTable$Builder;
    pool(arg0: LootPool): LootTable$Builder;
    pools(arg0: LootPool[]): LootTable$Builder;
    pools(arg0: (Object | null)[]): LootTable$Builder;
    // private self(): LootTable$Builder;
    setParamSet(paramSet: ContextKeySet): LootTable$Builder;
    setRandomSequence(key: Identifier): LootTable$Builder;
    unwrap(): LootTable$Builder;
    withPool(pool: LootPool$Builder): LootTable$Builder;
}