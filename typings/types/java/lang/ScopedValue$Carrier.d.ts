import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { ScopedValue } from '../../java/lang/ScopedValue.d.ts'
import type { ScopedValue$CallableOp } from '../../java/lang/ScopedValue$CallableOp.d.ts'
import type { ScopedValue$Snapshot } from '../../java/lang/ScopedValue$Snapshot.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ScopedValue$Carrier extends Object {
    constructor(arg0: ScopedValue<Object>, arg1: Object, arg2: ScopedValue$Carrier)
    // private bitmask: number;
    // private key: ScopedValue<Object>;
    // private prev: ScopedValue$Carrier;
    // private value: Object;
    call<R extends unknown, X extends Throwable>(arg0: () => R): R;
    get(): Object;
    get<T extends unknown>(arg0: ScopedValue<T>): T;
    getKey(): ScopedValue<Object>;
    run(arg0: () => void): void;
    // private runWith(arg0: ScopedValue$Snapshot, arg1: () => void): void;
    // private runWith<R extends unknown, X extends Throwable>(arg0: ScopedValue$Snapshot, arg1: () => R): R;
    where<T extends unknown>(arg0: ScopedValue<T>, arg1: T): ScopedValue$Carrier;
}