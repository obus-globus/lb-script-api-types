import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DosFileAttributes extends BasicFileAttributes, Object{
    isArchive(): boolean;
    isHidden(): boolean;
    isReadOnly(): boolean;
    isSystem(): boolean;
}