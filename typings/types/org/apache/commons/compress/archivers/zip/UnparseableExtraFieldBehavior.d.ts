import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
export interface UnparseableExtraFieldBehavior extends Object{
    onUnparseableExtraField(arg0: number[], arg1: number, arg2: number, arg3: boolean, arg4: number): ZipExtraField;
}