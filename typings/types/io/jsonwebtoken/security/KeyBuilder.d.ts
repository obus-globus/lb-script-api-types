import type { SecurityBuilder } from '../../../io/jsonwebtoken/security/SecurityBuilder.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyBuilder<K extends Key, B extends KeyBuilder<K, B>> extends SecurityBuilder<K, B>, Object{
}