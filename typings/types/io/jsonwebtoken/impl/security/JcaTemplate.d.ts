import type { CheckedFunction } from '../../../../io/jsonwebtoken/impl/lang/CheckedFunction.d.ts'
import type { CheckedSupplier } from '../../../../io/jsonwebtoken/impl/lang/CheckedSupplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AlgorithmParameters } from '../../../../java/security/AlgorithmParameters.d.ts'
import type { InvalidKeyException } from '../../../../java/security/InvalidKeyException.d.ts'
import type { KeyFactory } from '../../../../java/security/KeyFactory.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { KeyPairGenerator } from '../../../../java/security/KeyPairGenerator.d.ts'
import type { MessageDigest } from '../../../../java/security/MessageDigest.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { SecureRandom } from '../../../../java/security/SecureRandom.d.ts'
import type { Signature } from '../../../../java/security/Signature.d.ts'
import type { CertificateFactory } from '../../../../java/security/cert/CertificateFactory.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { AlgorithmParameterSpec } from '../../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { InvalidKeySpecException } from '../../../../java/security/spec/InvalidKeySpecException.d.ts'
import type { KeySpec } from '../../../../java/security/spec/KeySpec.d.ts'
import type { Cipher } from '../../../../javax/crypto/Cipher.d.ts'
import type { KeyAgreement } from '../../../../javax/crypto/KeyAgreement.d.ts'
import type { KeyGenerator } from '../../../../javax/crypto/KeyGenerator.d.ts'
import type { Mac } from '../../../../javax/crypto/Mac.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { SecretKeyFactory } from '../../../../javax/crypto/SecretKeyFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JcaTemplate extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Provider)
    constructor(arg0: string, arg1: Provider, arg2: SecureRandom)
    // private jcaName: string;
    // private provider: Provider;
    // private secureRandom: SecureRandom;
    // private execute<T extends Object | number | string | boolean>(arg0: Class<Object>, arg1: CheckedSupplier<T>): T;
    // private execute<R extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: Class<T>, arg1: CheckedFunction<T, R>): R;
    // private execute<R extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: Class<T>, arg1: CheckedFunction<T, R>, arg2: Provider): R;
    fallback<R extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: Class<T>, arg1: CheckedFunction<T, R>): R;
    findBouncyCastle(): Provider;
    generateKeyPair(): KeyPair;
    generateKeyPair(arg0: AlgorithmParameterSpec): KeyPair;
    generateKeyPair(arg0: number): KeyPair;
    generatePrivate(arg0: KeyFactory, arg1: KeySpec): PrivateKey;
    generatePrivate(arg0: KeySpec): PrivateKey;
    generatePublic(arg0: KeySpec): PublicKey;
    generateSecretKey(arg0: number): SecretKey;
    generateX509Certificate(arg0: number[]): X509Certificate;
    // private getJdk8213363BugExpectedSize(arg0: InvalidKeyException): number;
    isJdk11(): boolean;
    // private isJdk8213363Bug(arg0: InvalidKeySpecException): boolean;
    // private respecIfNecessary(arg0: InvalidKeySpecException, arg1: KeySpec): KeySpec;
    withAlgorithmParameters<R extends Object | number | string | boolean>(arg0: CheckedFunction<AlgorithmParameters, R>): R;
    withCertificateFactory<R extends Object | number | string | boolean>(arg0: CheckedFunction<CertificateFactory, R>): R;
    withCipher<R extends Object | number | string | boolean>(arg0: CheckedFunction<Cipher, R>): R;
    withKeyAgreement<R extends Object | number | string | boolean>(arg0: CheckedFunction<KeyAgreement, R>): R;
    withKeyFactory<R extends Object | number | string | boolean>(arg0: CheckedFunction<KeyFactory, R>): R;
    withKeyGenerator<R extends Object | number | string | boolean>(arg0: CheckedFunction<KeyGenerator, R>): R;
    withKeyPairGenerator<R extends Object | number | string | boolean>(arg0: CheckedFunction<KeyPairGenerator, R>): R;
    withMac<R extends Object | number | string | boolean>(arg0: CheckedFunction<Mac, R>): R;
    withMessageDigest<R extends Object | number | string | boolean>(arg0: CheckedFunction<MessageDigest, R>): R;
    withSecretKeyFactory<R extends Object | number | string | boolean>(arg0: CheckedFunction<SecretKeyFactory, R>): R;
    withSignature<R extends Object | number | string | boolean>(arg0: CheckedFunction<Signature, R>): R;
}