import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { GroupPrincipal } from '../../../../java/nio/file/attribute/GroupPrincipal.d.ts'
import type { PosixFilePermission } from '../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PosixFileAttributes extends BasicFileAttributes, Object{
    creationTime(): FileTime;
    fileKey(): Object;
    group(): GroupPrincipal;
    isDirectory(): boolean;
    isOther(): boolean;
    isRegularFile(): boolean;
    isSymbolicLink(): boolean;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    owner(): UserPrincipal;
    permissions(): PosixFilePermission[];
    size(): number;
}