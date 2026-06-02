import type { SerialException } from '../../../io/jsonwebtoken/io/SerialException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SerializationException extends SerialException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
}