import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { HSTruffleObject } from '../../../../../com/oracle/truffle/polyglot/isolate/HSTruffleObject.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HSTruffleException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    private constructor(reference: HSTruffleObject)
    // private reference: HSTruffleObject;
    getExceptionStackTrace(): Object;
    hasExceptionStackTrace(): boolean;
    isException(): boolean;
    throwException(): RuntimeException;
}