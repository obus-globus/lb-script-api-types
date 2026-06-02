import type { BasicFileAttributeView } from '../../../../java/nio/file/attribute/BasicFileAttributeView.d.ts'
import type { FileOwnerAttributeView } from '../../../../java/nio/file/attribute/FileOwnerAttributeView.d.ts'
import type { GroupPrincipal } from '../../../../java/nio/file/attribute/GroupPrincipal.d.ts'
import type { PosixFileAttributes } from '../../../../java/nio/file/attribute/PosixFileAttributes.d.ts'
import type { PosixFilePermission } from '../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PosixFileAttributeView extends BasicFileAttributeView, FileOwnerAttributeView, Object{
    name(): string;
    readAttributes(): PosixFileAttributes;
    setGroup(arg0: GroupPrincipal): void;
    setPermissions(arg0: PosixFilePermission[]): void;
}