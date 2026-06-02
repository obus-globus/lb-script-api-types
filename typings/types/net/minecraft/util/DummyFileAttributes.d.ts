import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileTime } from '../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DummyFileAttributes extends Object implements BasicFileAttributes {
    static DIRECTORY: BasicFileAttributes;
    static FILE: BasicFileAttributes;
    constructor()
    creationTime(): FileTime;
    fileKey(): Object;
    isOther(): boolean;
    isSymbolicLink(): boolean;
    lastAccessTime(): FileTime;
    lastModifiedTime(): FileTime;
    size(): number;
}