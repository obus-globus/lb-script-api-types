import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ConstructorInvocationException extends RuntimeException {
    constructor(arg0: Constructor<Object>)
    constructor(arg0: string, ...arg1: string[])
    cause(arg0: Throwable): ConstructorInvocationException;
}