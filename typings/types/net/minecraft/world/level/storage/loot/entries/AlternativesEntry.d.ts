import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProblemReporter$Problem } from '../../../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { AlternativesEntry$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/AlternativesEntry$Builder.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { CompositeEntryBase } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/CompositeEntryBase.d.ts'
import type { CompositeEntryBase$CompositeEntryConstructor } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/CompositeEntryBase$CompositeEntryConstructor.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class AlternativesEntry extends CompositeEntryBase {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static MAP_CODEC: MapCodec<AlternativesEntry>;
    static NO_CHILDREN_PROBLEM: ProblemReporter$Problem;
    static UNREACHABLE_PROBLEM: ProblemReporter$Problem;
    static alternatives(paramitems: (Object | null)[], paramprovider: (param0: Object | null) => LootPoolEntryContainer$Builder<any>): AlternativesEntry$Builder;
    static alternatives(...paramentries: Object | null): AlternativesEntry$Builder;
    static createCodec(paramconstructor: (param0: LootPoolEntryContainer[], param1: LootItemCondition[]) => CompositeEntryBase | null): MapCodec<CompositeEntryBase>;
    constructor(children: LootPoolEntryContainer[], conditions: LootItemCondition[])
    codec(): MapCodec<AlternativesEntry>;
    compose(entries: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean[]): (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    validate(context: ValidationContext): void;
}