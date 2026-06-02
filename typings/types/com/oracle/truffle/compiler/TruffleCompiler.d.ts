import type { TruffleCompilable } from '../../../../com/oracle/truffle/compiler/TruffleCompilable.d.ts'
import type { TruffleCompilationTask } from '../../../../com/oracle/truffle/compiler/TruffleCompilationTask.d.ts'
import type { TruffleCompilerListener } from '../../../../com/oracle/truffle/compiler/TruffleCompilerListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleCompiler extends Object{
    doCompile(task: TruffleCompilationTask, compilable: TruffleCompilable, listener: TruffleCompilerListener): void;
    initialize(compilable: TruffleCompilable, firstInitialization: boolean): void;
    shutdown(): void;
}