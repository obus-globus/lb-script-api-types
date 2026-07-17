import type { OpenSslCertificateCompressionAlgorithm } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionAlgorithm.d.ts'
import type { OpenSslCertificateCompressionConfig$AlgorithmConfig } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionConfig$AlgorithmConfig.d.ts'
import type { OpenSslCertificateCompressionConfig$AlgorithmMode } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionConfig$AlgorithmMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslCertificateCompressionConfig$Builder extends Object {
    private constructor()
    // private algorithmList: OpenSslCertificateCompressionConfig$AlgorithmConfig[];
    addAlgorithm(arg0: OpenSslCertificateCompressionAlgorithm, arg1: OpenSslCertificateCompressionConfig$AlgorithmMode): OpenSslCertificateCompressionConfig$Builder;
    build(): OpenSslCertificateCompressionConfig$AlgorithmConfig[];
}