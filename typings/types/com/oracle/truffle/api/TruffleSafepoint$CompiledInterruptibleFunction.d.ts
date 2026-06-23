import type { TruffleSafepoint$InterruptibleFunction } from '../../../../com/oracle/truffle/api/TruffleSafepoint$InterruptibleFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSafepoint$CompiledInterruptibleFunction<T extends unknown, R extends unknown> extends TruffleSafepoint$InterruptibleFunction<T, R>, Object{
    apply(arg: T): R;
}