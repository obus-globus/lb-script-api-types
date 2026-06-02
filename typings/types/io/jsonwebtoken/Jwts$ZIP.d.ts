import type { CompressionAlgorithm } from '../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Jwts$ZIP extends Object {
    static DEF: CompressionAlgorithm;
    static GZIP: CompressionAlgorithm;
    static get(): { [key: string]: CompressionAlgorithm };
    private constructor()
}