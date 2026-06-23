import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$InterruptibleFunction<T extends unknown, R extends unknown> extends Object{
    apply(arg: T): R;
}