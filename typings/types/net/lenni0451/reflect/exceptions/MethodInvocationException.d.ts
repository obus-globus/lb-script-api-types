import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class MethodInvocationException extends RuntimeException {
    constructor(arg0: Method)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, ...arg2: string[])
    cause(arg0: Throwable): MethodInvocationException;
}