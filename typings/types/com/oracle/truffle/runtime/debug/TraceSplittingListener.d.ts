import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { TruffleCompilationTask } from '../../../../../com/oracle/truffle/compiler/TruffleCompilationTask.d.ts'
import type { TruffleCompilerListener$CompilationResultInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$CompilationResultInfo.d.ts'
import type { TruffleCompilerListener$GraphInfo } from '../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$GraphInfo.d.ts'
import type { AbstractCompilationTask } from '../../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { EngineData } from '../../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedDirectCallNode } from '../../../../../com/oracle/truffle/runtime/OptimizedDirectCallNode.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
import type { OptimizedTruffleRuntimeListener } from '../../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntimeListener.d.ts'
import type { TruffleInlining } from '../../../../../com/oracle/truffle/runtime/TruffleInlining.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class TraceSplittingListener extends Object implements OptimizedTruffleRuntimeListener {
    static addASTSizeProperty(paramtarget: OptimizedCallTarget, paramproperties: { [key: string]: Object }): void;
    static install(paramruntime: OptimizedTruffleRuntime): void;
    static isPermanentFailure(parambailout: boolean, parampermanentBailout: boolean): boolean;
    private constructor()
    // private splitCount: number;
    onCompilationDeoptimized(target: OptimizedCallTarget, frame: Frame): void;
    onCompilationDeoptimized(target: OptimizedCallTarget, frame: Frame, reason: string): void;
    onCompilationDequeued(target: OptimizedCallTarget, source: Object, reason: CharSequence, tier: number): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean, tier: number): void;
    onCompilationFailed(target: OptimizedCallTarget, reason: string, bailout: boolean, permanentBailout: boolean, tier: number, lazyStackTrace: () => string): void;
    onCompilationGraalTierFinished(target: OptimizedCallTarget, graph: TruffleCompilerListener$GraphInfo): void;
    onCompilationInvalidated(target: OptimizedCallTarget, source: Object, reason: CharSequence): void;
    onCompilationQueued(target: OptimizedCallTarget, tier: number): void;
    onCompilationSplit(callNode: OptimizedDirectCallNode): void;
    onCompilationSplitFailed(callNode: OptimizedDirectCallNode, reason: CharSequence): void;
    onCompilationStarted(target: OptimizedCallTarget, task: TruffleCompilationTask): void;
    onCompilationStarted(target: OptimizedCallTarget, task: AbstractCompilationTask): void;
    onCompilationStarted(target: OptimizedCallTarget, tier: number): void;
    onCompilationSuccess(target: OptimizedCallTarget, task: AbstractCompilationTask, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationSuccess(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo): void;
    onCompilationSuccess(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo, result: TruffleCompilerListener$CompilationResultInfo, tier: number): void;
    onCompilationTruffleTierFinished(target: OptimizedCallTarget, task: AbstractCompilationTask, graph: TruffleCompilerListener$GraphInfo): void;
    onCompilationTruffleTierFinished(target: OptimizedCallTarget, inliningDecision: TruffleInlining, graph: TruffleCompilerListener$GraphInfo): void;
    onEngineClosed(runtimeData: EngineData): void;
    onProfileReset(target: OptimizedCallTarget): void;
    onShutdown(): void;
}