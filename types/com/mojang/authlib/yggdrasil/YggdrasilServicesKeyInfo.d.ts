import type { MinecraftClient } from '../../../../com/mojang/authlib/minecraft/client/MinecraftClient.d.ts'
import type { Property } from '../../../../com/mojang/authlib/properties/Property.d.ts'
import type { ServicesKeyInfo } from '../../../../com/mojang/authlib/yggdrasil/ServicesKeyInfo.d.ts'
import type { ServicesKeySet } from '../../../../com/mojang/authlib/yggdrasil/ServicesKeySet.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { Signature } from '../../../../java/security/Signature.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilServicesKeyInfo extends Object implements ServicesKeyInfo {
    static get(paramarg0: URL, paramarg1: MinecraftClient): ServicesKeySet;
    static parse(paramarg0: number[]): ServicesKeyInfo;
    private constructor(arg0: PublicKey)
    // private publicKey: PublicKey;
    keyBitCount(): number;
    signature(): Signature;
    signatureBitCount(): number;
    validateProperty(arg0: Property): boolean;
}