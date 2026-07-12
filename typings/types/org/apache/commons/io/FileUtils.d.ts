import type { File } from '../../../../java/io/File.d.ts'
import type { FileFilter } from '../../../../java/io/FileFilter.d.ts'
import type { FileInputStream } from '../../../../java/io/FileInputStream.d.ts'
import type { FileOutputStream } from '../../../../java/io/FileOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { OffsetDateTime } from '../../../../java/time/OffsetDateTime.d.ts'
import type { OffsetTime } from '../../../../java/time/OffsetTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { ChronoLocalDate } from '../../../../java/time/chrono/ChronoLocalDate.d.ts'
import type { ChronoLocalDateTime } from '../../../../java/time/chrono/ChronoLocalDateTime.d.ts'
import type { ChronoZonedDateTime } from '../../../../java/time/chrono/ChronoZonedDateTime.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Checksum } from '../../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { LineIterator } from '../../../../org/apache/commons/io/LineIterator.d.ts'
import type { IOFileFilter } from '../../../../org/apache/commons/io/filefilter/IOFileFilter.d.ts'
export class FileUtils extends Object {
    static EMPTY_FILE_ARRAY: (Object | null)[];
    static ONE_EB: number;
    static ONE_EB_BI: BigInteger;
    static ONE_GB: number;
    static ONE_GB_BI: BigInteger;
    static ONE_KB: number;
    static ONE_KB_BI: BigInteger;
    static ONE_MB: number;
    static ONE_MB_BI: BigInteger;
    static ONE_PB: number;
    static ONE_PB_BI: BigInteger;
    static ONE_TB: number;
    static ONE_TB_BI: BigInteger;
    static ONE_YB: BigInteger;
    static ONE_ZB: BigInteger;
    static byteCountToDisplaySize(paramarg0: Number): string;
    static byteCountToDisplaySize(paramarg0: BigInteger): string;
    static byteCountToDisplaySize(paramarg0: number): string;
    static checksum(paramarg0: File, paramarg1: Checksum): Checksum;
    static checksumCRC32(paramarg0: File): number;
    static cleanDirectory(paramarg0: File): void;
    static contentEquals(paramarg0: File, paramarg1: File): boolean;
    static contentEqualsIgnoreEOL(paramarg0: File, paramarg1: File, paramarg2: string): boolean;
    static convertFileCollectionToFileArray(paramarg0: File[]): (Object | null)[];
    static copyDirectory(paramarg0: File, paramarg1: File): void;
    static copyDirectory(paramarg0: File, paramarg1: File, paramarg2: boolean): void;
    static copyDirectory(paramarg0: File, paramarg1: File, paramarg2: (param0: File) => boolean): void;
    static copyDirectory(paramarg0: File, paramarg1: File, paramarg2: (param0: File) => boolean, paramarg3: boolean): void;
    static copyDirectory(paramarg0: File, paramarg1: File, paramarg2: (param0: File) => boolean, paramarg3: boolean, ...paramarg4: (Object | null)[]): void;
    static copyDirectoryToDirectory(paramarg0: File, paramarg1: File): void;
    static copyFile(paramarg0: File, paramarg1: OutputStream): number;
    static copyFile(paramarg0: File, paramarg1: File): void;
    static copyFile(paramarg0: File, paramarg1: File, paramarg2: boolean): void;
    static copyFile(paramarg0: File, paramarg1: File, paramarg2: boolean, ...paramarg3: (Object | null)[]): void;
    static copyFile(paramarg0: File, paramarg1: File, ...paramarg2: (Object | null)[]): void;
    static copyFileToDirectory(paramarg0: File, paramarg1: File): void;
    static copyFileToDirectory(paramarg0: File, paramarg1: File, paramarg2: boolean): void;
    static copyInputStreamToFile(paramarg0: InputStream, paramarg1: File): void;
    static copyToDirectory(paramarg0: File, paramarg1: File): void;
    static copyToDirectory(paramarg0: File[], paramarg1: File): void;
    static copyToFile(paramarg0: InputStream, paramarg1: File): void;
    static copyURLToFile(paramarg0: URL, paramarg1: File): void;
    static copyURLToFile(paramarg0: URL, paramarg1: File, paramarg2: number, paramarg3: number): void;
    static createParentDirectories(paramarg0: File): File;
    static current(): File;
    static delete(paramarg0: File): File;
    static deleteDirectory(paramarg0: File): void;
    static deleteQuietly(paramarg0: File): boolean;
    static directoryContains(paramarg0: File, paramarg1: File): boolean;
    static forceDelete(paramarg0: File): void;
    static forceDeleteOnExit(paramarg0: File): void;
    static forceMkdir(paramarg0: File): void;
    static forceMkdirParent(paramarg0: File): void;
    static getFile(paramarg0: File, ...paramarg1: (Object | null)[]): File;
    static getFile(...paramarg0: (Object | null)[]): File;
    static getTempDirectory(): File;
    static getTempDirectoryPath(): string;
    static getUserDirectory(): File;
    static getUserDirectoryPath(): string;
    static isDirectory(paramarg0: File, ...paramarg1: (Object | null)[]): boolean;
    static isEmptyDirectory(paramarg0: File): boolean;
    static isFileNewer(paramarg0: File, paramarg1: File): boolean;
    static isFileNewer(paramarg0: File, paramarg1: FileTime): boolean;
    static isFileNewer(paramarg0: File, paramarg1: Instant): boolean;
    static isFileNewer(paramarg0: File, paramarg1: OffsetDateTime): boolean;
    static isFileNewer(paramarg0: File, paramarg1: ChronoLocalDate): boolean;
    static isFileNewer(paramarg0: File, paramarg1: ChronoLocalDate, paramarg2: LocalTime): boolean;
    static isFileNewer(paramarg0: File, paramarg1: ChronoLocalDate, paramarg2: OffsetTime): boolean;
    static isFileNewer(paramarg0: File, paramarg1: ChronoLocalDateTime<any>): boolean;
    static isFileNewer(paramarg0: File, paramarg1: ChronoLocalDateTime<any>, paramarg2: ZoneId): boolean;
    static isFileNewer(paramarg0: File, paramarg1: ChronoZonedDateTime<any>): boolean;
    static isFileNewer(paramarg0: File, paramarg1: Date): boolean;
    static isFileNewer(paramarg0: File, paramarg1: number): boolean;
    static isFileOlder(paramarg0: File, paramarg1: File): boolean;
    static isFileOlder(paramarg0: File, paramarg1: FileTime): boolean;
    static isFileOlder(paramarg0: File, paramarg1: Instant): boolean;
    static isFileOlder(paramarg0: File, paramarg1: OffsetDateTime): boolean;
    static isFileOlder(paramarg0: File, paramarg1: ChronoLocalDate): boolean;
    static isFileOlder(paramarg0: File, paramarg1: ChronoLocalDate, paramarg2: LocalTime): boolean;
    static isFileOlder(paramarg0: File, paramarg1: ChronoLocalDate, paramarg2: OffsetTime): boolean;
    static isFileOlder(paramarg0: File, paramarg1: ChronoLocalDateTime<any>): boolean;
    static isFileOlder(paramarg0: File, paramarg1: ChronoLocalDateTime<any>, paramarg2: ZoneId): boolean;
    static isFileOlder(paramarg0: File, paramarg1: ChronoZonedDateTime<any>): boolean;
    static isFileOlder(paramarg0: File, paramarg1: Date): boolean;
    static isFileOlder(paramarg0: File, paramarg1: number): boolean;
    static isRegularFile(paramarg0: File, ...paramarg1: (Object | null)[]): boolean;
    static isSymlink(paramarg0: File): boolean;
    static iterateFiles(paramarg0: File, paramarg1: (Object | null)[], paramarg2: boolean): Iterator<File>;
    static iterateFiles(paramarg0: File, paramarg1: IOFileFilter, paramarg2: IOFileFilter): Iterator<File>;
    static iterateFilesAndDirs(paramarg0: File, paramarg1: IOFileFilter, paramarg2: IOFileFilter): Iterator<File>;
    static lastModified(paramarg0: File): number;
    static lastModifiedFileTime(paramarg0: File): FileTime;
    static lastModifiedUnchecked(paramarg0: File): number;
    static lineIterator(paramarg0: File): LineIterator;
    static lineIterator(paramarg0: File, paramarg1: string): LineIterator;
    static listFiles(paramarg0: File, paramarg1: (Object | null)[], paramarg2: boolean): File[];
    static listFiles(paramarg0: File, paramarg1: IOFileFilter, paramarg2: IOFileFilter): File[];
    static listFilesAndDirs(paramarg0: File, paramarg1: IOFileFilter, paramarg2: IOFileFilter): File[];
    static moveDirectory(paramarg0: File, paramarg1: File): void;
    static moveDirectoryToDirectory(paramarg0: File, paramarg1: File, paramarg2: boolean): void;
    static moveFile(paramarg0: File, paramarg1: File): void;
    static moveFile(paramarg0: File, paramarg1: File, ...paramarg2: (Object | null)[]): void;
    static moveFileToDirectory(paramarg0: File, paramarg1: File, paramarg2: boolean): void;
    static moveToDirectory(paramarg0: File, paramarg1: File, paramarg2: boolean): void;
    static newOutputStream(paramarg0: File, paramarg1: boolean): OutputStream;
    static openInputStream(paramarg0: File): FileInputStream;
    static openOutputStream(paramarg0: File): FileOutputStream;
    static openOutputStream(paramarg0: File, paramarg1: boolean): FileOutputStream;
    static readFileToByteArray(paramarg0: File): number[];
    static readFileToString(paramarg0: File): string;
    static readFileToString(paramarg0: File, paramarg1: string): string;
    static readFileToString(paramarg0: File, paramarg1: Charset): string;
    static readLines(paramarg0: File): string[];
    static readLines(paramarg0: File, paramarg1: string): string[];
    static readLines(paramarg0: File, paramarg1: Charset): string[];
    static sizeOf(paramarg0: File): number;
    static sizeOfAsBigInteger(paramarg0: File): BigInteger;
    static sizeOfDirectory(paramarg0: File): number;
    static sizeOfDirectoryAsBigInteger(paramarg0: File): BigInteger;
    static streamFiles(paramarg0: File, paramarg1: boolean, ...paramarg2: (Object | null)[]): Stream<File>;
    static toFile(paramarg0: URL): File;
    static toFiles(...paramarg0: (Object | null)[]): (Object | null)[];
    static toURLs(...paramarg0: (Object | null)[]): (Object | null)[];
    static touch(paramarg0: File): void;
    static waitFor(paramarg0: File, paramarg1: number): boolean;
    static write(paramarg0: File, paramarg1: CharSequence): void;
    static write(paramarg0: File, paramarg1: CharSequence, paramarg2: boolean): void;
    static write(paramarg0: File, paramarg1: CharSequence, paramarg2: string): void;
    static write(paramarg0: File, paramarg1: CharSequence, paramarg2: string, paramarg3: boolean): void;
    static write(paramarg0: File, paramarg1: CharSequence, paramarg2: Charset): void;
    static write(paramarg0: File, paramarg1: CharSequence, paramarg2: Charset, paramarg3: boolean): void;
    static writeByteArrayToFile(paramarg0: File, paramarg1: number[]): void;
    static writeByteArrayToFile(paramarg0: File, paramarg1: number[], paramarg2: boolean): void;
    static writeByteArrayToFile(paramarg0: File, paramarg1: number[], paramarg2: number, paramarg3: number): void;
    static writeByteArrayToFile(paramarg0: File, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: boolean): void;
    static writeLines(paramarg0: File, paramarg1: string, paramarg2: Object[]): void;
    static writeLines(paramarg0: File, paramarg1: string, paramarg2: Object[], paramarg3: boolean): void;
    static writeLines(paramarg0: File, paramarg1: string, paramarg2: Object[], paramarg3: string): void;
    static writeLines(paramarg0: File, paramarg1: string, paramarg2: Object[], paramarg3: string, paramarg4: boolean): void;
    static writeLines(paramarg0: File, paramarg1: Object[]): void;
    static writeLines(paramarg0: File, paramarg1: Object[], paramarg2: boolean): void;
    static writeLines(paramarg0: File, paramarg1: Object[], paramarg2: string): void;
    static writeLines(paramarg0: File, paramarg1: Object[], paramarg2: string, paramarg3: boolean): void;
    static writeStringToFile(paramarg0: File, paramarg1: string): void;
    static writeStringToFile(paramarg0: File, paramarg1: string, paramarg2: boolean): void;
    static writeStringToFile(paramarg0: File, paramarg1: string, paramarg2: string): void;
    static writeStringToFile(paramarg0: File, paramarg1: string, paramarg2: string, paramarg3: boolean): void;
    static writeStringToFile(paramarg0: File, paramarg1: string, paramarg2: Charset): void;
    static writeStringToFile(paramarg0: File, paramarg1: string, paramarg2: Charset, paramarg3: boolean): void;
    constructor()
}