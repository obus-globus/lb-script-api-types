import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BasicFileAttributes extends Object{
    creationTime(): FileTime;
    fileKey(): Object;
    isDirectory(): boolean;
    isOther(): boolean;
    isRegularFile(): boolean;
    isSymbolicLink(): boolean;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    size(): number;
}