import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslCertificateCompressionAlgorithm extends Object{
    algorithmId(): number;
    compress(arg0: SSLEngine, arg1: number[]): number[];
    decompress(arg0: SSLEngine, arg1: number, arg2: number[]): number[];
}