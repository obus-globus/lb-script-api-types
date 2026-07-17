import type { SandboxCheckerScheduler$SandboxChecker } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler$SandboxChecker.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxCheckerScheduler extends Object implements Runnable {
    constructor(instrument: SandboxInstrument, checkedLimit: string)
    // private checkedLimit: string;
    // private condition: Condition;
    // private instrument: SandboxInstrument;
    // private lock: ReentrantLock;
    // private paused: boolean;
    // private queue: SandboxCheckerScheduler$SandboxChecker[];
    // private schedulerTerminated: boolean;
    // private startCount: AtomicLong;
    // private terminationCount: AtomicLong;
    pause(): void;
    resume(): void;
    run(): void;
    scheduleChecker(checker: SandboxCheckerScheduler$SandboxChecker): boolean;
}