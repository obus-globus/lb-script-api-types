import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ByteUtils$ByteSupplier } from '../../../../../org/apache/commons/compress/utils/ByteUtils$ByteSupplier.d.ts'
export class ByteUtils$InputStreamByteSupplier extends Object implements ByteUtils$ByteSupplier {
    constructor(arg0: InputStream)
    // private is: InputStream;
    getAsByte(): number;
}