import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderGetter$Provider } from '../../../../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext$VisitedEntry } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext$VisitedEntry.d.ts'
import type { LootParams } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class LootContext extends Object {
    static createVisitedEntry(paramtable: LootTable): LootContext$VisitedEntry<LootTable>;
    static createVisitedEntry(paramtable: LootItemFunction): LootContext$VisitedEntry<LootItemFunction>;
    static createVisitedEntry(paramtable: LootItemCondition): LootContext$VisitedEntry<LootItemCondition>;
    private constructor(params: LootParams, random: RandomSource, lootDataResolver: HolderGetter$Provider)
    // private lootDataResolver: HolderGetter$Provider;
    // private params: LootParams;
    readonly random: RandomSource;
    // private visitedElements: LootContext$VisitedEntry<any>[];
    addDynamicDrops(location: Identifier, output: (param0: ItemStack) => void): void;
    getLevel(): ServerLevel;
    getLuck(): number;
    getOptionalParameter<T extends Object | number | string | boolean>(key: ContextKey<T>): T;
    getParameter<T extends Object | number | string | boolean>(key: ContextKey<T>): T;
    getRandom(): RandomSource;
    getResolver(): HolderGetter$Provider;
    hasParameter(key: ContextKey<Object>): boolean;
    hasVisitedElement(element: LootContext$VisitedEntry<any>): boolean;
    popVisitedElement(element: LootContext$VisitedEntry<any>): void;
    pushVisitedElement(element: LootContext$VisitedEntry<any>): boolean;
}