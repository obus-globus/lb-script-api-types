import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleCompilerListener$CompilationResultInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$CompilationResultInfo.d.ts'
import type { TruffleCompilerListener$GraphInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$GraphInfo.d.ts'
import type { AbstractCompilationTask } from '../../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { AbstractGraalTruffleRuntimeListener } from '../../../../../com/oracle/truffle/runtime/AbstractGraalTruffleRuntimeListener.d.ts'
import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
import type { TraceCompilationListener$Times } from '../../../../../com/oracle/truffle/runtime/debug/TraceCompilationListener$Times.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class TraceCompilationListener extends AbstractGraalTruffleRuntimeListener {
    static COUNT_THRESHOLD_FORMAT: string;
    static TIER_FORMAT: string;
    static install(paramruntime: OptimizedTruffleRuntime): void;
    private constructor(runtime: OptimizedTruffleRuntime)
    // private currentCompilation: ThreadLocal<TraceCompilationListener$Times>;
    // private compilationTime(): string;
    // private inlinedAndDispatched(target: OptimizedCallTarget, task: AbstractCompilationTask): number[];
    // private log(target: OptimizedCallTarget, message: string): void;
    onCompilationDeoptimized(target: OptimizedCallTarget, frame: Frame): void;
    onCompilationDequeued(target: OptimizedCallTarget, source: Object, reason: CharSequence, tier: number): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean, tier: number, lazyStackTrace: () => string): void;
    onCompilationInvalidated(target: OptimizedCallTarget, source: Object, reason: CharSequence): void;
    onCompilationQueued(target: OptimizedCallTarget, tier: number): void;
    onCompilationStarted(target: OptimizedCallTarget, task: AbstractCompilationTask): void;
    onCompilationSuccess(target: OptimizedCallTarget, task: AbstractCompilationTask, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationTruffleTierFinished(target: OptimizedCallTarget, task: AbstractCompilationTask, graph: TruffleCompilerListener$GraphInfo): void;
    // private safeSourceSection(target: OptimizedCallTarget): SourceSection;
    // private safeTargetName(target: OptimizedCallTarget): string;
}