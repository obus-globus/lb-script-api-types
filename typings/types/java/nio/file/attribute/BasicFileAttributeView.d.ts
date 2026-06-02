import type { BasicFileAttributes } from '../../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { FileAttributeView } from '../../../../java/nio/file/attribute/FileAttributeView.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BasicFileAttributeView extends FileAttributeView, Object{
    name(): string;
    readAttributes(): BasicFileAttributes;
    setTimes(arg0: FileTime, arg1: FileTime, arg2: FileTime): void;
}