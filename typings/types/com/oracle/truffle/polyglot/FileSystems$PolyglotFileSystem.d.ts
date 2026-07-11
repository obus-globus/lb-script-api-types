import type { URI } from '../../../../java/net/URI.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CopyOption } from '../../../../java/nio/file/CopyOption.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export interface FileSystems$PolyglotFileSystem extends Object, FileSystem{
    copy(source: Path[], target: Path[], ...options: CopyOption[]): void;
    createLink(link: Path[], existing: Path[]): void;
    createSymbolicLink(link: Path[], target: Path[], ...attrs: FileAttribute<Object>[]): void;
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
    isSameFile(path1: Path[], path2: Path[], ...options: LinkOption[]): boolean;
    move(source: Path[], target: Path[], ...options: CopyOption[]): void;
    parsePath(uri: URI): Path[];
    parsePath(path: string): Path[];
    readSymbolicLink(link: Path[]): Path[];
    setAttribute(path: Path[], attribute: string, value: Object, ...options: LinkOption[]): void;
    setCurrentWorkingDirectory(currentWorkingDirectory: Path[]): void;
    toAbsolutePath(path: Path[]): Path[];
}