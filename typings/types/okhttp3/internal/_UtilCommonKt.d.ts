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
    static addIfAbsent<E extends unknown>(self: E[], element: E): void;
    static and(self: number, mask: number): number;
    static checkOffsetAndCount(arrayLength: number, offset: number, count: number): void;
    static closeQuietly(self: Closeable): void;
    static concat(self: string[], value: string): string[];
    static deleteContents(self: FileSystem, directory: Path): void;
    static deleteIfExists(self: FileSystem, path: Path): void;
    static delimiterOffset(self: string, delimiter: string, startIndex: number, endIndex: number): number;
    static delimiterOffset(self: string, delimiters: string, startIndex: number, endIndex: number): number;
    static filterList<T extends unknown>(self: T[], predicate: (param0: T) => boolean): T[];
    static getUNICODE_BOMS(): (Object | null)[];
    static hasIntersection(self: string[], other: string[] | null, comparator: (param0: string, param1: string) => number): boolean;
    static ignoreIoExceptions(block: () => void): void;
    static indexOf(self: string[], value: string, comparator: (param0: string, param1: string) => number): number;
    static indexOfControlOrNonAscii(self: string): number;
    static indexOfFirstNonAsciiWhitespace(self: string, startIndex: number, endIndex: number): number;
    static indexOfLastNonAsciiWhitespace(self: string, startIndex: number, endIndex: number): number;
    static indexOfNonWhitespace(self: string, startIndex: number): number;
    static interleave<T extends unknown>(a: T[], b: T[]): T[];
    static intersect(self: string[], other: string[], comparator: (param0: string, param1: string) => number): string[];
    static isCivilized(self: FileSystem, file: Path): boolean;
    static isSensitiveHeader(name: string): boolean;
    static parseHexDigit(self: string): number;
    static readMedium(self: BufferedSource): number;
    static skipAll(self: Buffer, b: number): number;
    static toLongOrDefault(self: string, defaultValue: number): number;
    static toNonNegativeInt(self: string | null, defaultValue: number): number;
    static trimSubstring(self: string, startIndex: number, endIndex: number): string;
    static withSuppressed(self: Exception, suppressed: Exception[]): Throwable;
    static writeMedium(self: BufferedSink, medium: number): void;
}