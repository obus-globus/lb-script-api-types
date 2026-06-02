import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
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
    // private appendEscaped(result: StringBuffer, cp: number): void;
    getEscapeCharacters(): string[];
    getExtraQuotingCharacters(): string[];
    getIgnorableCharacters(): string[];
    getLimit(): number;
    getStart(): number;
    getSyntaxCharacters(): string[];
    isUsingQuote(): boolean;
    isUsingSlash(): boolean;
    next(buffer: StringBuffer): number;
    normalize(): string;
    quoteLiteral(string: CharSequence): string;
    quoteLiteral(string: string): string;
    setEscapeCharacters(escapeCharacters: string[]): PatternTokenizer;
    setExtraQuotingCharacters(syntaxCharacters: string[]): PatternTokenizer;
    setIgnorableCharacters(ignorableCharacters: string[]): PatternTokenizer;
    setLimit(limit: number): PatternTokenizer;
    setPattern(pattern: CharSequence): PatternTokenizer;
    setPattern(pattern: string): PatternTokenizer;
    setStart(start: number): PatternTokenizer;
    setSyntaxCharacters(syntaxCharacters: string[]): PatternTokenizer;
    setUsingQuote(usingQuote: boolean): PatternTokenizer;
    setUsingSlash(usingSlash: boolean): PatternTokenizer;
}