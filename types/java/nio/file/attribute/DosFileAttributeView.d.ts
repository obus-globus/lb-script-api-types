import type { BasicFileAttributeView } from '../../../../java/nio/file/attribute/BasicFileAttributeView.d.ts'
import type { DosFileAttributes } from '../../../../java/nio/file/attribute/DosFileAttributes.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DosFileAttributeView extends BasicFileAttributeView, Object{
    name(): string;
    readAttributes(): DosFileAttributes;
    setArchive(arg0: boolean): void;
    setHidden(arg0: boolean): void;
    setReadOnly(arg0: boolean): void;
    setSystem(arg0: boolean): void;
}