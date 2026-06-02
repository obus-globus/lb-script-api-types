import type { AesAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AesAlgorithm.d.ts'
import type { DefaultMacAlgorithm } from '../../../../io/jsonwebtoken/impl/security/DefaultMacAlgorithm.d.ts'
import type { AeadAlgorithm } from '../../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { AeadRequest } from '../../../../io/jsonwebtoken/security/AeadRequest.d.ts'
import type { AeadResult } from '../../../../io/jsonwebtoken/security/AeadResult.d.ts'
import type { DecryptAeadRequest } from '../../../../io/jsonwebtoken/security/DecryptAeadRequest.d.ts'
import type { SecretKeyBuilder } from '../../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { SecureRequest } from '../../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HmacAesAeadAlgorithm extends AesAlgorithm implements AeadAlgorithm {
    constructor(arg0: number)
    constructor(arg0: string, arg1: DefaultMacAlgorithm)
    // private SIGALG: DefaultMacAlgorithm;
    assertKeyBytes(arg0: SecureRequest<Object, SecretKey>): number[];
    decrypt(arg0: DecryptAeadRequest, arg1: OutputStream): void;
    encrypt(arg0: AeadRequest, arg1: AeadResult): void;
    getKeyBitLength(): number;
    key(): SecretKeyBuilder;
    // private sign(arg0: number[], arg1: number[], arg2: InputStream, arg3: number[]): number[];
}