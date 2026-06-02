import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { GroupPrincipal } from '../../../../java/nio/file/attribute/GroupPrincipal.d.ts'
import type { PosixFilePermission } from '../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { UserPrincipal } from '../../../../java/nio/file/attribute/UserPrincipal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PosixFileAttributes extends BasicFileAttributes, Object{
    group(): GroupPrincipal;
    owner(): UserPrincipal;
    permissions(): PosixFilePermission[];
}