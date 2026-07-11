import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { SeekableByteChannel } from '../../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { AccessMode } from '../../../../../java/nio/file/AccessMode.d.ts'
import type { CopyOption } from '../../../../../java/nio/file/CopyOption.d.ts'
import type { DirectoryStream$Filter } from '../../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { FileStore } from '../../../../../java/nio/file/FileStore.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { LinkOption } from '../../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileAttribute } from '../../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileAttributeView } from '../../../../../java/nio/file/attribute/FileAttributeView.d.ts'
import type { FileSystemProvider } from '../../../../../java/nio/file/spi/FileSystemProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CopyOnWriteFSProvider$ChannelFactory } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/CopyOnWriteFSProvider$ChannelFactory.d.ts'
import type { CopyOnWriteFileSystem } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/CopyOnWriteFileSystem.d.ts'
export class CopyOnWriteFSProvider extends FileSystemProvider {
    static SCHEME: string;
    static installedProviders(): FileSystemProvider[];
    constructor(fileSystem: CopyOnWriteFileSystem)
    // private fs: CopyOnWriteFileSystem;
    checkAccess(path: Path[], ...modes: AccessMode[]): void;
    copy(source: Path[], target: Path[], ...options: CopyOption[]): void;
    createDirectory(dir: Path[], ...attrs: FileAttribute<Object>[]): void;
    delete(path: Path[]): void;
    getFileAttributeView<V extends FileAttributeView>(path: Path[], type: Class<V>, ...options: LinkOption[]): V;
    getFileStore(path: Path[]): FileStore;
    getFileSystem(uri: URI): FileSystem;
    getPath(uri: URI): Path[];
    getRealPath(path: (Object | null)[]): (Object | null)[];
    getScheme(): string;
    isHidden(path: Path[]): boolean;
    isSameFile(path: Path[], path2: Path[]): boolean;
    move(source: Path[], target: Path[], ...options: CopyOption[]): void;
    newByteChannel(path: Path[], options: OpenOption[], ...attrs: FileAttribute<Object>[]): SeekableByteChannel;
    // private newChannel<C extends unknown>(path: Path[], options: OpenOption[], attrs: FileAttribute<Object>[], channelFactory: (param0: Path[][], param1: OpenOption[], param2: Object | null) => C): C;
    newDirectoryStream(dir: Path[], filter: (param0: Path[]) => boolean): Path[][];
    newFileChannel(path: Path[], options: OpenOption[], ...attrs: FileAttribute<Object>[]): FileChannel;
    newFileSystem(uri: URI, env: { [key: string]: Object | null }): FileSystem;
    newFileSystem(arg0: Path[], arg1: { [key: string]: Object | null }): FileSystem;
    readAttributes<A extends BasicFileAttributes>(path: Path[], type: Class<A>, ...options: LinkOption[]): A;
    readAttributes(path: Path[], attributes: string, ...options: LinkOption[]): { [key: string]: Object };
    setAttribute(path: Path[], attribute: string, value: Object, ...options: LinkOption[]): void;
}