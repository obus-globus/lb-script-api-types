import type { TokenizedJwt } from '../../../io/jsonwebtoken/impl/TokenizedJwt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface TokenizedJwe extends TokenizedJwt, Object{
    getDigest(): CharSequence;
    getEncryptedKey(): CharSequence;
    getIv(): CharSequence;
    getPayload(): CharSequence;
    getProtected(): CharSequence;
}