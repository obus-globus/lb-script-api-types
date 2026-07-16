import type { TruffleFile$AttributeDescriptor } from '../../../../com/oracle/truffle/api/TruffleFile$AttributeDescriptor.d.ts'
import type { TruffleFile$Attributes } from '../../../../com/oracle/truffle/api/TruffleFile$Attributes.d.ts'
import type { TruffleFile$FileStoreInfo } from '../../../../com/oracle/truffle/api/TruffleFile$FileStoreInfo.d.ts'
import type { TruffleFile$FileSystemContext } from '../../../../com/oracle/truffle/api/TruffleFile$FileSystemContext.d.ts'
import type { BufferedReader } from '../../../../java/io/BufferedReader.d.ts'
import type { BufferedWriter } from '../../../../java/io/BufferedWriter.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { SeekableByteChannel } from '../../../../java/nio/channels/SeekableByteChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { AccessMode } from '../../../../java/nio/file/AccessMode.d.ts'
import type { CopyOption } from '../../../../java/nio/file/CopyOption.d.ts'
import type { FileVisitOption } from '../../../../java/nio/file/FileVisitOption.d.ts'
import type { FileVisitor } from '../../../../java/nio/file/FileVisitor.d.ts'
import type { LinkOption } from '../../../../java/nio/file/LinkOption.d.ts'
import type { OpenOption } from '../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileAttribute } from '../../../../java/nio/file/attribute/FileAttribute.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { GroupPrincipal } from '../../../../java/nio/file/attribute/GroupPrincipal.d.ts'
import type { PosixFilePermission } from '../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FileSystem } from '../../../../org/graalvm/polyglot/io/FileSystem.d.ts'
export class TruffleFile extends Object {
    static CREATION_TIME: TruffleFile$AttributeDescriptor<FileTime>;
    static IS_DIRECTORY: TruffleFile$AttributeDescriptor<boolean>;
    static IS_OTHER: TruffleFile$AttributeDescriptor<boolean>;
    static IS_REGULAR_FILE: TruffleFile$AttributeDescriptor<boolean>;
    static IS_SYMBOLIC_LINK: TruffleFile$AttributeDescriptor<boolean>;
    static LAST_ACCESS_TIME: TruffleFile$AttributeDescriptor<FileTime>;
    static LAST_MODIFIED_TIME: TruffleFile$AttributeDescriptor<FileTime>;
    static SIZE: TruffleFile$AttributeDescriptor<number>;
    static UNIX_CTIME: TruffleFile$AttributeDescriptor<FileTime>;
    static UNIX_DEV: TruffleFile$AttributeDescriptor<number>;
    static UNIX_GID: TruffleFile$AttributeDescriptor<number>;
    static UNIX_GROUP: TruffleFile$AttributeDescriptor<GroupPrincipal>;
    static UNIX_INODE: TruffleFile$AttributeDescriptor<number>;
    static UNIX_MODE: TruffleFile$AttributeDescriptor<number>;
    static UNIX_NLINK: TruffleFile$AttributeDescriptor<number>;
    static UNIX_OWNER: TruffleFile$AttributeDescriptor<UserPrincipal>;
    static UNIX_PERMISSIONS: TruffleFile$AttributeDescriptor<PosixFilePermission[]>;
    static UNIX_RDEV: TruffleFile$AttributeDescriptor<number>;
    static UNIX_UID: TruffleFile$AttributeDescriptor<number>;
    constructor(fileSystemContext: TruffleFile$FileSystemContext, path: Path)
    constructor(fileSystemContext: TruffleFile$FileSystemContext, path: Path, normalizedPath: Path, isEmptyPath: boolean)
    // private fileSystemContext: TruffleFile$FileSystemContext;
    // private isEmptyPath: boolean;
    // private normalizedPath: Path;
    readonly path: Path;
    // private checkAccess(modes: AccessMode[], ...linkOptions: LinkOption[]): boolean;
    // private checkAccess(...modes: AccessMode[]): boolean;
    // private checkFileOperationPreconditions(): void;
    copy(target: TruffleFile, ...options: CopyOption[]): void;
    // private createDirAndCheck(dir: Path, ...attrs: FileAttribute<Object>[]): Path;
    createDirectories(...attributes: FileAttribute<Object>[]): void;
    createDirectory(...attributes: FileAttribute<Object>[]): void;
    // private createDirectoryImpl(dir: Path, ...attrs: FileAttribute<Object>[]): Path;
    createFile(...attributes: FileAttribute<Object>[]): void;
    createLink(target: TruffleFile): void;
    createSymbolicLink(target: TruffleFile, ...attrs: FileAttribute<Object>[]): void;
    delete(): void;
    detectEncoding(mimeType: string): Charset;
    detectMimeType(): string;
    detectMimeType(validMimeTypes: string[]): string;
    endsWith(other: TruffleFile): boolean;
    endsWith(other: string): boolean;
    equals(other: Object | null): boolean;
    exists(...options: LinkOption[]): boolean;
    // private findExisting(forPath: Path): Path;
    getAbsoluteFile(): TruffleFile;
    getAttribute<T extends unknown>(attribute: TruffleFile$AttributeDescriptor<T>, ...linkOptions: LinkOption[]): T;
    // private getAttributeImpl<T extends unknown>(forPath: Path, attribute: string, type: Class<T>, ...options: LinkOption[]): T;
    // private getAttributeImpl(forPath: Path, attribute: string, ...options: LinkOption[]): Object;
    // private getAttributeImpl<T extends unknown>(attribute: string, type: Class<T>, ...options: LinkOption[]): T;
    getAttributes(attributes: TruffleFile$AttributeDescriptor<Object>[], ...linkOptions: LinkOption[]): TruffleFile$Attributes;
    getCanonicalFile(...options: LinkOption[]): TruffleFile;
    getCreationTime(...options: LinkOption[]): FileTime;
    getFileStoreInfo(): TruffleFile$FileStoreInfo;
    getFileSystemContext(): TruffleFile$FileSystemContext;
    getGroup(...options: LinkOption[]): GroupPrincipal;
    getLastAccessTime(...options: LinkOption[]): FileTime;
    getLastModifiedTime(...options: LinkOption[]): FileTime;
    getMimeType(): string;
    getName(): string;
    getOwner(...options: LinkOption[]): UserPrincipal;
    getParent(): TruffleFile;
    getPath(): string;
    getPosixPermissions(...linkOptions: LinkOption[]): PosixFilePermission[];
    getSPIFileSystem(): FileSystem;
    getSPIPath(): Path;
    hashCode(): number;
    isAbsolute(): boolean;
    isDirectory(...options: LinkOption[]): boolean;
    isExecutable(): boolean;
    // private isNormalized(): boolean;
    isReadable(): boolean;
    isRegularFile(...options: LinkOption[]): boolean;
    isSameFile(other: TruffleFile, ...options: LinkOption[]): boolean;
    isSymbolicLink(): boolean;
    isWritable(): boolean;
    list(): TruffleFile[];
    move(target: TruffleFile, ...options: CopyOption[]): void;
    newBufferedReader(): BufferedReader;
    newBufferedReader(charset: Charset): BufferedReader;
    newBufferedWriter(charset: Charset, ...options: OpenOption[]): BufferedWriter;
    newBufferedWriter(...options: OpenOption[]): BufferedWriter;
    newByteChannel(options: OpenOption[], ...attributes: FileAttribute<Object>[]): SeekableByteChannel;
    newDirectoryStream(): TruffleFile[];
    newInputStream(...options: OpenOption[]): InputStream;
    newOutputStream(...options: OpenOption[]): OutputStream;
    normalize(): TruffleFile;
    readAllBytes(): number[];
    readSymbolicLink(): TruffleFile;
    relativize(other: TruffleFile): TruffleFile;
    resolve(name: string): TruffleFile;
    resolveSibling(name: string): TruffleFile;
    setAttribute<T extends unknown>(attribute: TruffleFile$AttributeDescriptor<T>, value: T, ...linkOptions: LinkOption[]): void;
    setCreationTime(time: FileTime, ...options: LinkOption[]): void;
    setLastAccessTime(time: FileTime, ...options: LinkOption[]): void;
    setLastModifiedTime(time: FileTime, ...options: LinkOption[]): void;
    setPosixPermissions(permissions: PosixFilePermission[], ...linkOptions: LinkOption[]): void;
    size(...options: LinkOption[]): number;
    startsWith(other: TruffleFile): boolean;
    startsWith(other: string): boolean;
    // private toAbsolutePathImpl(): Path[];
    toRelativeUri(): URI;
    toString(): string;
    toUri(): URI;
    visit(visitor: FileVisitor<TruffleFile>, maxDepth: number, ...options: FileVisitOption[]): void;
    // private wrapHostException<T extends Throwable>(t: T): RuntimeException;
}