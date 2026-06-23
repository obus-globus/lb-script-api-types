import type { LeakPresenceDetector$ResourceScope } from '../../../io/netty/util/LeakPresenceDetector$ResourceScope.d.ts'
import type { ResourceLeakDetector } from '../../../io/netty/util/ResourceLeakDetector.d.ts'
import type { ResourceLeakDetector$Level } from '../../../io/netty/util/ResourceLeakDetector$Level.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LeakPresenceDetector<T extends unknown> extends ResourceLeakDetector<T> {
    static addExclusions(paramarg0: Class<Object>, paramarg1: (Object | null)[]): void;
    static check(): void;
    static getLevel(): ResourceLeakDetector$Level;
    static isEnabled(): boolean;
    static setEnabled(paramarg0: boolean): void;
    static setLevel(paramarg0: ResourceLeakDetector$Level): void;
    static staticInitializer(paramarg0: () => Object | null): Object | null;
    constructor(arg0: Class<Object>)
    constructor(arg0: Class<Object>, arg1: number)
    constructor(arg0: Class<Object>, arg1: number, arg2: number)
    currentScope(): LeakPresenceDetector$ResourceScope;
    isRecordEnabled(): boolean;
    track(arg0: T): ResourceLeakTracker<T>;
    trackForcibly(arg0: T): ResourceLeakTracker<T>;
}