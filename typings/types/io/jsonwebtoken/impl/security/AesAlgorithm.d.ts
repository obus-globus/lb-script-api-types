import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { IvSupplier } from '../../../../io/jsonwebtoken/security/IvSupplier.d.ts'
import type { KeyBuilderSupplier } from '../../../../io/jsonwebtoken/security/KeyBuilderSupplier.d.ts'
import type { KeyLengthSupplier } from '../../../../io/jsonwebtoken/security/KeyLengthSupplier.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { SecretKeyBuilder } from '../../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { AlgorithmParameterSpec } from '../../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Cipher } from '../../../../javax/crypto/Cipher.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AesAlgorithm extends CryptoAlgorithm implements KeyBuilderSupplier<SecretKey, SecretKeyBuilder>, KeyLengthSupplier {
    constructor(arg0: string, arg1: string, arg2: number)
    // private gcm: boolean;
    // private ivBitLength: number;
    readonly keyBitLength: number;
    // private tagBitLength: number;
    assertBytes(arg0: number[], arg1: string, arg2: number): number[];
    assertDecryptionIv(arg0: IvSupplier): number[];
    assertIvLength(arg0: number[]): number[];
    assertKey(arg0: SecretKey): SecretKey;
    assertTag(arg0: number[]): number[];
    ensureInitializationVector(arg0: Request<Object>): number[];
    getIvSpec(arg0: number[]): AlgorithmParameterSpec;
    getKeyBitLength(): number;
    key(): SecretKeyBuilder;
    // private updateAAD(arg0: Cipher, arg1: InputStream): void;
    validateLength(arg0: SecretKey, arg1: number, arg2: boolean): number[];
    // private validateLengthIfPossible(arg0: SecretKey): void;
    withCipher(arg0: Cipher, arg1: InputStream, arg2: InputStream, arg3: OutputStream): number[];
    withCipher(arg0: Cipher, arg1: InputStream, arg2: OutputStream): void;
}