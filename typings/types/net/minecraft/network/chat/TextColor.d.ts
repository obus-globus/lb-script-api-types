import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TextColorAddition } from '../../../../net/ccbluex/liquidbounce/interfaces/TextColorAddition.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
export class TextColor extends Object implements TextColorAddition {
    static AQUA: TextColor;
    static BLACK: TextColor;
    static BLUE: TextColor;
    static CODEC: Codec<TextColor>;
    static DARK_AQUA: TextColor;
    static DARK_BLUE: TextColor;
    static DARK_GRAY: TextColor;
    static DARK_GREEN: TextColor;
    static DARK_PURPLE: TextColor;
    static DARK_RED: TextColor;
    static GOLD: TextColor;
    static GRAY: TextColor;
    static GREEN: TextColor;
    static LIGHT_PURPLE: TextColor;
    static RED: TextColor;
    static WHITE: TextColor;
    static YELLOW: TextColor;
    static fromLegacyFormat(paramformat: ChatFormatting): TextColor;
    static fromRgb(paramrgb: number): TextColor;
    static parseColor(paramcolor: string): DataResult<TextColor>;
    constructor(value: number, name: string)
    // private bypassesNameProtect: boolean;
    // private name: string;
    readonly value: number;
    equals(o: Object | null): boolean;
    formatValue(): string;
    getValue(): number;
    hashCode(): number;
    liquid_bounce$doesBypassingNameProtect(): boolean;
    liquid_bounce$setBypassingNameProtection(arg0: boolean): void;
    liquid_bounce$withNameProtectionBypass(): TextColor;
    serialize(): string;
    toString(): string;
}