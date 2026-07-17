import type { ReferenceUnavailableException$Kind } from '../../../../../com/oracle/truffle/polyglot/isolate/ReferenceUnavailableException$Kind.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class ReferenceUnavailableException extends RuntimeException {
    constructor(kind: ReferenceUnavailableException$Kind, objId: number)
    constructor(message: string)
}