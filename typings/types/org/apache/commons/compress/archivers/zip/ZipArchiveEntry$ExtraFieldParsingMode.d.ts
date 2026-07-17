import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ExtraFieldParsingBehavior } from '../../../../../../org/apache/commons/compress/archivers/zip/ExtraFieldParsingBehavior.d.ts'
import type { ExtraFieldUtils$UnparseableExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ExtraFieldUtils$UnparseableExtraField.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class ZipArchiveEntry$ExtraFieldParsingMode extends Enum<ZipArchiveEntry$ExtraFieldParsingMode> implements ExtraFieldParsingBehavior {
    static BEST_EFFORT: ZipArchiveEntry$ExtraFieldParsingMode;
    static DRACONIC: ZipArchiveEntry$ExtraFieldParsingMode;
    static ONLY_PARSEABLE_LENIENT: ZipArchiveEntry$ExtraFieldParsingMode;
    static ONLY_PARSEABLE_STRICT: ZipArchiveEntry$ExtraFieldParsingMode;
    static STRICT_FOR_KNOW_EXTRA_FIELDS: ZipArchiveEntry$ExtraFieldParsingMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ZipArchiveEntry$ExtraFieldParsingMode;
    static values(): ZipArchiveEntry$ExtraFieldParsingMode[];
    private constructor(arg2: ExtraFieldUtils$UnparseableExtraField)
    // private onUnparseableData: ExtraFieldUtils$UnparseableExtraField;
    createExtraField(arg0: ZipShort): ZipExtraField;
    fill(arg0: ZipExtraField, arg1: number[], arg2: number, arg3: number, arg4: boolean): ZipExtraField;
    onUnparseableExtraField(arg0: number[], arg1: number, arg2: number, arg3: boolean, arg4: number): ZipExtraField;
    name(): "BEST_EFFORT" | "STRICT_FOR_KNOW_EXTRA_FIELDS" | "ONLY_PARSEABLE_LENIENT" | "ONLY_PARSEABLE_STRICT" | "DRACONIC";
}