import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
export class UnsupportedRegexException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(reason: string)
    constructor(reason: string, regexSrc: RegexSource)
    readonly message: string | null;
    readonly reason: string;
    // private regexSrc: RegexSource;
    getExceptionType(): ExceptionType;
    getReason(): string;
    getRegex(): RegexSource;
    setReason(reason: string): void;
    setRegex(regexSrc: RegexSource): void;
}