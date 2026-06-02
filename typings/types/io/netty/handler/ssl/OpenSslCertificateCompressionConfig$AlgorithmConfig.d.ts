import type { OpenSslCertificateCompressionAlgorithm } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionAlgorithm.d.ts'
import type { OpenSslCertificateCompressionConfig$AlgorithmMode } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionConfig$AlgorithmMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslCertificateCompressionConfig$AlgorithmConfig extends Object {
    private constructor(arg0: OpenSslCertificateCompressionAlgorithm, arg1: OpenSslCertificateCompressionConfig$AlgorithmMode)
    // private algorithm: OpenSslCertificateCompressionAlgorithm;
    // private mode: OpenSslCertificateCompressionConfig$AlgorithmMode;
    algorithm(): OpenSslCertificateCompressionAlgorithm;
    mode(): OpenSslCertificateCompressionConfig$AlgorithmMode;
}