import type { CompressionCodec } from '../../io/jsonwebtoken/CompressionCodec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CompressionCodecs extends Object {
    static DEFLATE: CompressionCodec;
    static GZIP: CompressionCodec;
    private constructor()
}