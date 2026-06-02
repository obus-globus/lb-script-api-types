import type { ClaimsMutator } from '../../io/jsonwebtoken/ClaimsMutator.d.ts'
import type { JwtBuilder$BuilderClaims } from '../../io/jsonwebtoken/JwtBuilder$BuilderClaims.d.ts'
import type { JwtBuilder$BuilderHeader } from '../../io/jsonwebtoken/JwtBuilder$BuilderHeader.d.ts'
import type { SignatureAlgorithm } from '../../io/jsonwebtoken/SignatureAlgorithm.d.ts'
import type { CompressionAlgorithm } from '../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Encoder } from '../../io/jsonwebtoken/io/Encoder.d.ts'
import type { Serializer } from '../../io/jsonwebtoken/io/Serializer.d.ts'
import type { AeadAlgorithm } from '../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { KeyAlgorithm } from '../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { SecureDigestAlgorithm } from '../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JwtBuilder extends ClaimsMutator<JwtBuilder>, Object{
    addClaims(arg0: { [key: string]: Object | null }): JwtBuilder;
    b64Url(arg0: Encoder<OutputStream, OutputStream>): JwtBuilder;
    base64UrlEncodeWith(arg0: Encoder<number[], string>): JwtBuilder;
    claim(arg0: string, arg1: Object): JwtBuilder;
    claims(): JwtBuilder$BuilderClaims;
    claims(arg0: { [key: string]: Object | null }): JwtBuilder;
    compact(): string;
    compressWith(arg0: CompressionAlgorithm): JwtBuilder;
    content(arg0: InputStream): JwtBuilder;
    content(arg0: InputStream, arg1: string): JwtBuilder;
    content(arg0: number[]): JwtBuilder;
    content(arg0: number[], arg1: string): JwtBuilder;
    content(arg0: string): JwtBuilder;
    content(arg0: string, arg1: string): JwtBuilder;
    encodePayload(arg0: boolean): JwtBuilder;
    encryptWith<K extends Key>(arg0: K, arg1: KeyAlgorithm<K, Object>, arg2: AeadAlgorithm): JwtBuilder;
    encryptWith(arg0: SecretKey, arg1: AeadAlgorithm): JwtBuilder;
    expiration(arg0: Date): JwtBuilder;
    header(): JwtBuilder$BuilderHeader;
    id(arg0: string): JwtBuilder;
    issuedAt(arg0: Date): JwtBuilder;
    issuer(arg0: string): JwtBuilder;
    json(arg0: Serializer<{ [key: string]: Object | null }>): JwtBuilder;
    notBefore(arg0: Date): JwtBuilder;
    provider(arg0: Provider): JwtBuilder;
    random(arg0: SecureRandom): JwtBuilder;
    serializeToJsonWith(arg0: Serializer<{ [key: string]: Object | null }>): JwtBuilder;
    setClaims(arg0: { [key: string]: Object | null }): JwtBuilder;
    setHeader(arg0: { [key: string]: Object | null }): JwtBuilder;
    setHeaderParam(arg0: string, arg1: Object): JwtBuilder;
    setHeaderParams(arg0: { [key: string]: Object | null }): JwtBuilder;
    setPayload(arg0: string): JwtBuilder;
    signWith<K extends Key>(arg0: K, arg1: SecureDigestAlgorithm<K, Object>): JwtBuilder;
    signWith(arg0: SignatureAlgorithm, arg1: Key): JwtBuilder;
    signWith(arg0: SignatureAlgorithm, arg1: number[]): JwtBuilder;
    signWith(arg0: SignatureAlgorithm, arg1: string): JwtBuilder;
    signWith(arg0: Key): JwtBuilder;
    signWith(arg0: Key, arg1: SignatureAlgorithm): JwtBuilder;
    subject(arg0: string): JwtBuilder;
}