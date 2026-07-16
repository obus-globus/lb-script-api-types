import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { IOException } from '../../java/io/IOException.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Readable } from '../../java/lang/Readable.d.ts'
import type { BigDecimal } from '../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../java/math/BigInteger.d.ts'
import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { ReadableByteChannel } from '../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Scanner$PatternLRUCache } from '../../java/util/Scanner$PatternLRUCache.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { MatchResult } from '../../java/util/regex/MatchResult.d.ts'
import type { Matcher } from '../../java/util/regex/Matcher.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class Scanner extends Object implements Closeable, Iterator<string> {
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: string)
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: Charset)
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: Readable)
    constructor(arg0: ReadableByteChannel)
    constructor(arg0: ReadableByteChannel, arg1: Charset)
    constructor(arg0: ReadableByteChannel, arg1: string)
    constructor(arg0: Path)
    constructor(arg0: Path, arg1: Charset)
    constructor(arg0: Path, arg1: string)
    constructor(arg0: string)
    // private buf: CharBuffer;
    // private closed: boolean;
    // private decimalPattern: Pattern;
    // private decimalSeparator: string;
    // private defaultRadix: number;
    // private delimPattern: Pattern;
    // private floatPattern: Pattern;
    // private groupSeparator: string;
    // private hasNextPattern: Pattern;
    // private hasNextPosition: number;
    // private hasNextResult: string;
    // private infinityString: string;
    // private integerPattern: Pattern;
    // private lastException: IOException;
    // private locale: Locale;
    // private matchValid: boolean;
    // private matcher: Matcher;
    // private modCount: number;
    // private nanString: string;
    // private needInput: boolean;
    // private negativePrefix: string;
    // private negativeSuffix: string;
    // private patternCache: Scanner$PatternLRUCache;
    // private position: number;
    // private positivePrefix: string;
    // private positiveSuffix: string;
    // private radix: number;
    // private savedScannerPosition: number;
    // private skipped: boolean;
    // private source: Readable;
    // private sourceClosed: boolean;
    // private typeCache: Object;
    // private buildFloatAndDecimalPattern(): void;
    // private buildIntegerPatternString(): string;
    // private cacheResult(): void;
    // private cacheResult(arg0: string): void;
    // private clearCaches(): void;
    close(): void;
    // private decimalPattern(): Pattern;
    delimiter(): Pattern;
    // private ensureOpen(): void;
    findAll(arg0: Pattern): Stream<MatchResult>;
    findAll(arg0: string): Stream<MatchResult>;
    findInLine(arg0: Pattern): string;
    findInLine(arg0: string): string;
    // private findPatternInBuffer(arg0: Pattern, arg1: number): boolean;
    findWithinHorizon(arg0: Pattern, arg1: number): string;
    findWithinHorizon(arg0: string, arg1: number): string;
    // private floatPattern(): Pattern;
    forEachRemaining(arg0: (param0: string) => void): void;
    // private getCachedResult(): string;
    // private getCompleteTokenInBuffer(arg0: Pattern): string;
    hasNext(): boolean;
    hasNext(arg0: Pattern): boolean;
    hasNext(arg0: string): boolean;
    hasNextBigDecimal(): boolean;
    hasNextBigInteger(): boolean;
    hasNextBigInteger(arg0: number): boolean;
    hasNextBoolean(): boolean;
    hasNextByte(): boolean;
    hasNextByte(arg0: number): boolean;
    hasNextDouble(): boolean;
    hasNextFloat(): boolean;
    hasNextInt(): boolean;
    hasNextInt(arg0: number): boolean;
    hasNextLine(): boolean;
    hasNextLong(): boolean;
    hasNextLong(arg0: number): boolean;
    hasNextShort(): boolean;
    hasNextShort(arg0: number): boolean;
    // private hasTokenInBuffer(): boolean;
    // private integerPattern(): Pattern;
    ioException(): IOException;
    locale(): Locale;
    // private makeSpace(): boolean;
    match(): MatchResult;
    // private matchPatternInBuffer(arg0: Pattern): boolean;
    next(): string;
    next(arg0: Pattern): string;
    next(arg0: string): string;
    nextBigDecimal(): BigDecimal;
    nextBigInteger(): BigInteger;
    nextBigInteger(arg0: number): BigInteger;
    nextBoolean(): boolean;
    nextByte(): number;
    nextByte(arg0: number): number;
    nextDouble(): number;
    nextFloat(): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextLine(): string;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextShort(): number;
    nextShort(arg0: number): number;
    // private processFloatToken(arg0: string): string;
    // private processIntegerToken(arg0: string): string;
    radix(): number;
    // private readInput(): void;
    remove(): void;
    reset(): Scanner;
    // private revertState(): void;
    // private revertState(arg0: boolean): boolean;
    // private saveState(): void;
    // private setRadix(arg0: number): void;
    skip(arg0: Pattern): Scanner;
    skip(arg0: string): Scanner;
    // private throwFor(): void;
    toString(): string;
    tokens(): Stream<string>;
    // private translateSavedIndexes(arg0: number): void;
    useDelimiter(arg0: Pattern): Scanner;
    useDelimiter(arg0: string): Scanner;
    useLocale(arg0: Locale): Scanner;
    useRadix(arg0: number): Scanner;
    // private useTypeCache(): void;
}