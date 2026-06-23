import type { FileSystems$CompositeFileSystem$FileSystemInfo } from '../../../../com/oracle/truffle/polyglot/FileSystems$CompositeFileSystem$FileSystemInfo.d.ts'
import type { FileSystems$PolyglotFileSystem } from '../../../../com/oracle/truffle/polyglot/FileSystems$PolyglotFileSystem.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { AccessMode } from '../../../../java/nio/file/AccessMode.d.ts'
import type { DirectoryStream$Filter } from '../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { FileSystem$Selector } from '../../../../org/graalvm/polyglot/io/FileSystem$Selector.d.ts'
export class FileSystems$CompositeFileSystem extends Object implements FileSystems$PolyglotFileSystem {
    constructor(polyglot: AbstractPolyglotImpl, fallBackFileSystem: FileSystem, delegates: FileSystem$Selector[])
    // private changeDirLock: ReadWriteLock;
    readonly currentWorkingDirectory: Path[];
    // private delegates: FileSystem$Selector[];
    // private fallBackFileSystem: FileSystem;
    readonly host: boolean;
    // private internal: boolean;
    // private noAccess: boolean;
    // private parentDirectory: Path[];
    // private thisDirectory: Path[];
    checkAccess(path: Path[], modes: AccessMode[], linkOptions: LinkOption[]): void;
    createDirectory(dir: Path[], attrs: FileAttribute<Object>[]): void;
    createLink(link: Path[], existing: Path[]): void;
    createSymbolicLink(link: Path[], target: Path[], attrs: FileAttribute<Object>[]): void;
    delete(path: Path[]): void;
    getEncoding(path: Path[]): Charset;
    getFileStoreBlockSize(path: Path[]): number;
    getFileStoreTotalSpace(path: Path[]): number;
    getFileStoreUnallocatedSpace(path: Path[]): number;
    getFileStoreUsableSpace(path: Path[]): number;
    getMimeType(path: Path[]): string;
    getPathSeparator(): string;
    getSeparator(): string;
    getTempDirectory(): Path[];
    hasNoAccess(): boolean;
    isFileStoreReadOnly(path: Path[]): boolean;
    isHost(): boolean;
    isInternal(polyglot: AbstractPolyglotImpl): boolean;
    // private isNormalized(path: Path[]): boolean;
    isSameFile(path1: Path[], path2: Path[], options: LinkOption[]): boolean;
    newByteChannel(path: Path[], options: OpenOption[], attrs: FileAttribute<Object>[]): SeekableByteChannel;
    newDirectoryStream(dir: Path[], filter: (param0: Path[]) => boolean): Path[][];
    parsePath(uri: URI): Path[];
    parsePath(path: string): Path[];
    readAttributes(path: Path[], attributes: string, options: LinkOption[]): { [key: string]: Object };
    readSymbolicLink(link: Path[]): Path[];
    // private selectFileSystem(path: Path[]): FileSystems$CompositeFileSystem$FileSystemInfo;
    setAttribute(path: Path[], attribute: string, value: Object, options: LinkOption[]): void;
    setCurrentWorkingDirectory(newCurrentWorkingDirectory: Path[]): void;
    toAbsolutePath(path: Path[]): Path[];
    // private toAbsolutePathImpl(path: Path[]): Path[];
    // private toNormalizedAbsolutePath(path: Path[]): Path[];
    toRealPath(path: Path[], linkOptions: LinkOption[]): Path[];
}