import type { TruffleCompilable } from '../../../../com/oracle/truffle/compiler/TruffleCompilable.d.ts'
import type { TruffleCompilationTask } from '../../../../com/oracle/truffle/compiler/TruffleCompilationTask.d.ts'
import type { TruffleCompilerListener$CompilationResultInfo } from '../../../../com/oracle/truffle/compiler/TruffleCompilerListener$CompilationResultInfo.d.ts'
import type { TruffleCompilerListener$GraphInfo } from '../../../../com/oracle/truffle/compiler/TruffleCompilerListener$GraphInfo.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleCompilerListener extends Object {
    onCompilationRetry(compilable: TruffleCompilable, task: TruffleCompilationTask): void;
    onFailure(compilable: TruffleCompilable, reason: string, bailout: boolean, permanentBailout: boolean, tier: number, lazyStackTrace: () => string): void;
    onGraalTierFinished(compilable: TruffleCompilable, graph: TruffleCompilerListener$GraphInfo): void;
    onSuccess(compilable: TruffleCompilable, task: TruffleCompilationTask, graph: TruffleCompilerListener$GraphInfo, compilationResultInfo: TruffleCompilerListener$CompilationResultInfo, tier: number): void;
    onTruffleTierFinished(compilable: TruffleCompilable, task: TruffleCompilationTask, graph: TruffleCompilerListener$GraphInfo): void;
}