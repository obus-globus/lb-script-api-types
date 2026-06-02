import type { CompilationTask } from '../../../../com/oracle/truffle/runtime/CompilationTask.d.ts'
import type { FutureTask } from '../../../../java/util/concurrent/FutureTask.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class CompilationTask$ExecutorServiceWrapper extends FutureTask<void> implements Comparable<CompilationTask$ExecutorServiceWrapper> {
    constructor(compileTask: CompilationTask)
    readonly compileTask: CompilationTask;
    compareTo(that: CompilationTask$ExecutorServiceWrapper): number;
    getCompileTask(): CompilationTask;
    toString(): string;
}