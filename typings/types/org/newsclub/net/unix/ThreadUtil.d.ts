import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThreadUtil extends Object {
    static checkNotInterruptedOrThrow(): boolean;
    static isVirtualThread(): boolean;
    static isVirtualThreadSupported(): boolean;
    static newVirtualThreadPerTaskExecutor(): ExecutorService;
    static runOnSystemThread(paramarg0: () => void): void;
    static setTreatAsVirtualThread(paramarg0: boolean): void;
    static startNewDaemonThread(paramarg0: boolean, paramarg1: () => void): Thread;
    private constructor()
}