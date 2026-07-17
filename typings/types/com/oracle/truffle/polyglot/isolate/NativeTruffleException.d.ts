import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { NativeTruffleObject } from '../../../../../com/oracle/truffle/polyglot/isolate/NativeTruffleObject.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NativeTruffleException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    private constructor(reference: NativeTruffleObject, hostException: AbstractTruffleException)
    // private hostException: AbstractTruffleException;
    // private reference: NativeTruffleObject;
    asHostObject(): Object;
    isException(): boolean;
    isHostObject(): boolean;
    throwException(): RuntimeException;
}