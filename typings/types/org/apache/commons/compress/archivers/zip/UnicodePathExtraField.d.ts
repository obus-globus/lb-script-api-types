import type { AbstractUnicodeExtraField } from '../../../../../../org/apache/commons/compress/archivers/zip/AbstractUnicodeExtraField.d.ts'
import type { ZipShort } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipShort.d.ts'
export class UnicodePathExtraField extends AbstractUnicodeExtraField {
    static EXTRAFIELD_HEADER_SIZE: number;
    static UPATH_ID: ZipShort;
    constructor()
    constructor(arg0: string, arg1: number[])
    constructor(arg0: string, arg1: number[], arg2: number, arg3: number)
    getHeaderId(): ZipShort;
}