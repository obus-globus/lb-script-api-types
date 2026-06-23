import type { FileStore } from '../../../../../java/nio/file/FileStore.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { WatchService } from '../../../../../java/nio/file/WatchService.d.ts'
import type { UserPrincipalLookupService } from '../../../../../java/nio/file/attribute/UserPrincipalLookupService.d.ts'
import type { FileSystemProvider } from '../../../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LinkFileSystem$Builder } from '../../../../../net/minecraft/server/packs/linkfs/LinkFileSystem$Builder.d.ts'
import type { LinkFileSystem$DirectoryEntry } from '../../../../../net/minecraft/server/packs/linkfs/LinkFileSystem$DirectoryEntry.d.ts'
export class LinkFileSystem extends FileSystem {
    static PATH_SEPARATOR: string;
    static builder(): LinkFileSystem$Builder;
    private constructor(name: string, rootEntry: LinkFileSystem$DirectoryEntry)
    // private provider: FileSystemProvider;
    // private root: (Object | null)[];
    // private store: FileStore;
    close(): void;
    getFileStores(): FileStore[];
    getPath(first: string, more: string[]): Path[];
    getPathMatcher(syntaxAndPattern: string): (param0: Path[][]) => boolean;
    getRootDirectories(): Path[][];
    getSeparator(): string;
    getUserPrincipalLookupService(): UserPrincipalLookupService;
    isOpen(): boolean;
    isReadOnly(): boolean;
    newWatchService(): WatchService;
    provider(): FileSystemProvider;
    rootPath(): (Object | null)[];
    store(): FileStore;
    supportedFileAttributeViews(): string[];
}