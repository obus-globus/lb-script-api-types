import type { CompressionCodec } from '../../io/jsonwebtoken/CompressionCodec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CompressionCodecResolver extends Object{
    resolveCompressionCodec(arg0: Header): CompressionCodec;
}