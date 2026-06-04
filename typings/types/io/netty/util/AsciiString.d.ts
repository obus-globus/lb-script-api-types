import type { ByteProcessor } from '../../../io/netty/util/ByteProcessor.d.ts'
import type { HashingStrategy } from '../../../io/netty/util/HashingStrategy.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class AsciiString extends Object implements CharSequence, Comparable<CharSequence> {
    static CASE_INSENSITIVE_HASHER: HashingStrategy<CharSequence>;
    static CASE_SENSITIVE_HASHER: HashingStrategy<CharSequence>;
    static EMPTY_STRING: AsciiString;
    static INDEX_NOT_FOUND: number;
    static b2c(paramarg0: number): string;
    static c2b(paramarg0: string): number;
    static cached(paramarg0: string): AsciiString;
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    static contains(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static containsAllContentEqualsIgnoreCase(paramarg0: E[], paramarg1: E[]): boolean;
    static containsContentEqualsIgnoreCase(paramarg0: E[], paramarg1: CharSequence): boolean;
    static containsIgnoreCase(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static contentEquals(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static contentEqualsIgnoreCase(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static hashCode(paramarg0: CharSequence): number;
    static indexOf(paramarg0: CharSequence, paramarg1: string, paramarg2: number): number;
    static indexOfIgnoreCase(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: number): number;
    static indexOfIgnoreCaseAscii(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: number): number;
    static isUpperCase(paramarg0: number): boolean;
    static isUpperCase(paramarg0: string): boolean;
    static of(paramarg0: CharSequence): AsciiString;
    static regionMatches(paramarg0: CharSequence, paramarg1: boolean, paramarg2: number, paramarg3: CharSequence, paramarg4: number, paramarg5: number): boolean;
    static regionMatchesAscii(paramarg0: CharSequence, paramarg1: boolean, paramarg2: number, paramarg3: CharSequence, paramarg4: number, paramarg5: number): boolean;
    static toLowerCase(paramarg0: string): string;
    static trim(paramarg0: CharSequence): CharSequence;
    constructor(arg0: ByteBuffer)
    constructor(arg0: ByteBuffer, arg1: boolean)
    constructor(arg0: ByteBuffer, arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: boolean)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: Charset)
    constructor(arg0: string[], arg1: Charset, arg2: number, arg3: number)
    constructor(arg0: string[], arg1: number, arg2: number)
    constructor(arg0: CharSequence)
    constructor(arg0: CharSequence, arg1: Charset)
    constructor(arg0: CharSequence, arg1: Charset, arg2: number, arg3: number)
    constructor(arg0: CharSequence, arg1: number, arg2: number)
    // private hash: number;
    // private length: number;
    /*not mapped: */ length(): number;
    // private offset: number;
    // private string: string;
    // private value: number[];
    array(): number[];
    arrayChanged(): void;
    arrayOffset(): number;
    byteAt(arg0: number): number;
    chars(): IntStream;
    codePoints(): IntStream;
    compareTo(arg0: CharSequence): number;
    concat(arg0: CharSequence): AsciiString;
    contains(arg0: CharSequence): boolean;
    contentEquals(arg0: CharSequence): boolean;
    contentEqualsIgnoreCase(arg0: CharSequence): boolean;
    copy(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    copy(arg0: number, arg1: string[], arg2: number, arg3: number): void;
    endsWith(arg0: CharSequence): boolean;
    equals(arg0: Object | null): boolean;
    forEachByte(arg0: ByteProcessor): number;
    forEachByte(arg0: number, arg1: number, arg2: ByteProcessor): number;
    // private forEachByte0(arg0: number, arg1: number, arg2: ByteProcessor): number;
    forEachByteDesc(arg0: ByteProcessor): number;
    forEachByteDesc(arg0: number, arg1: number, arg2: ByteProcessor): number;
    // private forEachByteDesc0(arg0: number, arg1: number, arg2: ByteProcessor): number;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hashCode(): number;
    indexOf(arg0: string, arg1: number): number;
    indexOf(arg0: CharSequence): number;
    indexOf(arg0: CharSequence, arg1: number): number;
    isEmpty(): boolean;
    isEntireArrayUsed(): boolean;
    lastIndexOf(arg0: CharSequence): number;
    lastIndexOf(arg0: CharSequence, arg1: number): number;
    matches(arg0: string): boolean;
    // private misalignedEqualsIgnoreCase(arg0: AsciiString): boolean;
    parseBoolean(): boolean;
    parseChar(): string;
    parseChar(arg0: number): string;
    parseDouble(): number;
    parseDouble(arg0: number, arg1: number): number;
    parseFloat(): number;
    parseFloat(arg0: number, arg1: number): number;
    parseInt(): number;
    parseInt(arg0: number): number;
    parseInt(arg0: number, arg1: number): number;
    parseInt(arg0: number, arg1: number, arg2: number): number;
    // private parseInt(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    parseLong(): number;
    parseLong(arg0: number): number;
    parseLong(arg0: number, arg1: number): number;
    parseLong(arg0: number, arg1: number, arg2: number): number;
    // private parseLong(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    parseShort(): number;
    parseShort(arg0: number): number;
    parseShort(arg0: number, arg1: number): number;
    parseShort(arg0: number, arg1: number, arg2: number): number;
    regionMatches(arg0: boolean, arg1: number, arg2: CharSequence, arg3: number, arg4: number): boolean;
    regionMatches(arg0: number, arg1: CharSequence, arg2: number, arg3: number): boolean;
    replace(arg0: string, arg1: string): AsciiString;
    split(arg0: string): AsciiString[];
    split(arg0: string, arg1: number): AsciiString[];
    startsWith(arg0: CharSequence): boolean;
    startsWith(arg0: CharSequence, arg1: number): boolean;
    subSequence(arg0: number): AsciiString;
    subSequence(arg0: number, arg1: number): AsciiString;
    subSequence(arg0: number, arg1: number, arg2: boolean): AsciiString;
    toByteArray(): number[];
    toByteArray(arg0: number, arg1: number): number[];
    toCharArray(): string[];
    toCharArray(arg0: number, arg1: number): string[];
    toLowerCase(): AsciiString;
    toString(): string;
    toString(arg0: number): string;
    toString(arg0: number, arg1: number): string;
    toUpperCase(): AsciiString;
    trim(): AsciiString;
}