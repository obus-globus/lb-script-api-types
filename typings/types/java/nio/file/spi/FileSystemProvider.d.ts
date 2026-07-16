import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { AsynchronousFileChannel } from '../../../../java/nio/channels/AsynchronousFileChannel.d.ts'
import type { FileChannel } from '../../../../java/nio/channels/FileChannel.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { AccessMode } from '../../../../java/nio/file/AccessMode.d.ts'
import type { CopyOption } from '../../../../java/nio/file/CopyOption.d.ts'
import type { DirectoryStream$Filter } from '../../../../java/nio/file/DirectoryStream$Filter.d.ts'
import type { FileStore } from '../../../../java/nio/file/FileStore.d.ts'
import type { FileSystem } from '../../../../java/nio/file/FileSystem.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileAttributeView } from '../../../../java/nio/file/attribute/FileAttributeView.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FileSystemProvider extends Object {
    static installedProviders(): FileSystemProvider[];
    constructor()
    checkAccess(arg0: Path, ...arg1: AccessMode[]): void;
    copy(arg0: Path, arg1: Path, ...arg2: CopyOption[]): void;
    createDirectory(arg0: Path, ...arg1: FileAttribute<Object>[]): void;
    createLink(arg0: Path, arg1: Path): void;
    createSymbolicLink(arg0: Path, arg1: Path, ...arg2: FileAttribute<Object>[]): void;
    delete(arg0: Path): void;
    deleteIfExists(arg0: Path): boolean;
    exists(arg0: Path, ...arg1: LinkOption[]): boolean;
    getFileAttributeView<V extends FileAttributeView>(arg0: Path, arg1: Class<V>, ...arg2: LinkOption[]): V;
    getFileStore(arg0: Path): FileStore;
    getFileSystem(arg0: URI): FileSystem;
    getPath(arg0: URI): Path;
    getScheme(): string;
    isHidden(arg0: Path): boolean;
    isSameFile(arg0: Path, arg1: Path): boolean;
    move(arg0: Path, arg1: Path, ...arg2: CopyOption[]): void;
    newAsynchronousFileChannel(arg0: Path, arg1: OpenOption[], arg2: ExecutorService, ...arg3: FileAttribute<Object>[]): AsynchronousFileChannel;
    newByteChannel(arg0: Path, arg1: OpenOption[], ...arg2: FileAttribute<Object>[]): SeekableByteChannel;
    newDirectoryStream(arg0: Path, arg1: (param0: Path) => boolean): Path[];
    newFileChannel(arg0: Path, arg1: OpenOption[], ...arg2: FileAttribute<Object>[]): FileChannel;
    newFileSystem(arg0: URI, arg1: { [key: string]: Object | null }): FileSystem;
    newFileSystem(arg0: Path, arg1: { [key: string]: Object | null }): FileSystem;
    newInputStream(arg0: Path, ...arg1: OpenOption[]): InputStream;
    newOutputStream(arg0: Path, ...arg1: OpenOption[]): OutputStream;
    readAttributes<A extends BasicFileAttributes>(arg0: Path, arg1: Class<A>, ...arg2: LinkOption[]): A;
    readAttributes(arg0: Path, arg1: string, ...arg2: LinkOption[]): { [key: string]: Object };
    readAttributesIfExists<A extends BasicFileAttributes>(arg0: Path, arg1: Class<A>, ...arg2: LinkOption[]): A;
    readSymbolicLink(arg0: Path): Path;
    setAttribute(arg0: Path, arg1: string, arg2: Object, ...arg3: LinkOption[]): void;
}