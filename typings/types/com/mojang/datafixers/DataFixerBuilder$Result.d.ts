import type { DSL$TypeReference } from '../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { DataFixer } from '../../../com/mojang/datafixers/DataFixer.d.ts'
import type { DataFixerBuilder } from '../../../com/mojang/datafixers/DataFixerBuilder.d.ts'
import type { DataFixerUpper } from '../../../com/mojang/datafixers/DataFixerUpper.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFixerBuilder$Result extends Object {
    constructor(null_: DataFixerBuilder, arg1: DataFixerUpper)
    // private fixerUpper: DataFixerUpper;
    fixer(): DataFixer;
    optimize(arg0: DSL$TypeReference[], arg1: Executor): CompletableFuture<Object>;
}