import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ProblemReporter$Problem } from '../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class LootTableProvider$MissingTableProblem extends Record implements ProblemReporter$Problem {
    constructor(id: ResourceKey<LootTable>)
    // private id: ResourceKey<LootTable>;
    description(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): ResourceKey<LootTable>;
    toString(): string;
}