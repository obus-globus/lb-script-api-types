import type { ResourceLeak } from '../../../io/netty/util/ResourceLeak.d.ts'
import type { ResourceLeakDetector$TraceRecord } from '../../../io/netty/util/ResourceLeakDetector$TraceRecord.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ResourceLeakDetector$DefaultResourceLeak<T extends Object | number | string | boolean> extends WeakReference<Object> implements ResourceLeak, ResourceLeakTracker<T> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: Object, arg1: ReferenceQueue<Object>, arg2: ResourceLeakDetector$DefaultResourceLeak<Object>[], arg3: Object)
    // private allLeaks: ResourceLeakDetector$DefaultResourceLeak<Object>[];
    // private droppedRecords: number;
    // private head: ResourceLeakDetector$TraceRecord;
    // private trackedHash: number;
    close(): boolean;
    close(arg0: T): boolean;
    dispose(): boolean;
    // private generateReport(arg0: ResourceLeakDetector$TraceRecord): string;
    getCloseStackTraceIfAny(): Throwable;
    getCloseStackTraceIfAny(): Throwable;
    getReportAndClearRecords(): string;
    record(): void;
    record(arg0: Object): void;
    // private record0(arg0: Object): void;
    toString(): string;
}