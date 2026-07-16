import type { Object } from '../../../../java/lang/Object.d.ts'
export class AbstractJsonLexerKt extends Object {
    static BEGIN_LIST: string;
    static BEGIN_OBJ: string;
    static COLON: string;
    static COMMA: string;
    static END_LIST: string;
    static END_OBJ: string;
    static INVALID: string;
    static NULL: string;
    static STRING: string;
    static STRING_ESC: string;
    static TC_BEGIN_LIST: number;
    static TC_BEGIN_OBJ: number;
    static TC_COLON: number;
    static TC_COMMA: number;
    static TC_END_LIST: number;
    static TC_END_OBJ: number;
    static TC_EOF: number;
    static TC_INVALID: number;
    static TC_OTHER: number;
    static TC_STRING: number;
    static TC_STRING_ESC: number;
    static TC_WHITESPACE: number;
    static UNICODE_ESC: string;
    static allowStructuredMapKeysHint: string;
    static asciiCaseMask: number;
    static coerceInputValuesHint: string;
    static ignoreUnknownKeysHint: string;
    static lenientHint: string;
    static specialFlowingValuesHint: string;
    static charToTokenClass(c: string): number;
    static escapeToChar(c: number): string;
    static tokenDescription(token: number): string;
}