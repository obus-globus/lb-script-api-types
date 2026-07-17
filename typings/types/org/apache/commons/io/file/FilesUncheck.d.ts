import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { BufferedWriter } from '../../../../../java/io/BufferedWriter.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CopyOption } from '../../../../../java/nio/file/CopyOption.d.ts'
import type { DirectoryStream$Filter } from '../../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { FileStore } from '../../../../../java/nio/file/FileStore.d.ts'
import type { FileVisitOption } from '../../../../../java/nio/file/FileVisitOption.d.ts'
import type { FileVisitor } from '../../../../../java/nio/file/FileVisitor.d.ts'
import type { LinkOption } from '../../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileAttribute } from '../../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { PosixFilePermission } from '../../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { UserPrincipal } from '../../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class FilesUncheck extends Object {
    static copy(paramarg0: Path, paramarg1: Path, ...paramarg2: CopyOption[]): Path;
    static copy(paramarg0: InputStream, paramarg1: Path, ...paramarg2: CopyOption[]): number;
    static copy(paramarg0: Path, paramarg1: OutputStream): number;
    static createDirectories(paramarg0: Path, ...paramarg1: FileAttribute<Object>[]): Path;
    static createDirectory(paramarg0: Path, ...paramarg1: FileAttribute<Object>[]): Path;
    static createFile(paramarg0: Path, ...paramarg1: FileAttribute<Object>[]): Path;
    static createLink(paramarg0: Path, paramarg1: Path): Path;
    static createSymbolicLink(paramarg0: Path, paramarg1: Path, ...paramarg2: FileAttribute<Object>[]): Path;
    static createTempDirectory(paramarg0: string, ...paramarg1: FileAttribute<Object>[]): Path;
    static createTempDirectory(paramarg0: Path, paramarg1: string, ...paramarg2: FileAttribute<Object>[]): Path;
    static createTempFile(paramarg0: string, paramarg1: string, ...paramarg2: FileAttribute<Object>[]): Path;
    static createTempFile(paramarg0: Path, paramarg1: string, paramarg2: string, ...paramarg3: FileAttribute<Object>[]): Path;
    static delete(paramarg0: Path): void;
    static deleteIfExists(paramarg0: Path): boolean;
    static find(paramarg0: Path, paramarg1: number, paramarg2: (param0: Path, param1: BasicFileAttributes) => boolean, ...paramarg3: FileVisitOption[]): Stream<Path>;
    static getAttribute(paramarg0: Path, paramarg1: string, ...paramarg2: LinkOption[]): Object;
    static getFileStore(paramarg0: Path): FileStore;
    static getLastModifiedTime(paramarg0: Path, ...paramarg1: LinkOption[]): FileTime;
    static getOwner(paramarg0: Path, ...paramarg1: LinkOption[]): UserPrincipal;
    static getPosixFilePermissions(paramarg0: Path, ...paramarg1: LinkOption[]): PosixFilePermission[];
    static isHidden(paramarg0: Path): boolean;
    static isSameFile(paramarg0: Path, paramarg1: Path): boolean;
    static lines(paramarg0: Path): Stream<string>;
    static lines(paramarg0: Path, paramarg1: Charset): Stream<string>;
    static list(paramarg0: Path): Stream<Path>;
    static move(paramarg0: Path, paramarg1: Path, ...paramarg2: CopyOption[]): Path;
    static newBufferedReader(paramarg0: Path): BufferedReader;
    static newBufferedReader(paramarg0: Path, paramarg1: Charset): BufferedReader;
    static newBufferedWriter(paramarg0: Path, paramarg1: Charset, ...paramarg2: OpenOption[]): BufferedWriter;
    static newBufferedWriter(paramarg0: Path, ...paramarg1: OpenOption[]): BufferedWriter;
    static newByteChannel(paramarg0: Path, ...paramarg1: OpenOption[]): SeekableByteChannel;
    static newByteChannel(paramarg0: Path, paramarg1: OpenOption[], ...paramarg2: FileAttribute<Object>[]): SeekableByteChannel;
    static newDirectoryStream(paramarg0: Path): Path[];
    static newDirectoryStream(paramarg0: Path, paramarg1: string): Path[];
    static newDirectoryStream(paramarg0: Path, paramarg1: (param0: Object) => boolean): Path[];
    static newInputStream(paramarg0: Path, ...paramarg1: OpenOption[]): InputStream;
    static newOutputStream(paramarg0: Path, ...paramarg1: OpenOption[]): OutputStream;
    static probeContentType(paramarg0: Path): string;
    static readAllBytes(paramarg0: Path): number[];
    static readAllLines(paramarg0: Path): string[];
    static readAllLines(paramarg0: Path, paramarg1: Charset): string[];
    static readAttributes<A extends BasicFileAttributes>(paramarg0: Path, paramarg1: Class<A>, ...paramarg2: LinkOption[]): A;
    static readAttributes(paramarg0: Path, paramarg1: string, ...paramarg2: LinkOption[]): JavaMap<string, Object>;
    static readSymbolicLink(paramarg0: Path): Path;
    static setAttribute(paramarg0: Path, paramarg1: string, paramarg2: Object, ...paramarg3: LinkOption[]): Path;
    static setLastModifiedTime(paramarg0: Path, paramarg1: FileTime): Path;
    static setOwner(paramarg0: Path, paramarg1: UserPrincipal): Path;
    static setPosixFilePermissions(paramarg0: Path, paramarg1: PosixFilePermission[]): Path;
    static size(paramarg0: Path): number;
    static walk(paramarg0: Path, paramarg1: number, ...paramarg2: FileVisitOption[]): Stream<Path>;
    static walk(paramarg0: Path, ...paramarg1: FileVisitOption[]): Stream<Path>;
    static walkFileTree(paramarg0: Path, paramarg1: FileVisitor<Object>): Path;
    static walkFileTree(paramarg0: Path, paramarg1: FileVisitOption[], paramarg2: number, paramarg3: FileVisitor<Object>): Path;
    static write(paramarg0: Path, paramarg1: number[], ...paramarg2: OpenOption[]): Path;
    static write(paramarg0: Path, paramarg1: CharSequence[], paramarg2: Charset, ...paramarg3: OpenOption[]): Path;
    static write(paramarg0: Path, paramarg1: CharSequence[], ...paramarg2: OpenOption[]): Path;
    private constructor()
}