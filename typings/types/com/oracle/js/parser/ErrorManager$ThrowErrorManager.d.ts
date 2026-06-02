import type { ErrorManager } from '../../../../com/oracle/js/parser/ErrorManager.d.ts'
import type { ParserException } from '../../../../com/oracle/js/parser/ParserException.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
export class ErrorManager$ThrowErrorManager extends ErrorManager {
    static format(parammessage: string, paramsource: Source, paramline: number, paramcolumn: number, paramtoken: number): string;
    constructor()
    error(e: ParserException): void;
    error(message: string): void;
    message(message: string): void;
}