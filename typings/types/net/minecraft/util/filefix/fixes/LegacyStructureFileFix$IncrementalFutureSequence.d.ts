import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LegacyStructureFileFix$IncrementalFutureSequence extends Object {
    constructor(maxConcurrency: number)
    // private futures: CompletableFuture<Object>[];
    // private maxConcurrency: number;
    push(future: CompletableFuture<Object>): number;
    waitForAll(): number;
    // private waitOnAny(): number;
}