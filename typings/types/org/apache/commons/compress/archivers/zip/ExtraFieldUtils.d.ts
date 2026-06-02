import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtraFieldParsingBehavior } from '../../../../../../org/apache/commons/compress/archivers/zip/ExtraFieldParsingBehavior.d.ts'
import type { ExtraFieldUtils$UnparseableExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ExtraFieldUtils$UnparseableExtraField.d.ts'
import type { ZipExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class ExtraFieldUtils extends Object {
    static createExtraField(paramarg0: ZipShort): ZipExtraField;
    static createExtraFieldNoDefault(paramarg0: ZipShort): ZipExtraField;
    static fillExtraField(paramarg0: ZipExtraField, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: boolean): ZipExtraField;
    static mergeCentralDirectoryData(paramarg0: (Object | null)[]): number[];
    static mergeLocalFileDataData(paramarg0: (Object | null)[]): number[];
    static parse(paramarg0: number[]): (Object | null)[];
    static parse(paramarg0: number[], paramarg1: boolean): (Object | null)[];
    static parse(paramarg0: number[], paramarg1: boolean, paramarg2: ExtraFieldParsingBehavior): (Object | null)[];
    static parse(paramarg0: number[], paramarg1: boolean, paramarg2: ExtraFieldUtils$UnparseableExtraField): (Object | null)[];
    static register(paramarg0: Class<Object>): void;
    constructor()
}