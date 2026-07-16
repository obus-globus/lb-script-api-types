import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OpenSslCertificateCompressionConfig$AlgorithmMode extends Enum<OpenSslCertificateCompressionConfig$AlgorithmMode> {
    static Both: OpenSslCertificateCompressionConfig$AlgorithmMode;
    static Compress: OpenSslCertificateCompressionConfig$AlgorithmMode;
    static Decompress: OpenSslCertificateCompressionConfig$AlgorithmMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OpenSslCertificateCompressionConfig$AlgorithmMode;
    static values(): OpenSslCertificateCompressionConfig$AlgorithmMode[];
    private constructor()
    name(): "Compress" | "Decompress" | "Both";
}