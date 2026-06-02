import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CompressionAlgorithm extends Identifiable, Object{
    compress(arg0: OutputStream): OutputStream;
    decompress(arg0: InputStream): InputStream;
}