import type { BackgroundCompileQueue } from '../../../../com/oracle/truffle/runtime/BackgroundCompileQueue.d.ts'
import type { BackgroundCompileQueue$JoinableThreadFactory } from '../../../../com/oracle/truffle/runtime/BackgroundCompileQueue$JoinableThreadFactory.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BackgroundCompileQueue$TruffleCompilerThreadFactory extends Object implements BackgroundCompileQueue$JoinableThreadFactory {
    constructor(null_: BackgroundCompileQueue, namePrefix: string, runtime: OptimizedTruffleRuntime, compilerThreadStackSize: number)
    // private compilerThreadStackSize: number;
    // private namePrefix: string;
    // private runtime: OptimizedTruffleRuntime;
    // private threads: Thread[];
    joinOtherThreads(timeout: number, unit: TimeUnit): boolean;
    newThread(r: () => void): Thread;
}