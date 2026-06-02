import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export interface ICU4JFeature$ThrowingFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean, E extends Throwable> extends Object{
    apply(t: T): R;
}