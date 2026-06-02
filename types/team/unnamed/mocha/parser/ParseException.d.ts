import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Cursor } from '../../../../team/unnamed/mocha/lexer/Cursor.d.ts'
export class ParseException extends IOException {
    constructor(arg0: string, arg1: Throwable, arg2: Cursor)
    constructor(arg0: string, arg1: Cursor)
    constructor(arg0: Throwable, arg1: Cursor)
    constructor(arg0: Cursor)
    // private cursor: Cursor;
    cursor(): Cursor;
}