import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TextColor } from '../../../../net/minecraft/network/chat/TextColor.d.ts'
export interface TextColorAddition extends Object{
    liquid_bounce$doesBypassingNameProtect(): boolean;
    liquid_bounce$setBypassingNameProtection(arg0: boolean): void;
    liquid_bounce$withNameProtectionBypass(): TextColor;
}