import type { DateTimeException } from '../../../java/time/DateTimeException.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DateTimeParseException extends DateTimeException {
    constructor(arg0: string, arg1: CharSequence, arg2: number)
    constructor(arg0: string, arg1: CharSequence, arg2: number, arg3: Throwable)
    readonly errorIndex: number;
    readonly parsedString: string;
    getErrorIndex(): number;
    getParsedString(): string;
}