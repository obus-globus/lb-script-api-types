import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { Thread$Builder$OfPlatform } from '../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$FieldHolder } from '../../java/lang/Thread$FieldHolder.d.ts'
import type { Thread$State } from '../../java/lang/Thread$State.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadGroup } from '../../java/lang/ThreadGroup.d.ts'
import type { ThreadLocal$ThreadLocalMap } from '../../java/lang/ThreadLocal$ThreadLocalMap.d.ts'
import type { Duration } from '../../java/time/Duration.d.ts'
import type { Continuation } from '../../jdk/internal/vm/Continuation.d.ts'
import type { StackableScope } from '../../jdk/internal/vm/StackableScope.d.ts'
import type { ThreadContainer } from '../../jdk/internal/vm/ThreadContainer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Interruptible } from '../../sun/nio/ch/Interruptible.d.ts'
export class Thread extends Object implements Runnable {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static dumpStack(): void;
    static enumerate(paramarg0: Thread[]): number;
    static getAllStackTraces(): Map<Thread, StackTraceElement[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    static holdsLock(paramarg0: Object): boolean;
    static interrupted(): boolean;
    static ofPlatform(): Thread$Builder$OfPlatform;
    static ofVirtual(): Thread$Builder$OfVirtual;
    static onSpinWait(): void;
    static setDefaultUncaughtExceptionHandler(paramarg0: (param0: Thread, param1: Throwable) => void): void;
    static sleep(paramarg0: Duration): void;
    static sleep(paramarg0: number): void;
    static sleep(paramarg0: number, paramarg1: number): void;
    static startVirtualThread(paramarg0: () => void): Thread;
    static yield(): void;
    constructor()
    constructor(arg0: () => void)
    constructor(arg0: () => void, arg1: string)
    constructor(arg0: ThreadGroup, arg1: () => void)
    constructor(arg0: ThreadGroup, arg1: () => void, arg2: string)
    constructor(arg0: ThreadGroup, arg1: () => void, arg2: string, arg3: number)
    constructor(arg0: ThreadGroup, arg1: () => void, arg2: string, arg3: number, arg4: boolean)
    constructor(arg0: ThreadGroup, arg1: string)
    constructor(arg0: ThreadGroup, arg1: string, arg2: number, arg3: () => void, arg4: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: boolean)
    // private cont: Continuation;
    // private container: ThreadContainer;
    readonly contextClassLoader: ClassLoader;
    // private eetop: number;
    // private headStackableScopes: StackableScope;
    // private holder: Thread$FieldHolder;
    // private inheritableThreadLocals: ThreadLocal$ThreadLocalMap;
    // private interruptLock: Object;
    interrupted: boolean;
    readonly name: string;
    // private nioBlocker: Interruptible;
    // private parkBlocker: Object;
    // private scopedValueBindings: Object;
    // private threadLocalRandomProbe: number;
    // private threadLocalRandomSecondarySeed: number;
    // private threadLocalRandomSeed: number;
    // private threadLocals: ThreadLocal$ThreadLocalMap;
    // private tid: number;
    alive(): boolean;
    asyncGetStackTrace(): StackTraceElement[];
    blockedOn(arg0: Interruptible): void;
    checkAccess(): void;
    clearInterrupt(): void;
    clearReferences(): void;
    clone(): Object;
    daemon(arg0: boolean): void;
    dispatchUncaughtException(arg0: Throwable): void;
    // private exit(): void;
    getAndClearInterrupt(): boolean;
    getContextClassLoader(): ClassLoader;
    getContinuation(): Continuation;
    getId(): number;
    getName(): string;
    getPriority(): number;
    getStackTrace(): StackTraceElement[];
    // private getStackTrace0(): Object;
    getState(): Thread$State;
    getThreadGroup(): ThreadGroup;
    getUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    headStackableScopes(): StackableScope;
    inheritScopedValueBindings(arg0: ThreadContainer): void;
    inheritableThreadLocals(): ThreadLocal$ThreadLocalMap;
    interrupt(): void;
    // private interrupt0(): void;
    isAlive(): boolean;
    isDaemon(): boolean;
    isInterrupted(): boolean;
    isTerminated(): boolean;
    isVirtual(): boolean;
    join(): void;
    join(arg0: Duration): boolean;
    join(arg0: number): void;
    join(arg0: number, arg1: number): void;
    nioBlocker(): Interruptible;
    priority(arg0: number): void;
    run(): void;
    runWith(arg0: Object, arg1: () => void): void;
    setContextClassLoader(arg0: ClassLoader): void;
    setContinuation(arg0: Continuation): void;
    setCurrentThread(arg0: Thread): void;
    setDaemon(arg0: boolean): void;
    setInheritableThreadLocals(arg0: ThreadLocal$ThreadLocalMap): void;
    setInterrupt(): void;
    setName(arg0: string): void;
    // private setNativeName(arg0: string): void;
    setPriority(arg0: number): void;
    // private setPriority0(arg0: number): void;
    setTerminatingThreadLocals(arg0: ThreadLocal$ThreadLocalMap): void;
    setThreadContainer(arg0: ThreadContainer): void;
    setThreadLocals(arg0: ThreadLocal$ThreadLocalMap): void;
    setUncaughtExceptionHandler(arg0: (param0: Thread, param1: Throwable) => void): void;
    start(): void;
    start(arg0: ThreadContainer): void;
    // private start0(): void;
    stop(): void;
    terminatingThreadLocals(): ThreadLocal$ThreadLocalMap;
    threadContainer(): ThreadContainer;
    threadId(): number;
    threadLocals(): ThreadLocal$ThreadLocalMap;
    threadState(): Thread$State;
    toString(): string;
    uncaughtExceptionHandler(arg0: (param0: Thread, param1: Throwable) => void): void;
}