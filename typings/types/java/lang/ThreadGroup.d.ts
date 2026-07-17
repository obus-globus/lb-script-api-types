import type { JavaMap } from '../../JavaMap.d.ts'
import type { PrintStream } from '../../java/io/PrintStream.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { WeakReference } from '../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ThreadGroup extends Object implements Thread$UncaughtExceptionHandler {
    constructor(arg0: ThreadGroup, arg1: string)
    constructor(arg0: ThreadGroup, arg1: string, arg2: number, arg3: boolean)
    constructor(arg0: string)
    readonly daemon: boolean;
    // private groups: ThreadGroup[];
    readonly maxPriority: number;
    readonly name: string;
    // private ngroups: number;
    // private nweaks: number;
    readonly parent: ThreadGroup;
    // private weaks: WeakReference<ThreadGroup>[];
    activeCount(): number;
    activeGroupCount(): number;
    checkAccess(): void;
    destroy(): void;
    enumerate(arg0: Thread[]): number;
    enumerate(arg0: Thread[], arg1: boolean): number;
    enumerate(arg0: ThreadGroup[]): number;
    enumerate(arg0: ThreadGroup[], arg1: boolean): number;
    // private enumerate(arg0: ThreadGroup[], arg1: number, arg2: boolean): number;
    getMaxPriority(): number;
    getName(): string;
    getParent(): ThreadGroup;
    interrupt(): void;
    isDaemon(): boolean;
    isDestroyed(): boolean;
    list(): void;
    // private list(arg0: JavaMap<ThreadGroup, Thread[]>, arg1: PrintStream, arg2: number): void;
    parentOf(arg0: ThreadGroup): boolean;
    // private removeWeak(arg0: number): void;
    setDaemon(arg0: boolean): void;
    setMaxPriority(arg0: number): void;
    // private subgroups(): ThreadGroup[];
    // private subgroupsAsArray(): ThreadGroup[];
    // private synchronizedAddStrong(arg0: ThreadGroup): void;
    // private synchronizedAddWeak(arg0: ThreadGroup): void;
    // private synchronizedSubgroups(): ThreadGroup[];
    toString(): string;
    uncaughtException(arg0: Thread, arg1: Throwable): void;
}