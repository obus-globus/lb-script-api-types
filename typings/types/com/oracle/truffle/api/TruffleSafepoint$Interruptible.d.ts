import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$Interruptible<T extends Object | number | string | boolean> extends Object{
    apply(arg: T): void;
}