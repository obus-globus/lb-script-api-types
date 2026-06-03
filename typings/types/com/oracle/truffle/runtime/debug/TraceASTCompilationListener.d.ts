import type { TruffleCompilerListener$CompilationResultInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$CompilationResultInfo.d.ts'
import type { TruffleCompilerListener$GraphInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$GraphInfo.d.ts'
import type { AbstractCompilationTask } from '../../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { AbstractGraalTruffleRuntimeListener } from '../../../../../com/oracle/truffle/runtime/AbstractGraalTruffleRuntimeListener.d.ts'
import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
import type { TruffleInlining } from '../../../../../com/oracle/truffle/runtime/TruffleInlining.d.ts'
export class TraceASTCompilationListener extends AbstractGraalTruffleRuntimeListener {
    static install(paramruntime: OptimizedTruffleRuntime): void;
    private constructor(runtime: OptimizedTruffleRuntime)
    onCompilationSuccess(target: OptimizedCallTarget, task: AbstractCompilationTask, graphInfo: TruffleCompilerListener$GraphInfo, compilationResultInfo: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationSuccess(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationSuccess(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo, tier: number): void;
}