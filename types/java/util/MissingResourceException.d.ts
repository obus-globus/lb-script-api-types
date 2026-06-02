import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class MissingResourceException extends RuntimeException {
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: Throwable)
    readonly className: string;
    readonly key: string;
    getClassName(): string;
    getKey(): string;
}