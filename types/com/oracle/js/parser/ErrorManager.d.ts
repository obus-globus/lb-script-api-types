import type { ParserException } from '../../../../com/oracle/js/parser/ParserException.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ErrorManager extends Object {
    static format(parammessage: string, paramsource: Source, paramline: number, paramcolumn: number, paramtoken: number): string;
    constructor()
    // private errors: number;
    readonly limit: number;
    readonly parserException: ParserException;
    // private warnings: number;
    readonly warningsAsErrors: boolean;
    // private checkLimit(): void;
    error(e: ParserException): void;
    error(message: string): void;
    getLimit(): number;
    getNumberOfErrors(): number;
    getNumberOfWarnings(): number;
    getParserException(): ParserException;
    hasErrors(): boolean;
    isWarningsAsErrors(): boolean;
    message(message: string): void;
    setLimit(limit: number): void;
    setWarningsAsErrors(warningsAsErrors: boolean): void;
    warning(e: ParserException): void;
    warning(message: string): void;
}