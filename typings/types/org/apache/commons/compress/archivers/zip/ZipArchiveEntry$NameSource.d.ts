import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ZipArchiveEntry$NameSource extends Enum<ZipArchiveEntry$NameSource> {
    static NAME: ZipArchiveEntry$NameSource;
    static NAME_WITH_EFS_FLAG: ZipArchiveEntry$NameSource;
    static UNICODE_EXTRA_FIELD: ZipArchiveEntry$NameSource;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ZipArchiveEntry$NameSource;
    static values(): ZipArchiveEntry$NameSource[];
    private constructor()
    name(): "NAME" | "NAME_WITH_EFS_FLAG" | "UNICODE_EXTRA_FIELD";
}