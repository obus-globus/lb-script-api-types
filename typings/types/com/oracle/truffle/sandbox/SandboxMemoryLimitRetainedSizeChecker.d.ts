import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxMemoryLimitRetainedSizeChecker$Result } from '../../../../com/oracle/truffle/sandbox/SandboxMemoryLimitRetainedSizeChecker$Result.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxMemoryLimitRetainedSizeChecker extends Object implements Callable<SandboxMemoryLimitRetainedSizeChecker$Result> {
    constructor(context: SandboxContext, memoryLimitCheckerInvocationNumber: number)
    // private context: SandboxContext;
    // private memoryLimitCheckerInvocationNumber: number;
    call(): SandboxMemoryLimitRetainedSizeChecker$Result;
}