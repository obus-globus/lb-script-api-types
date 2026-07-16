import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Concurrent_commonKt extends Object {
    static getValue<T extends unknown>(paramarg0: AtomicReference<T>): T;
    static loop<T extends unknown>(self: AtomicReference<T>, action: (param0: AtomicReference<T>, param1: T) => void): void;
    static setValue<T extends unknown>(paramarg0: AtomicReference<T>, paramarg1: T): void;
}