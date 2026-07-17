import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ClaimsMutator$AudienceCollection } from '../../../io/jsonwebtoken/ClaimsMutator$AudienceCollection.d.ts'
import type { JwtBuilder } from '../../../io/jsonwebtoken/JwtBuilder.d.ts'
import type { JwtBuilder$BuilderClaims } from '../../../io/jsonwebtoken/JwtBuilder$BuilderClaims.d.ts'
import type { JwtBuilder$BuilderHeader } from '../../../io/jsonwebtoken/JwtBuilder$BuilderHeader.d.ts'
import type { SignatureAlgorithm } from '../../../io/jsonwebtoken/SignatureAlgorithm.d.ts'
import type { Payload } from '../../../io/jsonwebtoken/impl/Payload.d.ts'
import type { Function } from '../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { CompressionAlgorithm } from '../../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Encoder } from '../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { Serializer } from '../../../io/jsonwebtoken/io/Serializer.d.ts'
import type { AeadAlgorithm } from '../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { AeadRequest } from '../../../io/jsonwebtoken/security/AeadRequest.d.ts'
import type { AeadResult } from '../../../io/jsonwebtoken/security/AeadResult.d.ts'
import type { KeyAlgorithm } from '../../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { KeyRequest } from '../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { KeyResult } from '../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { SecureDigestAlgorithm } from '../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { SecureRequest } from '../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { SecureRandom } from '../../../java/security/SecureRandom.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultJwtBuilder extends Object implements JwtBuilder {
    constructor()
    // private claimsBuilder: JavaMap<any, any>;
    // private compressionAlgorithm: CompressionAlgorithm;
    // private enc: AeadAlgorithm;
    // private encodePayload: boolean;
    // private encoder: Encoder<OutputStream, OutputStream>;
    // private headerBuilder: JavaMap<any, any>;
    // private key: Key;
    // private keyAlg: KeyAlgorithm<Key, any>;
    // private keyAlgFunction: Function<KeyRequest<Key>, KeyResult>;
    // private payload: Payload;
    // private provider: JavaMap<any, any>;
    // private secureRandom: SecureRandom;
    // private serializer: Serializer<JavaMap<string, Object | null>>;
    // private sigAlg: SecureDigestAlgorithm<Key, any>;
    // private signFunction: Function<SecureRequest<InputStream, Key>, number[]>;
    addClaims(arg0: JavaMap<string, Object | null>): JwtBuilder;
    // private assertPayloadEncoding(arg0: string): void;
    audience(): ClaimsMutator$AudienceCollection<JwtBuilder>;
    b64Url(arg0: Encoder<OutputStream, OutputStream>): JwtBuilder;
    base64UrlEncodeWith(arg0: Encoder<number[], string>): JwtBuilder;
    claim(arg0: string, arg1: Object): JwtBuilder;
    claims(): JwtBuilder$BuilderClaims;
    claims(arg0: JavaMap<string, Object | null>): JwtBuilder;
    compact(): string;
    compressWith(arg0: CompressionAlgorithm): JwtBuilder;
    content(arg0: InputStream): JwtBuilder;
    content(arg0: InputStream, arg1: string): JwtBuilder;
    content(arg0: number[]): JwtBuilder;
    content(arg0: number[], arg1: string): JwtBuilder;
    content(arg0: string): JwtBuilder;
    content(arg0: string, arg1: string): JwtBuilder;
    // private encode(arg0: OutputStream, arg1: string): OutputStream;
    // private encodeAndWrite(arg0: string, arg1: Payload, arg2: OutputStream): void;
    // private encodeAndWrite(arg0: string, arg1: number[], arg2: OutputStream): void;
    // private encodeAndWrite(arg0: string, arg1: JavaMap<string, Object | null>, arg2: OutputStream): void;
    encodePayload(arg0: boolean): JwtBuilder;
    // private encrypt(arg0: Payload, arg1: Key, arg2: JavaMap<any, any>): string;
    // private encrypt(arg0: AeadRequest, arg1: AeadResult): void;
    encryptWith<K extends Key>(arg0: K, arg1: KeyAlgorithm<K, any>, arg2: AeadAlgorithm): JwtBuilder;
    encryptWith(arg0: SecretKey, arg1: AeadAlgorithm): JwtBuilder;
    expiration(arg0: Date): JwtBuilder;
    header(): JwtBuilder$BuilderHeader;
    id(arg0: string): JwtBuilder;
    issuedAt(arg0: Date): JwtBuilder;
    issuer(arg0: string): JwtBuilder;
    json(arg0: Serializer<JavaMap<string, Object | null>>): JwtBuilder;
    notBefore(arg0: Date): JwtBuilder;
    provider(arg0: JavaMap<any, any>): JwtBuilder;
    random(arg0: SecureRandom): JwtBuilder;
    serializeToJsonWith(arg0: Serializer<JavaMap<string, Object | null>>): JwtBuilder;
    setAudience(arg0: string): JwtBuilder;
    setClaims(arg0: JavaMap<string, Object | null>): JwtBuilder;
    setExpiration(arg0: Date): JwtBuilder;
    setHeader(arg0: JavaMap<string, Object | null>): JwtBuilder;
    setHeaderParam(arg0: string, arg1: Object): JwtBuilder;
    setHeaderParams(arg0: JavaMap<string, Object | null>): JwtBuilder;
    setId(arg0: string): JwtBuilder;
    setIssuedAt(arg0: Date): JwtBuilder;
    setIssuer(arg0: string): JwtBuilder;
    setNotBefore(arg0: Date): JwtBuilder;
    setPayload(arg0: string): JwtBuilder;
    setSubject(arg0: string): JwtBuilder;
    // private sign(arg0: Payload, arg1: Key, arg2: JavaMap<any, any>): string;
    signWith<K extends Key>(arg0: K, arg1: SecureDigestAlgorithm<K, any>): JwtBuilder;
    signWith(arg0: SignatureAlgorithm, arg1: Key): JwtBuilder;
    signWith(arg0: SignatureAlgorithm, arg1: number[]): JwtBuilder;
    signWith(arg0: SignatureAlgorithm, arg1: string): JwtBuilder;
    signWith(arg0: Key): JwtBuilder;
    signWith(arg0: Key, arg1: SignatureAlgorithm): JwtBuilder;
    subject(arg0: string): JwtBuilder;
    // private toInputStream(arg0: string, arg1: Payload): InputStream;
    // private unprotected(arg0: Payload): string;
    // private writeAndClose(arg0: string, arg1: Payload, arg2: OutputStream): void;
    // private writeAndClose(arg0: string, arg1: JavaMap<string, Object | null>, arg2: OutputStream): void;
}