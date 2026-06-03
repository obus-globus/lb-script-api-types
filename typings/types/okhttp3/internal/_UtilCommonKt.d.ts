import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Exception } from '../../java/lang/Exception.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { BufferedSink } from '../../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../../okio/BufferedSource.d.ts'
import type { FileSystem } from '../../okio/FileSystem.d.ts'
import type { Path } from '../../okio/Path.d.ts'
export class _UtilCommonKt extends Object {
    static EMPTY_BYTE_ARRAY: number[];
    static USER_AGENT: string;
    static addIfAbsent(paramarg0: (Object | null)[], paramarg1: Object | null): void;
    static and(paramarg0: number, paramarg1: number): number;
    static and(paramarg0: number, paramarg1: number): number;
    static and(paramarg0: number, paramarg1: number): number;
    static checkOffsetAndCount(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static closeQuietly(paramarg0: Closeable): void;
    static concat(paramarg0: (Object | null)[], paramarg1: string): (Object | null)[];
    static deleteContents(paramarg0: FileSystem, paramarg1: Path): void;
    static deleteIfExists(paramarg0: FileSystem, paramarg1: Path): void;
    static delimiterOffset(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: number): number;
    static delimiterOffset(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: number): number;
    static filterList(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => boolean): (Object | null)[];
    static getUNICODE_BOMS(): (Object | null)[];
    static hasIntersection(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: (param0: Object | null) => kotlin.Boolean): boolean;
    static ignoreIoExceptions(paramarg0: () => void): void;
    static indexOf(paramarg0: (Object | null)[], paramarg1: string, paramarg2: (param0: string) => kotlin.Boolean): number;
    static indexOfControlOrNonAscii(paramarg0: string): number;
    static indexOfFirstNonAsciiWhitespace(paramarg0: string, paramarg1: number, paramarg2: number): number;
    static indexOfLastNonAsciiWhitespace(paramarg0: string, paramarg1: number, paramarg2: number): number;
    static indexOfNonWhitespace(paramarg0: string, paramarg1: number): number;
    static interleave(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): (Object | null)[];
    static intersect(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: (param0: Object | null) => kotlin.Boolean): (Object | null)[];
    static isCivilized(paramarg0: FileSystem, paramarg1: Path): boolean;
    static isSensitiveHeader(paramarg0: string): boolean;
    static parseHexDigit(paramarg0: string): number;
    static readMedium(paramarg0: BufferedSource): number;
    static skipAll(paramarg0: Buffer, paramarg1: number): number;
    static toLongOrDefault(paramarg0: string, paramarg1: number): number;
    static toNonNegativeInt(paramarg0: string, paramarg1: number): number;
    static trimSubstring(paramarg0: string, paramarg1: number, paramarg2: number): string;
    static withSuppressed(paramarg0: Exception, paramarg1: (Object | null)[]): Throwable;
    static writeMedium(paramarg0: BufferedSink, paramarg1: number): void;
}