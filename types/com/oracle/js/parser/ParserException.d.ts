import type { JSErrorType } from '../../../../com/oracle/js/parser/JSErrorType.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class ParserException extends RuntimeException {
    constructor(errorType: JSErrorType, msg: string, source: Source, line: number, column: number, token: number)
    constructor(msg: string)
    // private column: number;
    readonly errorType: JSErrorType;
    readonly fileName: string;
    // private line: number;
    readonly message: string | null;
    readonly source: Source;
    readonly token: number;
    getColumnNumber(): number;
    getErrorType(): JSErrorType;
    getFileName(): string;
    getLineNumber(): number;
    getPosition(): number;
    getRawMessage(): string;
    getSource(): Source;
    getToken(): number;
    isIncompleteSource(): boolean;
    setColumnNumber(column: number): void;
    setFileName(fileName: string): void;
    setLineNumber(line: number): void;
}