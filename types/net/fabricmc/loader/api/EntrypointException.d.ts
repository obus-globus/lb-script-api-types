import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class EntrypointException extends RuntimeException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string, arg2: Throwable)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    readonly key: string;
    getKey(): string;
}