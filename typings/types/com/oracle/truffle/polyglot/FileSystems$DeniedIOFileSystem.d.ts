import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FileSystems$PolyglotFileSystem } from '../../../../com/oracle/truffle/polyglot/FileSystems$PolyglotFileSystem.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { AccessMode } from '../../../../java/nio/file/AccessMode.d.ts'
import type { CopyOption } from '../../../../java/nio/file/CopyOption.d.ts'
import type { DirectoryStream$Filter } from '../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileSystemProvider } from '../../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
export class FileSystems$DeniedIOFileSystem extends Object implements FileSystems$PolyglotFileSystem {
    constructor()
    // private defaultFileSystemProvider: FileSystemProvider;
    checkAccess(path: Path, modes: AccessMode[], ...linkOptions: LinkOption[]): void;
    copy(source: Path, target: Path, ...options: CopyOption[]): void;
    createDirectory(dir: Path, ...attrs: FileAttribute<Object>[]): void;
    createLink(link: Path, existing: Path): void;
    createSymbolicLink(link: Path, target: Path, ...attrs: FileAttribute<Object>[]): void;
    delete(path: Path): void;
    getFileStoreBlockSize(path: Path): number;
    getFileStoreTotalSpace(path: Path): number;
    getFileStoreUnallocatedSpace(path: Path): number;
    getFileStoreUsableSpace(path: Path): number;
    getTempDirectory(): Path;
    hasNoAccess(): boolean;
    isFileStoreReadOnly(path: Path): boolean;
    isHost(): boolean;
    isInternal(polyglot: AbstractPolyglotImpl): boolean;
    isSameFile(path1: Path, path2: Path, ...options: LinkOption[]): boolean;
    move(source: Path, target: Path, ...options: CopyOption[]): void;
    newByteChannel(inPath: Path, options: OpenOption[], ...attrs: FileAttribute<Object>[]): SeekableByteChannel;
    newDirectoryStream(dir: Path, filter: (param0: Path) => boolean): Path[];
    parsePath(uri: URI): Path;
    parsePath(path: string): Path;
    readAttributes(path: Path, attributes: string, ...options: LinkOption[]): JavaMap<string, Object>;
    readSymbolicLink(link: Path): Path;
    setAttribute(path: Path, attribute: string, value: Object, ...options: LinkOption[]): void;
    setCurrentWorkingDirectory(currentWorkingDirectory: Path): void;
    toAbsolutePath(path: Path): Path;
    toRealPath(path: Path, ...linkOptions: LinkOption[]): Path;
}