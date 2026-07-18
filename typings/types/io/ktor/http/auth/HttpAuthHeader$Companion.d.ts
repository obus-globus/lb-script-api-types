import type { DigestAlgorithm } from '../../../../io/ktor/http/auth/DigestAlgorithm.d.ts'
import type { HttpAuthHeader } from '../../../../io/ktor/http/auth/HttpAuthHeader.d.ts'
import type { HttpAuthHeader$Parameterized } from '../../../../io/ktor/http/auth/HttpAuthHeader$Parameterized.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpAuthHeader$Companion extends Object {
    basicAuthChallenge(realm: string, charset: Charset | null): HttpAuthHeader$Parameterized;
    bearerAuthChallenge(scheme: string, realm: string | null): HttpAuthHeader;
    digestAuthChallenge(realm: string, nonce: string, domain: string[], opaque: string | null, stale: boolean | null, algorithm: DigestAlgorithm, charset: Charset | null, userhash: boolean, qop: string[]): HttpAuthHeader$Parameterized;
    digestAuthChallenge(realm: string, nonce: string, domain: string[], opaque: string | null, stale: boolean | null, algorithm: string): HttpAuthHeader$Parameterized;
}