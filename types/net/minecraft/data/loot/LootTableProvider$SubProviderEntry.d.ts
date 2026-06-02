import type { Record } from '../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LootTableSubProvider } from '../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ContextKeySet } from '../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { LootTable$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class LootTableProvider$SubProviderEntry extends Record {
    constructor(provider: (param0: HolderLookup$Provider) => (param0: (param0: Object | null, param1: LootTable$Builder) => void) => void, paramSet: ContextKeySet)
    // private paramSet: ContextKeySet;
    // private provider: (param0: HolderLookup$Provider) => (param0: (param0: Object | null, param1: LootTable$Builder) => void) => void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    paramSet(): ContextKeySet;
    provider(): (param0: HolderLookup$Provider) => (param0: (param0: Object | null, param1: LootTable$Builder) => void) => void;
    toString(): string;
}