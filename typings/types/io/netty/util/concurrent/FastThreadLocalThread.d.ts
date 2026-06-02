import type { InternalThreadLocalMap } from '../../../../io/netty/util/internal/InternalThreadLocalMap.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Thread$Builder$OfPlatform } from '../../../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FastThreadLocalThread extends Thread {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static currentThreadHasFastThreadLocal(): boolean;
    static currentThreadWillCleanupFastThreadLocals(): boolean;
    static dumpStack(): void;
    static enumerate(paramarg0: (Object | null)[]): number;
    static getAllStackTraces(): Map<Thread, (Object | null)[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    static holdsLock(paramarg0: Object): boolean;
    static interrupted(): boolean;
    static ofPlatform(): Thread$Builder$OfPlatform;
    static ofVirtual(): Thread$Builder$OfVirtual;
    static onSpinWait(): void;
    static runWithFastThreadLocal(paramarg0: () => void): void;
    static setDefaultUncaughtExceptionHandler(paramarg0: (param0: Thread, param1: Throwable) => void): void;
    static sleep(paramarg0: Duration): void;
    static sleep(paramarg0: number): void;
    static sleep(paramarg0: number, paramarg1: number): void;
    static startVirtualThread(paramarg0: () => void): Thread;
    static willCleanupFastThreadLocals(paramarg0: Thread): boolean;
    static yield(): void;
    constructor()
    constructor(arg0: () => void)
    constructor(arg0: () => void, arg1: string)
    constructor(arg0: ThreadGroup, arg1: () => void)
    constructor(arg0: ThreadGroup, arg1: () => void, arg2: string)
    constructor(arg0: ThreadGroup, arg1: () => void, arg2: string, arg3: number)
    constructor(arg0: ThreadGroup, arg1: string)
    constructor(arg0: string)
    // private cleanupFastThreadLocals: boolean;
    readonly threadLocalMap: InternalThreadLocalMap;
    permitBlockingCalls(): boolean;
    setThreadLocalMap(arg0: InternalThreadLocalMap): void;
    threadLocalMap(): InternalThreadLocalMap;
    willCleanupFastThreadLocals(): boolean;
}