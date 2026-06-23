import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface ScopedValue$CallableOp<T extends unknown, X extends Throwable> extends Object{
    call(): T;
}