import type { SandboxCheckerScheduler } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler.d.ts'
import type { SandboxCheckerScheduler$SandboxChecker } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler$SandboxChecker.d.ts'
import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { FutureTask } from '../../../../java/util/concurrent/FutureTask.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxTimeLimitChecker extends SandboxCheckerScheduler$SandboxChecker {
    constructor(scheduler: SandboxCheckerScheduler, context: SandboxContext)
    // private cancelResult: FutureTask<Object>;
    // private timeLimit: Duration;
    checkLimit(): boolean;
}