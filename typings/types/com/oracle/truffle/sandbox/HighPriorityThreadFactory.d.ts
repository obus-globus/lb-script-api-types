import type { TruffleInstrument$Env } from '../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HighPriorityThreadFactory extends Object implements ThreadFactory {
    constructor(env: TruffleInstrument$Env, baseName: string)
    constructor(baseName: string)
    // private baseName: string;
    // private env: TruffleInstrument$Env;
    // private threadCounter: AtomicLong;
    newThread(r: () => void): Thread;
}