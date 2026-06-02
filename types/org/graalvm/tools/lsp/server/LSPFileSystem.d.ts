import type { URI } from '../../../../../java/net/URI.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { AccessMode } from '../../../../../java/nio/file/AccessMode.d.ts'
import type { CopyOption } from '../../../../../java/nio/file/CopyOption.d.ts'
import type { DirectoryStream$Filter } from '../../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { LinkOption } from '../../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { FileAttribute } from '../../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileSystemProvider } from '../../../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
import type { VirtualLanguageServerFileProvider } from '../../../../../org/graalvm/tools/lsp/server/VirtualLanguageServerFileProvider.d.ts'
export class LSPFileSystem extends Object implements FileSystem {
    static allowInternalResourceAccess(paramfileSystem: FileSystem): FileSystem;
    static allowLanguageHomeAccess(paramfileSystem: FileSystem): FileSystem;
    static newCompositeFileSystem(paramfallbackFileSystem: FileSystem, paramdelegates: (Object | null)[]): FileSystem;
    static newDefaultFileSystem(): FileSystem;
    static newDenyIOFileSystem(): FileSystem;
    static newFileSystem(paramfileSystem: FileSystem): FileSystem;
    static newReadOnlyFileSystem(paramfileSystem: FileSystem): FileSystem;
    static newReadOnlyFileSystem(paramfileProvider: VirtualLanguageServerFileProvider): FileSystem;
    private constructor(fileSystemProvider: FileSystemProvider, fileProvider: VirtualLanguageServerFileProvider)
    // private delegate: FileSystemProvider;
    // private fileProvider: VirtualLanguageServerFileProvider;
    checkAccess(path: Path[], modes: AccessMode[], linkOptions: LinkOption[]): void;
    copy(source: Path[], target: Path[], options: CopyOption[]): void;
    copy(source: Path[], target: Path[], options: CopyOption[]): void;
    createDirectory(dir: Path[], attrs: FileAttribute<Object>[]): void;
    createLink(link: Path[], existing: Path[]): void;
    createLink(link: Path[], existing: Path[]): void;
    createSymbolicLink(link: Path[], target: Path[], attrs: FileAttribute<Object>[]): void;
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
    isFileStoreReadOnly(path: Path[]): boolean;
    isSameFile(path1: Path[], path2: Path[], options: LinkOption[]): boolean;
    move(source: Path[], target: Path[], options: CopyOption[]): void;
    move(source: Path[], target: Path[], options: CopyOption[]): void;
    newByteChannel(path: Path[], options: OpenOption[], attrs: FileAttribute<Object>[]): SeekableByteChannel;
    newDirectoryStream(dir: Path[], filter: (param0: Path[]) => kotlin.Boolean): T[];
    parsePath(uri: URI): Path[];
    parsePath(path: string): Path[];
    readAttributes(path: Path[], attributes: string, options: LinkOption[]): { [key: string]: Object };
    readSymbolicLink(link: Path[]): Path[];
    readSymbolicLink(link: Path[]): Path[];
    setAttribute(path: Path[], attribute: string, value: Object, options: LinkOption[]): void;
    setAttribute(path: Path[], attribute: string, value: Object, options: LinkOption[]): void;
    setCurrentWorkingDirectory(currentWorkingDirectory: Path[]): void;
    toAbsolutePath(path: Path[]): Path[];
    toRealPath(path: Path[], linkOptions: LinkOption[]): Path[];
}