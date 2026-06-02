import type { CompressionAlgorithm } from '../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CompressionCodec extends CompressionAlgorithm, Object{
    compress(arg0: number[]): number[];
    decompress(arg0: number[]): number[];
    getAlgorithmName(): string;
}