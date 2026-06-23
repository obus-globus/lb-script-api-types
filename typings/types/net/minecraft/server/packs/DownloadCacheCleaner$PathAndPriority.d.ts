import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DownloadCacheCleaner$PathAndPriority extends Record {
    static HIGHEST_PRIORITY_FIRST: (param0: Object) => boolean;
    // private path: Path[];
    // private removalPriority: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    path(): Path[];
    removalPriority(): number;
    toString(): string;
}