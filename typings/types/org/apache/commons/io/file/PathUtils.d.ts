import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CopyOption } from '../../../../../java/nio/file/CopyOption.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { FileVisitOption } from '../../../../../java/nio/file/FileVisitOption.d.ts'
import type { FileVisitResult } from '../../../../../java/nio/file/FileVisitResult.d.ts'
import type { FileVisitor } from '../../../../../java/nio/file/FileVisitor.d.ts'
import type { LinkOption } from '../../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { AclEntry } from '../../../../../java/nio/file/attribute/AclEntry.d.ts'
import type { AclFileAttributeView } from '../../../../../java/nio/file/attribute/AclFileAttributeView.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { DosFileAttributeView } from '../../../../../java/nio/file/attribute/DosFileAttributeView.d.ts'
import type { DosFileAttributes } from '../../../../../java/nio/file/attribute/DosFileAttributes.d.ts'
import type { FileAttribute } from '../../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { PosixFileAttributeView } from '../../../../../java/nio/file/attribute/PosixFileAttributeView.d.ts'
import type { PosixFileAttributes } from '../../../../../java/nio/file/attribute/PosixFileAttributes.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { ChronoZonedDateTime } from '../../../../../java/time/chrono/ChronoZonedDateTime.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Counters$PathCounters } from '../../../../../org/apache/commons/io/file/Counters$PathCounters.d.ts'
import type { DeleteOption } from '../../../../../org/apache/commons/io/file/DeleteOption.d.ts'
import type { PathFilter } from '../../../../../org/apache/commons/io/file/PathFilter.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
export class PathUtils extends Object {
    static EMPTY_COPY_OPTIONS: CopyOption[];
    static EMPTY_DELETE_OPTION_ARRAY: DeleteOption[];
    static EMPTY_FILE_ATTRIBUTE_ARRAY: FileAttribute<Object>[];
    static EMPTY_FILE_VISIT_OPTION_ARRAY: FileVisitOption[];
    static EMPTY_LINK_OPTION_ARRAY: LinkOption[];
    static EMPTY_OPEN_OPTION_ARRAY: OpenOption[];
    static EMPTY_PATH_ARRAY: Path[];
    static NOFOLLOW_LINK_OPTION_ARRAY: LinkOption[];
    static cleanDirectory(paramarg0: Path): Counters$PathCounters;
    static cleanDirectory(paramarg0: Path, ...paramarg1: DeleteOption[]): Counters$PathCounters;
    static contentEquals(paramarg0: FileSystem, paramarg1: FileSystem): boolean;
    static copy(paramarg0: () => InputStream, paramarg1: Path, ...paramarg2: CopyOption[]): number;
    static copyDirectory(paramarg0: Path, paramarg1: Path, ...paramarg2: CopyOption[]): Counters$PathCounters;
    static copyFile(paramarg0: URL, paramarg1: Path, ...paramarg2: CopyOption[]): Path;
    static copyFileToDirectory(paramarg0: URL, paramarg1: Path, ...paramarg2: CopyOption[]): Path;
    static copyFileToDirectory(paramarg0: Path, paramarg1: Path, ...paramarg2: CopyOption[]): Path;
    static countDirectory(paramarg0: Path): Counters$PathCounters;
    static countDirectoryAsBigInteger(paramarg0: Path): Counters$PathCounters;
    static createParentDirectories(paramarg0: Path, paramarg1: LinkOption, ...paramarg2: FileAttribute<Object>[]): Path;
    static createParentDirectories(paramarg0: Path, ...paramarg1: FileAttribute<Object>[]): Path;
    static current(): Path;
    static delete(paramarg0: Path): Counters$PathCounters;
    static delete(paramarg0: Path, paramarg1: LinkOption[], ...paramarg2: DeleteOption[]): Counters$PathCounters;
    static delete(paramarg0: Path, ...paramarg1: DeleteOption[]): Counters$PathCounters;
    static deleteDirectory(paramarg0: Path): Counters$PathCounters;
    static deleteDirectory(paramarg0: Path, paramarg1: LinkOption[], ...paramarg2: DeleteOption[]): Counters$PathCounters;
    static deleteDirectory(paramarg0: Path, ...paramarg1: DeleteOption[]): Counters$PathCounters;
    static deleteFile(paramarg0: Path): Counters$PathCounters;
    static deleteFile(paramarg0: Path, paramarg1: LinkOption[], ...paramarg2: DeleteOption[]): Counters$PathCounters;
    static deleteFile(paramarg0: Path, ...paramarg1: DeleteOption[]): Counters$PathCounters;
    static deleteOnExit(paramarg0: Path): void;
    static directoryAndFileContentEquals(paramarg0: Path, paramarg1: Path): boolean;
    static directoryAndFileContentEquals(paramarg0: Path, paramarg1: Path, paramarg2: LinkOption[], paramarg3: OpenOption[], paramarg4: FileVisitOption[]): boolean;
    static directoryContentEquals(paramarg0: Path, paramarg1: Path): boolean;
    static directoryContentEquals(paramarg0: Path, paramarg1: Path, paramarg2: number, paramarg3: LinkOption[], paramarg4: FileVisitOption[]): boolean;
    static fileContentEquals(paramarg0: Path, paramarg1: Path): boolean;
    static fileContentEquals(paramarg0: Path, paramarg1: Path, paramarg2: LinkOption[], paramarg3: OpenOption[]): boolean;
    static filter(paramarg0: (param0: Path, param1: BasicFileAttributes) => FileVisitResult, ...paramarg1: Path[]): Path[];
    static getAclEntryList(paramarg0: Path): AclEntry[];
    static getAclFileAttributeView(paramarg0: Path, ...paramarg1: LinkOption[]): AclFileAttributeView;
    static getBaseName(paramarg0: Path): string;
    static getDosFileAttributeView(paramarg0: Path, ...paramarg1: LinkOption[]): DosFileAttributeView;
    static getExtension(paramarg0: Path): string;
    static getFileName<R extends unknown>(paramarg0: Path, paramarg1: (param0: Path) => R): R;
    static getFileNameString(paramarg0: Path): string;
    static getLastModifiedFileTime(paramarg0: File): FileTime;
    static getLastModifiedFileTime(paramarg0: URI): FileTime;
    static getLastModifiedFileTime(paramarg0: URL): FileTime;
    static getLastModifiedFileTime(paramarg0: Path, ...paramarg1: LinkOption[]): FileTime;
    static getLastModifiedFileTime(paramarg0: Path, paramarg1: FileTime, ...paramarg2: LinkOption[]): FileTime;
    static getPosixFileAttributeView(paramarg0: Path, ...paramarg1: LinkOption[]): PosixFileAttributeView;
    static getTempDirectory(): Path;
    static isDirectory(paramarg0: Path, ...paramarg1: LinkOption[]): boolean;
    static isEmpty(paramarg0: Path): boolean;
    static isEmptyDirectory(paramarg0: Path): boolean;
    static isEmptyFile(paramarg0: Path): boolean;
    static isNewer(paramarg0: Path, paramarg1: Path): boolean;
    static isNewer(paramarg0: Path, paramarg1: FileTime, ...paramarg2: LinkOption[]): boolean;
    static isNewer(paramarg0: Path, paramarg1: Instant, ...paramarg2: LinkOption[]): boolean;
    static isNewer(paramarg0: Path, paramarg1: ChronoZonedDateTime<any>, ...paramarg2: LinkOption[]): boolean;
    static isNewer(paramarg0: Path, paramarg1: number, ...paramarg2: LinkOption[]): boolean;
    static isOlder(paramarg0: Path, paramarg1: Path): boolean;
    static isOlder(paramarg0: Path, paramarg1: FileTime, ...paramarg2: LinkOption[]): boolean;
    static isOlder(paramarg0: Path, paramarg1: Instant, ...paramarg2: LinkOption[]): boolean;
    static isOlder(paramarg0: Path, paramarg1: number, ...paramarg2: LinkOption[]): boolean;
    static isPosix(paramarg0: Path, ...paramarg1: LinkOption[]): boolean;
    static isRegularFile(paramarg0: Path, ...paramarg1: LinkOption[]): boolean;
    static newDirectoryStream(paramarg0: Path, paramarg1: (param0: Path, param1: BasicFileAttributes) => FileVisitResult): Path[];
    static newOutputStream(paramarg0: Path, paramarg1: boolean): OutputStream;
    static noFollowLinkOptionArray(): LinkOption[];
    static readAttributes<A extends BasicFileAttributes>(paramarg0: Path, paramarg1: Class<A>, ...paramarg2: LinkOption[]): A;
    static readBasicFileAttributes(paramarg0: Path): BasicFileAttributes;
    static readBasicFileAttributes(paramarg0: Path, ...paramarg1: LinkOption[]): BasicFileAttributes;
    static readBasicFileAttributesUnchecked(paramarg0: Path): BasicFileAttributes;
    static readDosFileAttributes(paramarg0: Path, ...paramarg1: LinkOption[]): DosFileAttributes;
    static readOsFileAttributes(paramarg0: Path, ...paramarg1: LinkOption[]): BasicFileAttributes;
    static readPosixFileAttributes(paramarg0: Path, ...paramarg1: LinkOption[]): PosixFileAttributes;
    static readString(paramarg0: Path, paramarg1: Charset): string;
    static setLastModifiedTime(paramarg0: Path, paramarg1: Path): void;
    static setReadOnly(paramarg0: Path, paramarg1: boolean, ...paramarg2: LinkOption[]): Path;
    static sizeOf(paramarg0: Path): number;
    static sizeOfAsBigInteger(paramarg0: Path): BigInteger;
    static sizeOfDirectory(paramarg0: Path): number;
    static sizeOfDirectoryAsBigInteger(paramarg0: Path): BigInteger;
    static touch(paramarg0: Path): Path;
    static visitFileTree<T extends FileVisitor<Object>>(paramarg0: T, paramarg1: string, ...paramarg2: string[]): T;
    static visitFileTree<T extends FileVisitor<Object>>(paramarg0: T, paramarg1: URI): T;
    static visitFileTree<T extends FileVisitor<Object>>(paramarg0: T, paramarg1: Path): T;
    static visitFileTree<T extends FileVisitor<Object>>(paramarg0: T, paramarg1: Path, paramarg2: FileVisitOption[], paramarg3: number): T;
    static waitFor(paramarg0: Path, paramarg1: Duration, ...paramarg2: LinkOption[]): boolean;
    static walk(paramarg0: Path, paramarg1: (param0: Path, param1: BasicFileAttributes) => FileVisitResult, paramarg2: number, paramarg3: boolean, ...paramarg4: FileVisitOption[]): Stream<Path>;
    static writeString(paramarg0: Path, paramarg1: CharSequence, paramarg2: Charset, ...paramarg3: OpenOption[]): Path;
    private constructor()
}