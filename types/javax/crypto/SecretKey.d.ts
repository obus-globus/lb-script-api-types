import type { Key } from '../../java/security/Key.d.ts'
import type { Destroyable } from '../../javax/security/auth/Destroyable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SecretKey extends Key, Destroyable, Object{
    destroy(): void;
    isDestroyed(): boolean;
}