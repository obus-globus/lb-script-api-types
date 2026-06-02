import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
import type { StrBuilder } from '../../../../../org/apache/commons/lang3/text/StrBuilder.d.ts'
import type { StrMatcher } from '../../../../../org/apache/commons/lang3/text/StrMatcher.d.ts'
export class StrTokenizer extends Object implements Cloneable, ListIterator<string> {
    static getCSVInstance(): StrTokenizer;
    static getCSVInstance(paramarg0: string[]): StrTokenizer;
    static getCSVInstance(paramarg0: string): StrTokenizer;
    static getTSVInstance(): StrTokenizer;
    static getTSVInstance(paramarg0: string[]): StrTokenizer;
    static getTSVInstance(paramarg0: string): StrTokenizer;
    constructor()
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: string)
    constructor(arg0: string[], arg1: string, arg2: string)
    constructor(arg0: string[], arg1: string)
    constructor(arg0: string[], arg1: StrMatcher)
    constructor(arg0: string[], arg1: StrMatcher, arg2: StrMatcher)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: StrMatcher)
    constructor(arg0: string, arg1: StrMatcher, arg2: StrMatcher)
    // private chars: string[];
    // private delimMatcher: StrMatcher;
    // private emptyAsNull: boolean;
    readonly ignoreEmptyTokens: boolean;
    readonly ignoredMatcher: StrMatcher;
    readonly quoteMatcher: StrMatcher;
    // private tokenPos: number;
    // private tokens: string[];
    readonly trimmerMatcher: StrMatcher;
    add(arg0: string): void;
    // private addToken(arg0: string[], arg1: string): void;
    // private checkTokenized(): void;
    protected clone(): Object;
    clone(): Object;
    cloneReset(): Object;
    getContent(): string;
    getDelimiterMatcher(): StrMatcher;
    getIgnoredMatcher(): StrMatcher;
    getQuoteMatcher(): StrMatcher;
    getTokenArray(): string[];
    getTokenList(): string[];
    getTrimmerMatcher(): StrMatcher;
    hasNext(): boolean;
    hasPrevious(): boolean;
    isEmptyTokenAsNull(): boolean;
    isIgnoreEmptyTokens(): boolean;
    // private isQuote(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    next(): string;
    nextIndex(): number;
    nextToken(): string;
    previous(): string;
    previousIndex(): number;
    previousToken(): string;
    // private readNextToken(arg0: string[], arg1: number, arg2: number, arg3: StrBuilder, arg4: string[]): number;
    // private readWithQuotes(arg0: string[], arg1: number, arg2: number, arg3: StrBuilder, arg4: string[], arg5: number, arg6: number): number;
    remove(): void;
    reset(): StrTokenizer;
    reset(arg0: string[]): StrTokenizer;
    reset(arg0: string): StrTokenizer;
    set(arg0: string): void;
    setDelimiterChar(arg0: string): StrTokenizer;
    setDelimiterMatcher(arg0: StrMatcher): StrTokenizer;
    setDelimiterString(arg0: string): StrTokenizer;
    setEmptyTokenAsNull(arg0: boolean): StrTokenizer;
    setIgnoreEmptyTokens(arg0: boolean): StrTokenizer;
    setIgnoredChar(arg0: string): StrTokenizer;
    setIgnoredMatcher(arg0: StrMatcher): StrTokenizer;
    setQuoteChar(arg0: string): StrTokenizer;
    setQuoteMatcher(arg0: StrMatcher): StrTokenizer;
    setTrimmerMatcher(arg0: StrMatcher): StrTokenizer;
    size(): number;
    toString(): string;
    tokenize(arg0: string[], arg1: number, arg2: number): string[];
}