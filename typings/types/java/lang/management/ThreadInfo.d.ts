import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Thread$State } from '../../../java/lang/Thread$State.d.ts'
import type { LockInfo } from '../../../java/lang/management/LockInfo.d.ts'
import type { MonitorInfo } from '../../../java/lang/management/MonitorInfo.d.ts'
import type { CompositeData } from '../../../javax/management/openmbean/CompositeData.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ThreadInfo extends Object {
    static from(paramarg0: CompositeData): ThreadInfo;
    private constructor(arg0: Thread, arg1: number, arg2: Object, arg3: Thread, arg4: number, arg5: number, arg6: number, arg7: number, arg8: StackTraceElement[])
    private constructor(arg0: Thread, arg1: number, arg2: Object, arg3: Thread, arg4: number, arg5: number, arg6: number, arg7: number, arg8: StackTraceElement[], arg9: Object[], arg10: number[], arg11: Object[])
    private constructor(arg0: CompositeData)
    readonly blockedCount: number;
    readonly blockedTime: number;
    readonly daemon: boolean;
    readonly inNative: boolean;
    // private lock: LockInfo;
    readonly lockName: string;
    readonly lockOwnerId: number;
    readonly lockOwnerName: string;
    readonly lockedMonitors: MonitorInfo[];
    readonly lockedSynchronizers: LockInfo[];
    readonly priority: number;
    readonly stackTrace: StackTraceElement[];
    readonly suspended: boolean;
    readonly threadId: number;
    readonly threadName: string;
    readonly threadState: Thread$State;
    readonly waitedCount: number;
    readonly waitedTime: number;
    getBlockedCount(): number;
    getBlockedTime(): number;
    getLockInfo(): LockInfo;
    getLockName(): string;
    getLockOwnerId(): number;
    getLockOwnerName(): string;
    getLockedMonitors(): MonitorInfo[];
    getLockedSynchronizers(): LockInfo[];
    getPriority(): number;
    getStackTrace(): StackTraceElement[];
    getThreadId(): number;
    getThreadName(): string;
    getThreadState(): Thread$State;
    getWaitedCount(): number;
    getWaitedTime(): number;
    // private initialize(arg0: Thread, arg1: number, arg2: Object, arg3: Thread, arg4: number, arg5: number, arg6: number, arg7: number, arg8: StackTraceElement[], arg9: MonitorInfo[], arg10: LockInfo[]): void;
    isDaemon(): boolean;
    isInNative(): boolean;
    isSuspended(): boolean;
    toString(): string;
}