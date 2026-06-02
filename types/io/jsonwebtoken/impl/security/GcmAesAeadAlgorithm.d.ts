import type { AesAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AesAlgorithm.d.ts'
import type { AeadAlgorithm } from '../../../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { AeadRequest } from '../../../../io/jsonwebtoken/security/AeadRequest.d.ts'
import type { AeadResult } from '../../../../io/jsonwebtoken/security/AeadResult.d.ts'
import type { DecryptAeadRequest } from '../../../../io/jsonwebtoken/security/DecryptAeadRequest.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class GcmAesAeadAlgorithm extends AesAlgorithm implements AeadAlgorithm {
    constructor(arg0: number)
    decrypt(arg0: DecryptAeadRequest, arg1: OutputStream): void;
    encrypt(arg0: AeadRequest, arg1: AeadResult): void;
}