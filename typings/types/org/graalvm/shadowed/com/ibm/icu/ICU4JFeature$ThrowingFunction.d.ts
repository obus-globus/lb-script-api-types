import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export interface ICU4JFeature$ThrowingFunction<T extends unknown, R extends unknown, E extends Throwable> extends Object{
    apply(t: T): R;
}