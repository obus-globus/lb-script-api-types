import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ClaimsBuilder } from '../../../io/jsonwebtoken/ClaimsBuilder.d.ts'
import type { Clock } from '../../../io/jsonwebtoken/Clock.d.ts'
import type { CompressionCodecResolver } from '../../../io/jsonwebtoken/CompressionCodecResolver.d.ts'
import type { Jwe } from '../../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtHandler } from '../../../io/jsonwebtoken/JwtHandler.d.ts'
import type { JwtParser } from '../../../io/jsonwebtoken/JwtParser.d.ts'
import type { Locator } from '../../../io/jsonwebtoken/Locator.d.ts'
import type { SigningKeyResolver } from '../../../io/jsonwebtoken/SigningKeyResolver.d.ts'
import type { Payload } from '../../../io/jsonwebtoken/impl/Payload.d.ts'
import type { TokenizedJwt } from '../../../io/jsonwebtoken/impl/TokenizedJwt.d.ts'
import type { AbstractParser } from '../../../io/jsonwebtoken/impl/io/AbstractParser.d.ts'
import type { Function } from '../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { CompressionAlgorithm } from '../../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Decoder } from '../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { Deserializer } from '../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { AeadAlgorithm } from '../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { KeyAlgorithm } from '../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { SecureDigestAlgorithm } from '../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DefaultJwtParser extends AbstractParser<Jwt<any, Object>> implements JwtParser {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_VALUE_MESSAGE_TEMPLATE: string;
    static MISSING_JWE_ALG_MSG: string;
    static MISSING_JWE_DIGEST_MSG_FMT: string;
    static MISSING_JWS_ALG_MSG: string;
    static MISSING_JWS_DIGEST_MSG_FMT: string;
    constructor(arg0: JavaMap<any, any>, arg1: SigningKeyResolver, arg2: boolean, arg3: boolean, arg4: Locator<Key>, arg5: Clock, arg6: string[], arg7: number, arg8: JavaMap<any, any>, arg9: Decoder<InputStream, InputStream>, arg10: Deserializer<JavaMap<string, Object | null>>, arg11: CompressionCodecResolver, arg12: JavaMap<string, CompressionAlgorithm>, arg13: JavaMap<string, SecureDigestAlgorithm<any, any>>, arg14: JavaMap<string, KeyAlgorithm<any, any>>, arg15: JavaMap<string, AeadAlgorithm>)
    // private allowedClockSkewMillis: number;
    // private clock: Clock;
    // private critical: string[];
    // private decoder: Decoder<InputStream, InputStream>;
    // private deserializer: Deserializer<JavaMap<string, Object | null>>;
    // private encAlgs: Function<JavaMap<any, any>, AeadAlgorithm>;
    // private expectedClaims: ClaimsBuilder;
    // private keyAlgs: Function<JavaMap<any, any>, KeyAlgorithm<any, any>>;
    // private keyLocator: Locator<Key>;
    // private provider: JavaMap<any, any>;
    // private sigAlgs: Function<JavaMap<any, any>, SecureDigestAlgorithm<any, any>>;
    // private signingKeyResolver: SigningKeyResolver;
    // private unsecured: boolean;
    // private unsecuredDecompression: boolean;
    // private zipAlgs: Function<JavaMap<any, any>, CompressionAlgorithm>;
    decode(arg0: CharSequence, arg1: string): number[];
    deserialize(arg0: InputStream, arg1: string): JavaMap<string, Object | null>;
    isSigned(arg0: CharSequence): boolean;
    parse(arg0: InputStream): Jwt<any, Object>;
    parse(arg0: Reader): Jwt<any, Object>;
    // private parse(arg0: Reader, arg1: Payload): Jwt<any, Object>;
    parse(arg0: CharSequence): Jwt<any, Object>;
    parse<T extends unknown>(arg0: CharSequence, arg1: JwtHandler<T>): T;
    // private parse(arg0: CharSequence, arg1: Payload): Jwt<any, Object>;
    parse(arg0: CharSequence, arg1: number, arg2: number): Jwt<any, Object>;
    parseClaimsJws(arg0: CharSequence): Jws<JavaMap<any, any>>;
    parseClaimsJwt(arg0: CharSequence): Jwt<JavaMap<any, any>, JavaMap<any, any>>;
    parseContentJws(arg0: CharSequence): Jws<number[]>;
    parseContentJwt(arg0: CharSequence): Jwt<JavaMap<any, any>, number[]>;
    parseEncryptedClaims(arg0: CharSequence): Jwe<JavaMap<any, any>>;
    parseEncryptedContent(arg0: CharSequence): Jwe<number[]>;
    parseSignedClaims(arg0: CharSequence): Jws<JavaMap<any, any>>;
    // private parseSignedClaims(arg0: CharSequence, arg1: Payload): Jws<JavaMap<any, any>>;
    parseSignedClaims(arg0: CharSequence, arg1: InputStream): Jws<JavaMap<any, any>>;
    parseSignedClaims(arg0: CharSequence, arg1: number[]): Jws<JavaMap<any, any>>;
    parseSignedContent(arg0: CharSequence): Jws<number[]>;
    // private parseSignedContent(arg0: CharSequence, arg1: Payload): Jws<number[]>;
    parseSignedContent(arg0: CharSequence, arg1: InputStream): Jws<number[]>;
    parseSignedContent(arg0: CharSequence, arg1: number[]): Jws<number[]>;
    parseUnsecuredClaims(arg0: CharSequence): Jwt<JavaMap<any, any>, JavaMap<any, any>>;
    parseUnsecuredContent(arg0: CharSequence): Jwt<JavaMap<any, any>, number[]>;
    // private validateExpectedClaims(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>): void;
    // private verifySignature(arg0: TokenizedJwt, arg1: JavaMap<any, any>, arg2: string, arg3: SigningKeyResolver, arg4: JavaMap<any, any>, arg5: Payload): number[];
}