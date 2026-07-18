import type { DigestAlgorithm } from '../../../../io/ktor/http/auth/DigestAlgorithm.d.ts'
import type { MessageDigest } from '../../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DigestAlgorithm_jvmKt extends Object {
    static toDigester(self: DigestAlgorithm): MessageDigest;
}