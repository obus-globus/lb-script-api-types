import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { BufferedWriter } from '../../../../../java/io/BufferedWriter.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { DirectoryStream$Filter } from '../../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { FileStore } from '../../../../../java/nio/file/FileStore.d.ts'
import type { FileVisitOption } from '../../../../../java/nio/file/FileVisitOption.d.ts'
import type { FileVisitor } from '../../../../../java/nio/file/FileVisitor.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileTime } from '../../../../../java/nio/file/attribute/FileTime.d.ts'
import type { PosixFilePermission } from '../../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { UserPrincipal } from '../../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class FilesUncheck extends Object {
    static copy(paramarg0: Path[][], paramarg1: Path[][], paramarg2: (Object | null)[]): Path[][];
    static copy(paramarg0: InputStream, paramarg1: Path[][], paramarg2: (Object | null)[]): number;
    static copy(paramarg0: Path[][], paramarg1: OutputStream): number;
    static createDirectories(paramarg0: Path[][], paramarg1: Object | null): Path[][];
    static createDirectory(paramarg0: Path[][], paramarg1: Object | null): Path[][];
    static createFile(paramarg0: Path[][], paramarg1: Object | null): Path[][];
    static createLink(paramarg0: Path[][], paramarg1: Path[][]): Path[][];
    static createSymbolicLink(paramarg0: Path[][], paramarg1: Path[][], paramarg2: Object | null): Path[][];
    static createTempDirectory(paramarg0: string, paramarg1: Object | null): Path[][];
    static createTempDirectory(paramarg0: Path[][], paramarg1: string, paramarg2: Object | null): Path[][];
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: Object | null): Path[][];
    static createTempFile(paramarg0: Path[][], paramarg1: string, paramarg2: string, paramarg3: Object | null): Path[][];
    static delete(paramarg0: Path[][]): void;
    static deleteIfExists(paramarg0: Path[][]): boolean;
    static find(paramarg0: Path[][], paramarg1: number, paramarg2: (param0: Path[][], param1: BasicFileAttributes) => boolean, paramarg3: (Object | null)[]): Stream<Path[][]>;
    static getAttribute(paramarg0: Path[][], paramarg1: string, paramarg2: (Object | null)[]): Object;
    static getFileStore(paramarg0: Path[][]): FileStore;
    static getLastModifiedTime(paramarg0: Path[][], paramarg1: (Object | null)[]): FileTime;
    static getOwner(paramarg0: Path[][], paramarg1: (Object | null)[]): UserPrincipal;
    static getPosixFilePermissions(paramarg0: Path[][], paramarg1: (Object | null)[]): PosixFilePermission[];
    static isHidden(paramarg0: Path[][]): boolean;
    static isSameFile(paramarg0: Path[][], paramarg1: Path[][]): boolean;
    static lines(paramarg0: Path[][]): Stream<string>;
    static lines(paramarg0: Path[][], paramarg1: Charset): Stream<string>;
    static list(paramarg0: Path[][]): Stream<Path[][]>;
    static move(paramarg0: Path[][], paramarg1: Path[][], paramarg2: (Object | null)[]): Path[][];
    static newBufferedReader(paramarg0: Path[][]): BufferedReader;
    static newBufferedReader(paramarg0: Path[][], paramarg1: Charset): BufferedReader;
    static newBufferedWriter(paramarg0: Path[][], paramarg1: Charset, paramarg2: (Object | null)[]): BufferedWriter;
    static newBufferedWriter(paramarg0: Path[][], paramarg1: (Object | null)[]): BufferedWriter;
    static newByteChannel(paramarg0: Path[][], paramarg1: (Object | null)[]): SeekableByteChannel;
    static newByteChannel(paramarg0: Path[][], paramarg1: OpenOption[], paramarg2: Object | null): SeekableByteChannel;
    static newDirectoryStream(paramarg0: Path[][]): Path[][][];
    static newDirectoryStream(paramarg0: Path[][], paramarg1: string): Path[][][];
    static newDirectoryStream(paramarg0: Path[][], paramarg1: (param0: Object) => boolean): Path[][][];
    static newInputStream(paramarg0: Path[][], paramarg1: (Object | null)[]): InputStream;
    static newOutputStream(paramarg0: Path[][], paramarg1: (Object | null)[]): OutputStream;
    static probeContentType(paramarg0: Path[][]): string;
    static readAllBytes(paramarg0: Path[][]): number[];
    static readAllLines(paramarg0: Path[][]): string[];
    static readAllLines(paramarg0: Path[][], paramarg1: Charset): string[];
    static readAttributes(paramarg0: Path[][], paramarg1: Class<BasicFileAttributes>, paramarg2: (Object | null)[]): BasicFileAttributes | null;
    static readAttributes(paramarg0: Path[][], paramarg1: string, paramarg2: (Object | null)[]): { [key: string]: Object };
    static readSymbolicLink(paramarg0: Path[][]): Path[][];
    static setAttribute(paramarg0: Path[][], paramarg1: string, paramarg2: Object, paramarg3: (Object | null)[]): Path[][];
    static setLastModifiedTime(paramarg0: Path[][], paramarg1: FileTime): Path[][];
    static setOwner(paramarg0: Path[][], paramarg1: UserPrincipal): Path[][];
    static setPosixFilePermissions(paramarg0: Path[][], paramarg1: PosixFilePermission[]): Path[][];
    static size(paramarg0: Path[][]): number;
    static walk(paramarg0: Path[][], paramarg1: number, paramarg2: (Object | null)[]): Stream<Path[][]>;
    static walk(paramarg0: Path[][], paramarg1: (Object | null)[]): Stream<Path[][]>;
    static walkFileTree(paramarg0: Path[][], paramarg1: FileVisitor<Object>): Path[][];
    static walkFileTree(paramarg0: Path[][], paramarg1: FileVisitOption[], paramarg2: number, paramarg3: FileVisitor<Object>): Path[][];
    static write(paramarg0: Path[][], paramarg1: number[], paramarg2: (Object | null)[]): Path[][];
    static write(paramarg0: Path[][], paramarg1: CharSequence[], paramarg2: Charset, paramarg3: (Object | null)[]): Path[][];
    static write(paramarg0: Path[][], paramarg1: CharSequence[], paramarg2: (Object | null)[]): Path[][];
    private constructor()
}