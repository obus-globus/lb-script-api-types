import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Reference } from '../../../../../../java/lang/ref/Reference.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugProtocolServerImpl$OneTimeExecutor extends Object implements Executor {
    constructor(env: TruffleInstrument$Env, threadName: string)
    // private env: TruffleInstrument$Env;
    // private shutDown: boolean;
    // private thread: Reference<Thread>;
    // private threadName: string;
    execute(command: () => void): void;
    shutDownAndJoin(): void;
}