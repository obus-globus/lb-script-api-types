import type { ClaimsBuilder } from '../../../io/jsonwebtoken/ClaimsBuilder.d.ts'
import type { Clock } from '../../../io/jsonwebtoken/Clock.d.ts'
import type { CompressionCodecResolver } from '../../../io/jsonwebtoken/CompressionCodecResolver.d.ts'
import type { JwtParser } from '../../../io/jsonwebtoken/JwtParser.d.ts'
import type { JwtParserBuilder } from '../../../io/jsonwebtoken/JwtParserBuilder.d.ts'
import type { Locator } from '../../../io/jsonwebtoken/Locator.d.ts'
import type { SigningKeyResolver } from '../../../io/jsonwebtoken/SigningKeyResolver.d.ts'
import type { CompressionAlgorithm } from '../../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Decoder } from '../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { Deserializer } from '../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { NestedCollection } from '../../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { AeadAlgorithm } from '../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { KeyAlgorithm } from '../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { SecureDigestAlgorithm } from '../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DefaultJwtParserBuilder extends Object implements JwtParserBuilder {
    constructor()
    // private allowedClockSkewMillis: number;
    // private clock: Clock;
    // private compressionCodecResolver: CompressionCodecResolver;
    // private critical: string[];
    // private decoder: Decoder<InputStream, InputStream>;
    // private decryptionKey: Key;
    // private deserializer: Deserializer<{ [key: string]: Object | null }>;
    // private encAlgs: { [key: string]: AeadAlgorithm };
    // private expectedClaims: ClaimsBuilder;
    // private keyAlgs: { [key: string]: KeyAlgorithm<any, any> };
    // private keyLocator: Locator<Key>;
    // private provider: { [key: string]: any };
    // private sigAlgs: { [key: string]: SecureDigestAlgorithm<any, any> };
    // private signatureVerificationKey: Key;
    // private signingKeyResolver: SigningKeyResolver;
    // private unsecured: boolean;
    // private unsecuredDecompression: boolean;
    // private zipAlgs: { [key: string]: CompressionAlgorithm };
    b64Url(arg0: Decoder<InputStream, InputStream>): JwtParserBuilder;
    base64UrlDecodeWith(arg0: Decoder<CharSequence, number[]>): JwtParserBuilder;
    build(): JwtParser;
    clock(arg0: Clock): JwtParserBuilder;
    clockSkewSeconds(arg0: number): JwtParserBuilder;
    critical(): NestedCollection<string, JwtParserBuilder>;
    // private decryptWith(arg0: Key): JwtParserBuilder;
    decryptWith(arg0: PrivateKey): JwtParserBuilder;
    decryptWith(arg0: SecretKey): JwtParserBuilder;
    deserializeJsonWith(arg0: Deserializer<{ [key: string]: Object | null }>): JwtParserBuilder;
    enc(): NestedCollection<AeadAlgorithm, JwtParserBuilder>;
    json(arg0: Deserializer<{ [key: string]: Object | null }>): JwtParserBuilder;
    key(): NestedCollection<KeyAlgorithm<any, any>, JwtParserBuilder>;
    keyLocator(arg0: Locator<Key>): JwtParserBuilder;
    provider(arg0: { [key: string]: any }): JwtParserBuilder;
    require(arg0: string, arg1: Object): JwtParserBuilder;
    requireAudience(arg0: string): JwtParserBuilder;
    requireExpiration(arg0: Date): JwtParserBuilder;
    requireId(arg0: string): JwtParserBuilder;
    requireIssuedAt(arg0: Date): JwtParserBuilder;
    requireIssuer(arg0: string): JwtParserBuilder;
    requireNotBefore(arg0: Date): JwtParserBuilder;
    requireSubject(arg0: string): JwtParserBuilder;
    setAllowedClockSkewSeconds(arg0: number): JwtParserBuilder;
    setClock(arg0: Clock): JwtParserBuilder;
    setCompressionCodecResolver(arg0: CompressionCodecResolver): JwtParserBuilder;
    setSigningKey(arg0: Key): JwtParserBuilder;
    setSigningKey(arg0: number[]): JwtParserBuilder;
    setSigningKey(arg0: string): JwtParserBuilder;
    setSigningKeyResolver(arg0: SigningKeyResolver): JwtParserBuilder;
    sig(): NestedCollection<SecureDigestAlgorithm<any, any>, JwtParserBuilder>;
    unsecured(): JwtParserBuilder;
    unsecuredDecompression(): JwtParserBuilder;
    // private verifyWith(arg0: Key): JwtParserBuilder;
    verifyWith(arg0: PublicKey): JwtParserBuilder;
    verifyWith(arg0: SecretKey): JwtParserBuilder;
    zip(): NestedCollection<CompressionAlgorithm, JwtParserBuilder>;
}