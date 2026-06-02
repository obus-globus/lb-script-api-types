import type { CryptoAlgorithm } from '../../../../io/jsonwebtoken/impl/security/CryptoAlgorithm.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class ConcatKDF extends CryptoAlgorithm {
    constructor(arg0: string)
    // private hashBitLength: number;
    deriveKey(arg0: number[], arg1: number, arg2: number[]): SecretKey;
}