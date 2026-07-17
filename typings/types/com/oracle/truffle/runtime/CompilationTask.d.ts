import type { AbstractCompilationTask } from '../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { BackgroundCompileQueue$Priority } from '../../../../com/oracle/truffle/runtime/BackgroundCompileQueue$Priority.d.ts'
import type { CompilationTask$SubmissionReason } from '../../../../com/oracle/truffle/runtime/CompilationTask$SubmissionReason.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class CompilationTask extends AbstractCompilationTask implements Callable<void>, Comparable<CompilationTask> {
    private constructor(priority: BackgroundCompileQueue$Priority, targetRef: WeakReference<OptimizedCallTarget>, action: (param0: CompilationTask) => void, id: number, submissionReason: CompilationTask$SubmissionReason)
}