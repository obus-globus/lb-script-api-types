import type { AsymmetricKey } from '../../java/security/AsymmetricKey.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Destroyable } from '../../javax/security/auth/Destroyable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PrivateKey extends AsymmetricKey, Destroyable, Object{
    destroy(): void;
    getParams(): AlgorithmParameterSpec;
    isDestroyed(): boolean;
}