import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class StringTokenizer extends Object implements Enumeration<Object> {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string[])
    constructor(arg0: string, arg1: string[], arg2: boolean)
    constructor(arg0: string, arg1: string[], arg2: boolean, arg3: boolean)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: boolean)
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
    // private getNextDelimiter(arg0: number): number;
    // private getNextNonDelimiter(arg0: number): number;
    hasMoreElements(): boolean;
    hasMoreTokens(): boolean;
    nextElement(): Object;
    nextToken(): string;
    nextToken(arg0: string[]): string;
    nextToken(arg0: string): string;
}