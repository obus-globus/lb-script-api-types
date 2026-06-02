import type { AbstractCompressionAlgorithm } from '../../../../io/jsonwebtoken/impl/compression/AbstractCompressionAlgorithm.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class GzipCompressionAlgorithm extends AbstractCompressionAlgorithm {
    constructor()
    doCompress(arg0: OutputStream): OutputStream;
    doDecompress(arg0: InputStream): InputStream;
}