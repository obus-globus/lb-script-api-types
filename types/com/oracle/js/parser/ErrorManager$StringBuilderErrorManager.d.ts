import type { ErrorManager } from '../../../../com/oracle/js/parser/ErrorManager.d.ts'
import type { Source } from '../../../../com/oracle/js/parser/Source.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
export class ErrorManager$StringBuilderErrorManager extends ErrorManager {
    static format(parammessage: string, paramsource: Source, paramline: number, paramcolumn: number, paramtoken: number): string;
    constructor()
    // private buffer: StringBuilder;
    getOutput(): string;
    message(message: string): void;
}