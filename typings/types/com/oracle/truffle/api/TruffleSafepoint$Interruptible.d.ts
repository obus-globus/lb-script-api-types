import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$Interruptible<T extends unknown> extends Object{
    apply(arg: T): void;
}