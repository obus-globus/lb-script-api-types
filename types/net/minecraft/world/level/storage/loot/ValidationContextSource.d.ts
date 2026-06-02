import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderGetter$Provider } from '../../../../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { ProblemReporter } from '../../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { ValidationContext } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export class ValidationContextSource extends Object {
    constructor(reporter: ProblemReporter, lootData: HolderGetter$Provider)
    // private entityContext: ValidationContext;
    // private lootData: HolderGetter$Provider;
    // private reporter: ProblemReporter;
    context(params: ContextKeySet): ValidationContext;
    entityContext(): ValidationContext;
}