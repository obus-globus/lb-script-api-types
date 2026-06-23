import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface ResourceLeakTracker<T extends unknown> extends Object{
    close(arg0: T): boolean;
    getCloseStackTraceIfAny(): Throwable;
    record(): void;
    record(arg0: Object): void;
}