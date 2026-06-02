import type { ThreadLocalAction } from '../../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { SafepointStackSampler$CollectionResult } from '../../../../../com/oracle/truffle/tools/profiler/SafepointStackSampler$CollectionResult.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
export class SafepointStackSampler$SampleAction extends ThreadLocalAction {
    constructor(null_: SafepointStackSampler$SampleAction, index: number)
    // private completed: Map<Thread, SafepointStackSampler$CollectionResult>;
    // private index: number;
    // private useSyntheticFrames: boolean;
    getStacks(): SafepointStackSampler$CollectionResult[];
    perform(access: ThreadLocalAction$Access): void;
    reset(): void;
    toString(): string;
}