import type { InvalidDataException } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/exceptions/InvalidDataException.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class InvalidHandshakeException extends InvalidDataException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}