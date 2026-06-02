import type { ResourceLeak } from '../../../io/netty/util/ResourceLeak.d.ts'
import type { ResourceLeakDetector$DefaultResourceLeak } from '../../../io/netty/util/ResourceLeakDetector$DefaultResourceLeak.d.ts'
import type { ResourceLeakDetector$LeakListener } from '../../../io/netty/util/ResourceLeakDetector$LeakListener.d.ts'
import type { ResourceLeakDetector$Level } from '../../../io/netty/util/ResourceLeakDetector$Level.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ResourceLeakDetector<T extends Object | number | string | boolean> extends Object {
    static addExclusions(paramarg0: Class<Object>, paramarg1: (Object | null)[]): void;
    static getLevel(): ResourceLeakDetector$Level;
    static isEnabled(): boolean;
    static setEnabled(paramarg0: boolean): void;
    static setLevel(paramarg0: ResourceLeakDetector$Level): void;
    constructor(arg0: Class<Object>)
    constructor(arg0: Class<Object>, arg1: number)
    constructor(arg0: Class<Object>, arg1: number, arg2: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: number)
    // private allLeaks: ResourceLeakDetector$DefaultResourceLeak<Object>[];
    readonly leakListener: ResourceLeakDetector$LeakListener;
    // private refQueue: ReferenceQueue<Object>;
    // private reportedLeaks: string[];
    // private resourceType: string;
    // private samplingInterval: number;
    // private clearRefQueue(): void;
    getInitialHint(arg0: string): Object;
    isRecordEnabled(): boolean;
    needReport(): boolean;
    open(arg0: T): ResourceLeak;
    reportInstancesLeak(arg0: string): void;
    // private reportLeak(): void;
    reportTracedLeak(arg0: string, arg1: string): void;
    reportUntracedLeak(arg0: string): void;
    setLeakListener(arg0: ResourceLeakDetector$LeakListener): void;
    track(arg0: T): ResourceLeakTracker<T>;
    // private track0(arg0: T, arg1: boolean): ResourceLeakDetector$DefaultResourceLeak<T>;
    trackForcibly(arg0: T): ResourceLeakTracker<T>;
}