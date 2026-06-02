import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$InterruptibleFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    apply(arg: T): R;
}