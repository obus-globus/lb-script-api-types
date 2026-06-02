import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { ParseError } from '../../../../../kotlinx/datetime/internal/format/parser/ParseError.d.ts'
export class ParseException extends Exception {
    constructor(errors: ParseError[])
}