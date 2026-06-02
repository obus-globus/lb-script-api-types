import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftTextProcessor$RecyclingProcessedText } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/MinecraftTextProcessor$RecyclingProcessedText.d.ts'
export class NametagEnchantmentRenderer$EnchantCell extends Record {
    constructor(processedText: MinecraftTextProcessor$RecyclingProcessedText, textWidth: number, isCurse: boolean)
    // private isCurse: boolean;
    /*not mapped: */ isCurse(): boolean;
    // private processedText: MinecraftTextProcessor$RecyclingProcessedText;
    /*not mapped: */ processedText(): MinecraftTextProcessor$RecyclingProcessedText;
    // private textWidth: number;
    /*not mapped: */ textWidth(): number;
    component1(): MinecraftTextProcessor$RecyclingProcessedText;
    component2(): number;
    component3(): boolean;
    copy(processedText: MinecraftTextProcessor$RecyclingProcessedText, textWidth: number, isCurse: boolean): NametagEnchantmentRenderer$EnchantCell;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}