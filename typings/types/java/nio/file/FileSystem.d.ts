import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { FileStore } from '../../../java/nio/file/FileStore.d.ts'
import type { PathMatcher } from '../../../java/nio/file/PathMatcher.d.ts'
import type { WatchService } from '../../../java/nio/file/WatchService.d.ts'
import type { UserPrincipalLookupService } from '../../../java/nio/file/attribute/UserPrincipalLookupService.d.ts'
import type { FileSystemProvider } from '../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class FileSystem extends Object implements Closeable {
    constructor()
    close(): void;
    getFileStores(): FileStore[];
    getPath(arg0: string, arg1: string[]): Path[];
    getPathMatcher(arg0: string): (param0: Path[][]) => boolean;
    getRootDirectories(): Path[][];
    getSeparator(): string;
    getUserPrincipalLookupService(): UserPrincipalLookupService;
    isOpen(): boolean;
    isReadOnly(): boolean;
    newWatchService(): WatchService;
    provider(): FileSystemProvider;
    supportedFileAttributeViews(): string[];
}