import type { AlgorithmParameterSpec } from '../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NamedParameterSpec extends Object implements AlgorithmParameterSpec {
    static ED25519: NamedParameterSpec;
    static ED448: NamedParameterSpec;
    static ML_DSA_44: NamedParameterSpec;
    static ML_DSA_65: NamedParameterSpec;
    static ML_DSA_87: NamedParameterSpec;
    static ML_KEM_1024: NamedParameterSpec;
    static ML_KEM_512: NamedParameterSpec;
    static ML_KEM_768: NamedParameterSpec;
    static X25519: NamedParameterSpec;
    static X448: NamedParameterSpec;
    constructor(arg0: string)
    readonly name: string;
    getName(): string;
}