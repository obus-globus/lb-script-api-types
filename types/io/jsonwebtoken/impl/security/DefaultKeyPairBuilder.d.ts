import type { AbstractSecurityBuilder } from '../../../../io/jsonwebtoken/impl/security/AbstractSecurityBuilder.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { AlgorithmParameterSpec } from '../../../../java/security/spec/AlgorithmParameterSpec.d.ts'
export class DefaultKeyPairBuilder extends AbstractSecurityBuilder<KeyPair, KeyPairBuilder> implements KeyPairBuilder {
    constructor(arg0: string)
    constructor(arg0: string, arg1: AlgorithmParameterSpec)
    constructor(arg0: string, arg1: number)
    // private bitLength: number;
    // private jcaName: string;
    // private params: AlgorithmParameterSpec;
    build(): KeyPair;
}