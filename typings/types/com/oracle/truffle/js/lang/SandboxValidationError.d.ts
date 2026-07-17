import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SandboxValidationError extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(message: string)
    getExceptionType(): ExceptionType;
    getLanguageId(): string;
    hasLanguageId(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}