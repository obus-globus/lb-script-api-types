import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { ParseException } from '../../../../java/text/ParseException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringPrepParseException extends ParseException {
    static ACE_PREFIX_ERROR: number;
    static BUFFER_OVERFLOW_ERROR: number;
    static CHECK_BIDI_ERROR: number;
    static DOMAIN_NAME_TOO_LONG_ERROR: number;
    static ILLEGAL_CHAR_FOUND: number;
    static INVALID_CHAR_FOUND: number;
    static LABEL_TOO_LONG_ERROR: number;
    static PROHIBITED_ERROR: number;
    static STD3_ASCII_RULES_ERROR: number;
    static UNASSIGNED_ERROR: number;
    static VERIFICATION_ERROR: number;
    static ZERO_LENGTH_LABEL: number;
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: string, arg3: number)
    constructor(arg0: string, arg1: number, arg2: string, arg3: number, arg4: number)
    readonly error: number;
    // private line: number;
    // private postContext: StringBuffer;
    // private preContext: StringBuffer;
    equals(arg0: Object | null): boolean;
    getError(): number;
    hashCode(): number;
    // private setContext(arg0: string, arg1: number): void;
    // private setPostContext(arg0: string[], arg1: number): void;
    // private setPostContext(arg0: string, arg1: number): void;
    // private setPreContext(arg0: string[], arg1: number): void;
    // private setPreContext(arg0: string, arg1: number): void;
    toString(): string;
}