import type { TruffleSafepoint$Interruptible } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interruptible.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$CompiledInterruptible<T extends unknown> extends TruffleSafepoint$Interruptible<T>, Object{
    apply(arg: T): void;
}