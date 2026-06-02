import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { AeadRequest } from '../../../io/jsonwebtoken/security/AeadRequest.d.ts'
import type { AeadResult } from '../../../io/jsonwebtoken/security/AeadResult.d.ts'
import type { DecryptAeadRequest } from '../../../io/jsonwebtoken/security/DecryptAeadRequest.d.ts'
import type { KeyBuilderSupplier } from '../../../io/jsonwebtoken/security/KeyBuilderSupplier.d.ts'
import type { KeyLengthSupplier } from '../../../io/jsonwebtoken/security/KeyLengthSupplier.d.ts'
import type { SecretKeyBuilder } from '../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AeadAlgorithm extends Identifiable, KeyBuilderSupplier<SecretKey, SecretKeyBuilder>, KeyLengthSupplier, Object{
    decrypt(arg0: DecryptAeadRequest, arg1: OutputStream): void;
    encrypt(arg0: AeadRequest, arg1: AeadResult): void;
}