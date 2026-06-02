import type { AbstractGraalTruffleRuntimeListener } from '../../../../../com/oracle/truffle/runtime/AbstractGraalTruffleRuntimeListener.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
export class JFRListener extends AbstractGraalTruffleRuntimeListener {
    private constructor(runtime: OptimizedTruffleRuntime)
}