import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProblemReporter$Problem } from '../../../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { CompositeEntryBase } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/CompositeEntryBase.d.ts'
import type { CompositeEntryBase$CompositeEntryConstructor } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/CompositeEntryBase$CompositeEntryConstructor.d.ts'
import type { EntryGroup$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/EntryGroup$Builder.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class EntryGroup extends CompositeEntryBase {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
    static MAP_CODEC: MapCodec<EntryGroup>;
    static NO_CHILDREN_PROBLEM: ProblemReporter$Problem;
    static createCodec(paramconstructor: (param0: Object | null, param1: LootPoolEntryContainer[]) => unknown): MapCodec<Object>;
    static list(paramentries: Object | null): EntryGroup$Builder;
    constructor(children: LootPoolEntryContainer[], conditions: LootItemCondition[])
    codec(): MapCodec<EntryGroup>;
    compose(entries: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean[]): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => kotlin.Boolean;
}