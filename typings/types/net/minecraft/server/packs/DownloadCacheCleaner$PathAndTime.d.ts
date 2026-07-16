import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { FileTime } from '../../../../java/nio/file/attribute/FileTime.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DownloadCacheCleaner$PathAndTime extends Record {
    static NEWEST_FIRST: (param0: Object) => boolean;
    private constructor(path: Path, modifiedTime: FileTime)
    // private modifiedTime: FileTime;
    // private path: Path;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifiedTime(): FileTime;
    path(): Path;
    toString(): string;
}