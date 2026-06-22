import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Destroyable } from '../../../javax/security/auth/Destroyable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Password extends SecretKey, Destroyable, Object{
    destroy(): void;
    getAlgorithm(): string;
    getFormat(): string;
    isDestroyed(): boolean;
    toCharArray(): string[];
}