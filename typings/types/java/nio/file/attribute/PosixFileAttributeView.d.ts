import type { BasicFileAttributeView } from '../../../../java/nio/file/attribute/BasicFileAttributeView.d.ts'
import type { FileOwnerAttributeView } from '../../../../java/nio/file/attribute/FileOwnerAttributeView.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { GroupPrincipal } from '../../../../java/nio/file/attribute/GroupPrincipal.d.ts'
import type { PosixFileAttributes } from '../../../../java/nio/file/attribute/PosixFileAttributes.d.ts'
import type { PosixFilePermission } from '../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PosixFileAttributeView extends BasicFileAttributeView, FileOwnerAttributeView, Object{
    getOwner(): UserPrincipal;
    name(): string;
    readAttributes(): PosixFileAttributes;
    setGroup(arg0: GroupPrincipal): void;
    setOwner(arg0: UserPrincipal): void;
    setPermissions(arg0: PosixFilePermission[]): void;
    setTimes(arg0: FileTime, arg1: FileTime, arg2: FileTime): void;
}