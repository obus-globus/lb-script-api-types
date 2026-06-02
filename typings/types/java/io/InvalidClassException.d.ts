import type { ObjectStreamException } from '../../java/io/ObjectStreamException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class InvalidClassException extends ObjectStreamException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Throwable)
    constructor(arg0: string, arg1: Throwable)
    classname: string;
    readonly message: string | null;
}