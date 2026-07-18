import type { DigestAlgorithm } from '../../../../io/ktor/http/auth/DigestAlgorithm.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DigestAlgorithm$Companion extends Object {
    readonly DEFAULT_ALGORITHMS: DigestAlgorithm[];
    readonly MD5: DigestAlgorithm;
    readonly MD5_SESS: DigestAlgorithm;
    readonly SHA_256: DigestAlgorithm;
    readonly SHA_256_SESS: DigestAlgorithm;
    readonly SHA_512_256: DigestAlgorithm;
    readonly SHA_512_256_SESS: DigestAlgorithm;
    from(name: string): DigestAlgorithm | null;
}