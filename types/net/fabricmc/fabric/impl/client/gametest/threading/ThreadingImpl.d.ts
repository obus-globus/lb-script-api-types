import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { Phaser } from '../../../../../../../java/util/concurrent/Phaser.d.ts'
import type { Semaphore } from '../../../../../../../java/util/concurrent/Semaphore.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
import type { FailableRunnable } from '../../../../../../../org/apache/commons/lang3/function/FailableRunnable.d.ts'
export class ThreadingImpl extends Object {
    static CLIENT_SEMAPHORE: Semaphore;
    static PHASER: Phaser;
    static PHASE_CLIENT_TASKS: number;
    static PHASE_SERVER_TASKS: number;
    static PHASE_TEST: number;
    static PHASE_TICK: number;
    static SERVER_SEMAPHORE: Semaphore;
    static TEST_SEMAPHORE: Semaphore;
    static clientCanAcceptTasks: boolean;
    static isClientRunning: boolean;
    static isServerRunning: boolean;
    static serverCanAcceptTasks: boolean;
    static taskToRun: () => void;
    static testFailureException: Throwable;
    static testThread: Thread;
    static checkOnGametestThread(paramarg0: string): void;
    static enterPhase(paramarg0: number): void;
    static getCurrentPhase(): number;
    static isGameCrashed(): boolean;
    static runOnClient(paramarg0: () => void): void;
    static runOnServer(paramarg0: () => void): void;
    static runTestThread(paramarg0: () => void): void;
    static runTick(): void;
    static setGameCrashed(): void;
    private constructor()
}