import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class StringTokenizer extends Object implements Enumeration<Object> {
    constructor(str: string)
    constructor(str: string, delim: string)
    constructor(str: string, delim: string, returndelims: boolean)
    constructor(str: string, delim: string, returndelims: boolean, coalescedelims: boolean)
    constructor(str: string, delim: string[])
    constructor(str: string, delim: string[], returndelims: boolean)
    constructor(str: string, delim: string[], returndelims: boolean, coalescedelims: boolean)
    // private delims: (Object | null)[];
    // private m_coalesceDelimiters_: boolean;
    // private m_delimiters_: string[];
    // private m_length_: number;
    // private m_nextOffset_: number;
    // private m_returnDelimiters_: boolean;
    // private m_source_: string;
    // private m_tokenLimit_: number[];
    // private m_tokenOffset_: number;
    // private m_tokenSize_: number;
    // private m_tokenStart_: number[];
    asIterator(): Iterator<E>;
    checkDelimiters(): void;
    countTokens(): number;
    // private getNextDelimiter(offset: number): number;
    // private getNextNonDelimiter(offset: number): number;
    hasMoreElements(): boolean;
    hasMoreTokens(): boolean;
    nextElement(): Object;
    nextToken(): string;
    nextToken(delim: string): string;
    nextToken(delim: string[]): string;
}