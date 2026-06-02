import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SandboxValidationError extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(message: string)
    getExceptionType(): ExceptionType;
    getLanguage(): Class<TruffleLanguage<Object>>;
    hasLanguage(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}