import type { KeySupplier } from '../../../../io/jsonwebtoken/security/KeySupplier.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { ECKey } from '../../../../java/security/interfaces/ECKey.d.ts'
import type { ECParameterSpec } from '../../../../java/security/spec/ECParameterSpec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PrivateECKey extends Object implements KeySupplier<PrivateKey>, PrivateKey, ECKey {
    static serialVersionUID: number;
    constructor(arg0: PrivateKey, arg1: ECParameterSpec)
    readonly params: ECParameterSpec;
    // private privateKey: PrivateKey;
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    getKey(): PrivateKey;
    getParams(): ECParameterSpec;
}