import type { Signal$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Constant } from '../../../io/netty/util/Constant.d.ts'
import type { Signal$SignalConstant } from '../../../io/netty/util/Signal$SignalConstant.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Error } from '../../../java/lang/Error.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class Signal extends Error implements Constant<Signal> {
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Signal;
    static valueOf(paramarg0: string): Signal;
    private constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: Signal$1)
    // private constant: Signal$SignalConstant;
    compareTo(arg0: Signal): number;
    equals(arg0: Object | null): boolean;
    expect(arg0: Signal): void;
    fillInStackTrace(): Throwable;
    hashCode(): number;
    id(): number;
    initCause(arg0: Throwable): Throwable;
    name(): string;
    toString(): string;
}