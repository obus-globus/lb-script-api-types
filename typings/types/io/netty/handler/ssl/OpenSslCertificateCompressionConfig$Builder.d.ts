import type { OpenSslCertificateCompressionConfig$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OpenSslCertificateCompressionAlgorithm } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionAlgorithm.d.ts'
import type { OpenSslCertificateCompressionConfig$AlgorithmConfig } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionConfig$AlgorithmConfig.d.ts'
import type { OpenSslCertificateCompressionConfig$AlgorithmMode } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionConfig$AlgorithmMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslCertificateCompressionConfig$Builder extends Object {
    private constructor()
    constructor(arg0: OpenSslCertificateCompressionConfig$1)
    // private algorithmList: OpenSslCertificateCompressionConfig$AlgorithmConfig[];
    addAlgorithm(arg0: OpenSslCertificateCompressionAlgorithm, arg1: OpenSslCertificateCompressionConfig$AlgorithmMode): OpenSslCertificateCompressionConfig$Builder;
    build(): OpenSslCertificateCompressionConfig$AlgorithmConfig[];
}