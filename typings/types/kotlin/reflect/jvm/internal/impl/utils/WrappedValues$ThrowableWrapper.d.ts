import type { WrappedValues$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class WrappedValues$ThrowableWrapper extends Object {
    private constructor(arg0: Throwable)
    constructor(arg0: Throwable, arg1: WrappedValues$1)
    readonly throwable: Throwable;
    getThrowable(): Throwable;
    toString(): string;
}