import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ResourceLeakException extends RuntimeException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    // private cachedStackTrace: StackTraceElement[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}