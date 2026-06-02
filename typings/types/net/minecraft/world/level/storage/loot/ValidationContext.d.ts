import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderGetter$Provider } from '../../../../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ProblemReporter } from '../../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { ProblemReporter$Problem } from '../../../../../../net/minecraft/util/ProblemReporter$Problem.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { LootContextUser } from '../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
export class ValidationContext extends Object {
    constructor(reporter: ProblemReporter, contextKeySet: ContextKeySet)
    private constructor(reporter: ProblemReporter, contextKeySet: ContextKeySet, resolver: Optional<HolderGetter$Provider>, visitedElements: ResourceKey<Object>[])
    constructor(reporter: ProblemReporter, contextKeySet: ContextKeySet, resolver: HolderGetter$Provider)
    // private contextKeySet: ContextKeySet;
    // private reporter: ProblemReporter;
    // private resolver: Optional<HolderGetter$Provider>;
    // private visitedElements: ResourceKey<Object>[];
    allowsReferences(): boolean;
    enterElement(subContext: () => kotlin.String, element: ResourceKey<Object>): ValidationContext;
    forChild(subContext: () => kotlin.String): ValidationContext;
    forField(name: string): ValidationContext;
    forIndexedField(name: string, index: number): ValidationContext;
    forMapField(name: string, key: string): ValidationContext;
    hasVisitedElement(element: ResourceKey<Object>): boolean;
    reportProblem(description: ProblemReporter$Problem): void;
    reporter(): ProblemReporter;
    resolver(): HolderGetter$Provider;
    validateContextUsage(lootContextUser: LootContextUser): void;
}