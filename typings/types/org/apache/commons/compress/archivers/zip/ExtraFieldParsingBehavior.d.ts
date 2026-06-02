import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UnparseableExtraFieldBehavior } from '../../../../../../org/apache/commons/compress/archivers/zip/UnparseableExtraFieldBehavior.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export interface ExtraFieldParsingBehavior extends Object, UnparseableExtraFieldBehavior{
    createExtraField(arg0: ZipShort): ZipExtraField;
    fill(arg0: ZipExtraField, arg1: number[], arg2: number, arg3: number, arg4: boolean): ZipExtraField;
}