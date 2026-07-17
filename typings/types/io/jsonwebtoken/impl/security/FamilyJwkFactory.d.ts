import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { JwkFactory } from '../../../../io/jsonwebtoken/impl/security/JwkFactory.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FamilyJwkFactory<K extends Key, J extends JavaMap<any, any>> extends Identifiable, JwkFactory<K, J>, Object{
    getId(): string;
    supports(arg0: JavaMap<any, any>): boolean;
    supports(arg0: Key): boolean;
}