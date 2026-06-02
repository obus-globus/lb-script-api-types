import type { Property } from '../../../../com/mojang/authlib/properties/Property.d.ts'
import type { Signature } from '../../../../java/security/Signature.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServicesKeyInfo extends Object{
    keyBitCount(): number;
    signature(): Signature;
    signatureBitCount(): number;
    validateProperty(arg0: Property): boolean;
}