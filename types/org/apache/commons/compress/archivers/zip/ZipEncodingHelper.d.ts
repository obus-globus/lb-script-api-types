import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ZipEncoding } from '../../../../../../org/apache/commons/compress/archivers/zip/ZipEncoding.d.ts'
export abstract class ZipEncodingHelper extends Object {
    static getZipEncoding(paramarg0: string): ZipEncoding;
    static getZipEncoding(paramarg0: Charset): ZipEncoding;
    constructor()
}