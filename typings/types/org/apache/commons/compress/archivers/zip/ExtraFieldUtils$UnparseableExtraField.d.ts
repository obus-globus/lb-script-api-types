import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UnparseableExtraFieldBehavior } from '../../../../../../org/apache/commons/compress/archivers/zip/UnparseableExtraFieldBehavior.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
export class ExtraFieldUtils$UnparseableExtraField extends Object implements UnparseableExtraFieldBehavior {
    static READ: ExtraFieldUtils$UnparseableExtraField;
    static READ_KEY: number;
    static SKIP: ExtraFieldUtils$UnparseableExtraField;
    static SKIP_KEY: number;
    static THROW: ExtraFieldUtils$UnparseableExtraField;
    static THROW_KEY: number;
    private constructor(arg0: number)
    readonly key: number;
    getKey(): number;
    onUnparseableExtraField(arg0: number[], arg1: number, arg2: number, arg3: boolean, arg4: number): ZipExtraField;
}