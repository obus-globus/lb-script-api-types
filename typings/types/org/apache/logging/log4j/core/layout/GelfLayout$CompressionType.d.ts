import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { DeflaterOutputStream } from '../../../../../../java/util/zip/DeflaterOutputStream.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GelfLayout$CompressionType extends Enum<GelfLayout$CompressionType> {
    static GZIP: GelfLayout$CompressionType;
    static OFF: GelfLayout$CompressionType;
    static ZLIB: GelfLayout$CompressionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GelfLayout$CompressionType;
    static values(): GelfLayout$CompressionType[];
    private constructor()
    createDeflaterOutputStream(os: OutputStream): DeflaterOutputStream;
    name(): "GZIP" | "ZLIB" | "OFF";
}