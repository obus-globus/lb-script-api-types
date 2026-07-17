import type { FileSystems$DeniedIOFileSystem } from '../../../../com/oracle/truffle/polyglot/FileSystems$DeniedIOFileSystem.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { AccessMode } from '../../../../java/nio/file/AccessMode.d.ts'
import type { DirectoryStream$Filter } from '../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class FileSystems$ReadOnlyFileSystem extends FileSystems$DeniedIOFileSystem {
    constructor(fileSystem: FileSystem, allowFileStoreInfo: boolean)
    // private allowFileStoreInfo: boolean;
    // private delegateFileSystem: FileSystem;
    checkAccess(path: Path, modes: AccessMode[], ...linkOptions: LinkOption[]): void;
    getEncoding(path: Path): Charset;
    getFileStoreBlockSize(path: Path): number;
    getFileStoreTotalSpace(path: Path): number;
    getFileStoreUnallocatedSpace(path: Path): number;
    getFileStoreUsableSpace(path: Path): number;
    getMimeType(path: Path): string;
    hasNoAccess(): boolean;
    isFileStoreReadOnly(path: Path): boolean;
    isHost(): boolean;
    isInternal(): boolean;
    isSameFile(path1: Path, path2: Path, ...options: LinkOption[]): boolean;
    newByteChannel(inPath: Path, options: OpenOption[], ...attrs: FileAttribute<Object>[]): SeekableByteChannel;
    newDirectoryStream(dir: Path, filter: (param0: Path) => boolean): Path[];
    parsePath(uri: URI): Path;
    parsePath(path: string): Path;
    readAttributes(path: Path, attributes: string, ...options: LinkOption[]): { [key: string]: Object };
    readSymbolicLink(link: Path): Path;
    setCurrentWorkingDirectory(currentWorkingDirectory: Path): void;
    toAbsolutePath(path: Path): Path;
    toRealPath(path: Path, ...linkOptions: LinkOption[]): Path;
}