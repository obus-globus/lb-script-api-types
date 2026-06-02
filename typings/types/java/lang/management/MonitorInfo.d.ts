import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { LockInfo } from '../../../java/lang/management/LockInfo.d.ts'
import type { CompositeData } from '../../../javax/management/openmbean/CompositeData.d.ts'
export class MonitorInfo extends LockInfo {
    static from(paramarg0: CompositeData): LockInfo;
    static from(paramarg0: CompositeData): MonitorInfo;
    constructor(arg0: string, arg1: number, arg2: number, arg3: StackTraceElement)
    // private stackDepth: number;
    // private stackFrame: StackTraceElement;
    getLockedStackDepth(): number;
    getLockedStackFrame(): StackTraceElement;
}