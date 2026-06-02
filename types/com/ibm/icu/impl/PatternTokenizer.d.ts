import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class PatternTokenizer extends Object {
    static BACK_SLASH: string;
    static BROKEN_ESCAPE: number;
    static BROKEN_QUOTE: number;
    static DONE: number;
    static LITERAL: number;
    static SINGLE_QUOTE: string;
    static SYNTAX: number;
    static UNKNOWN: number;
    constructor()
    readonly escapeCharacters: string[];
    readonly extraQuotingCharacters: string[];
    readonly ignorableCharacters: string[];
    readonly limit: number;
    // private needingQuoteCharacters: string[];
    // private pattern: string;
    readonly start: number;
    readonly syntaxCharacters: string[];
    readonly usingQuote: boolean;
    readonly usingSlash: boolean;
    // private appendEscaped(arg0: StringBuffer, arg1: number): void;
    getEscapeCharacters(): string[];
    getExtraQuotingCharacters(): string[];
    getIgnorableCharacters(): string[];
    getLimit(): number;
    getStart(): number;
    getSyntaxCharacters(): string[];
    isUsingQuote(): boolean;
    isUsingSlash(): boolean;
    next(arg0: StringBuffer): number;
    normalize(): string;
    quoteLiteral(arg0: CharSequence): string;
    quoteLiteral(arg0: string): string;
    setEscapeCharacters(arg0: string[]): PatternTokenizer;
    setExtraQuotingCharacters(arg0: string[]): PatternTokenizer;
    setIgnorableCharacters(arg0: string[]): PatternTokenizer;
    setLimit(arg0: number): PatternTokenizer;
    setPattern(arg0: CharSequence): PatternTokenizer;
    setPattern(arg0: string): PatternTokenizer;
    setStart(arg0: number): PatternTokenizer;
    setSyntaxCharacters(arg0: string[]): PatternTokenizer;
    setUsingQuote(arg0: boolean): PatternTokenizer;
    setUsingSlash(arg0: boolean): PatternTokenizer;
}