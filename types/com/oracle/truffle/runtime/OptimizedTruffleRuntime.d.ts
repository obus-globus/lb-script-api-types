import type { TruffleRuntime } from '../../../../com/oracle/truffle/api/TruffleRuntime.d.ts'
import type { TruffleCompilerRuntime } from '../../../../com/oracle/truffle/compiler/TruffleCompilerRuntime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OptimizedTruffleRuntime extends Object implements TruffleRuntime, TruffleCompilerRuntime {
}