import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { ExceptionType } from '../../../../com/oracle/truffle/api/interop/ExceptionType.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
export class RegexSyntaxException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    static createFlags(paramsource: RegexSource, parammsg: string): RegexSyntaxException;
    static createFlags(paramsource: RegexSource, parammsg: string, paramposition: number): RegexSyntaxException;
    static createOptions(paramsource: Source, parammsg: string, paramposition: number): RegexSyntaxException;
    static createPattern(paramsource: RegexSource, parammsg: string, paramposition: number, paramerrorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    private constructor(reason: string, src: Source, position: number, errorCode: RegexSyntaxException$ErrorCode)
    private constructor(reason: string, sourceSection: SourceSection, errorCode: RegexSyntaxException$ErrorCode)
    readonly errorCode: RegexSyntaxException$ErrorCode;
    // private sourceSection: SourceSection;
    getErrorCode(): RegexSyntaxException$ErrorCode;
    getExceptionType(): ExceptionType;
    getSourceSection(): SourceSection;
    hasSourceLocation(): boolean;
    withErrorCodeInMessage(): RegexSyntaxException;
}