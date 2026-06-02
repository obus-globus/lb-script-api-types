import type { TruffleCompilable } from '../../../../com/oracle/truffle/compiler/TruffleCompilable.d.ts'
import type { AbstractCompilationTask } from '../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleInlining extends Object {
    constructor(task: AbstractCompilationTask)
    // private task: AbstractCompilationTask;
    addInlinedTarget(target: TruffleCompilable): void;
    addTargetToDequeue(target: TruffleCompilable): void;
    countCalls(): number;
    countInlinedCalls(): number;
    dequeueTargets(): void;
    inlinedTargets(): TruffleCompilable[];
    setCallCounts(total: number, inlined: number): void;
}