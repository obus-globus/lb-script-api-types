import type { KeyStore$Entry$Attribute } from '../../java/security/KeyStore$Entry$Attribute.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface KeyStore$Entry extends Object{
    getAttributes(): KeyStore$Entry$Attribute[];
}