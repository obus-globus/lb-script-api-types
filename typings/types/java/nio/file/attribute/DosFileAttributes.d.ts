import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DosFileAttributes extends BasicFileAttributes, Object{
    creationTime(): FileTime;
    fileKey(): Object;
    isArchive(): boolean;
    isDirectory(): boolean;
    isHidden(): boolean;
    isOther(): boolean;
    isReadOnly(): boolean;
    isRegularFile(): boolean;
    isSymbolicLink(): boolean;
    isSystem(): boolean;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    size(): number;
}