import type { KeyBuilder } from '../../../io/jsonwebtoken/security/KeyBuilder.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyBuilderSupplier<K extends Key, B extends KeyBuilder<K, B>> extends Object{
    key(): B;
}