import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OpenSslCertificateCompressionConfig$AlgorithmMode extends Enum<OpenSslCertificateCompressionConfig$AlgorithmMode> {
    static Both: OpenSslCertificateCompressionConfig$AlgorithmMode;
    static Compress: OpenSslCertificateCompressionConfig$AlgorithmMode;
    static Decompress: OpenSslCertificateCompressionConfig$AlgorithmMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OpenSslCertificateCompressionConfig$AlgorithmMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "Compress" | "Decompress" | "Both";
}