import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EnchantmentInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/EnchantmentInfo.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class EnchantmentDisplayHelper extends Object {
    static INSTANCE: EnchantmentDisplayHelper;
    // private MAX_NAME_LENGTH: number;
    // private enchantmentAbbreviationCache: Map<Holder<Enchantment>, string>;
    // private getAbbreviation(enchantment: Holder<Enchantment>): string;
    // private getCompoundAbbreviation(words: string[]): string;
    getEnchantmentInfo(enchantment: Holder<Enchantment>, level: number): EnchantmentInfo;
    // private getEnchantmentName(enchantment: Holder<Enchantment>): string;
    // private getInitialsAbbreviation(words: string[]): string;
    // private isCurse(enchantment: Holder<Enchantment>): boolean;
    // private processMultiWordName(words: string[]): string;
    // private processName(name: string): string;
}