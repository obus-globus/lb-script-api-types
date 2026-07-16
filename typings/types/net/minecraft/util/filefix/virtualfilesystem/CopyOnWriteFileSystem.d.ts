import type { CopyOption } from '../../../../../java/nio/file/CopyOption.d.ts'
import type { FileStore } from '../../../../../java/nio/file/FileStore.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { WatchService } from '../../../../../java/nio/file/WatchService.d.ts'
import type { UserPrincipalLookupService } from '../../../../../java/nio/file/attribute/UserPrincipalLookupService.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CopyOnWriteFSProvider } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/CopyOnWriteFSProvider.d.ts'
import type { CopyOnWriteFileStore } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/CopyOnWriteFileStore.d.ts'
import type { CopyOnWriteFileSystem$Moves } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/CopyOnWriteFileSystem$Moves.d.ts'
import type { DirectoryNode } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/DirectoryNode.d.ts'
import type { FileMove } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/FileMove.d.ts'
export class CopyOnWriteFileSystem extends FileSystem {
    static create(paramname: string, parambaseDirectory: Path, paramtmpDirectory: Path, paramskippedPaths: (param0: Path) => boolean): CopyOnWriteFileSystem;
    static createDirectories(paramdirectories: Path[]): void;
    static hardLinkFiles(parammoves: FileMove[]): void;
    static moveFiles(parammoves: FileMove[]): void;
    static moveFilesWithRetry(parammoves: FileMove[], ...paramoptions: CopyOption[]): void;
    static tryRevertMoves(parammoves: FileMove[], ...paramoptions: CopyOption[]): FileMove[];
    private constructor(name: string, baseDirectory: Path, tmpDirectory: Path, skippedPaths: (param0: Path) => boolean)
    // private baseDirectory: Path;
    // private fileTree: DirectoryNode;
    // private provider: CopyOnWriteFSProvider;
    // private rootPath: (Object | null)[];
    // private skippedPaths: (param0: Path) => boolean;
    // private store: CopyOnWriteFileStore;
    // private tmpDirectory: Path;
    // private tmpFileIndex: AtomicInteger;
    backingFileSystem(): FileSystem;
    baseDirectory(): Path;
    // private buildFileTreeFrom(baseDirectory: Path): DirectoryNode;
    close(): void;
    collectMoveOperations(outPath: Path): CopyOnWriteFileSystem$Moves;
    // private collectMoveOperations(outPath: Path, folder: DirectoryNode, result: CopyOnWriteFileSystem$Moves): void;
    createTemporaryFilePath(): Path;
    fileTree(): DirectoryNode;
    getFileStores(): FileStore[];
    getPath(first: string, ...more: string[]): (Object | null)[];
    getPathMatcher(syntaxAndPattern: string): (param0: Path) => boolean;
    getRootDirectories(): Path[];
    getSeparator(): string;
    getUserPrincipalLookupService(): UserPrincipalLookupService;
    isOpen(): boolean;
    isReadOnly(): boolean;
    newWatchService(): WatchService;
    provider(): CopyOnWriteFSProvider;
    resetFileTreeToBaseFolderContent(): void;
    rootPath(): (Object | null)[];
    store(): CopyOnWriteFileStore;
    supportedFileAttributeViews(): string[];
    tmpDirectory(): Path;
}