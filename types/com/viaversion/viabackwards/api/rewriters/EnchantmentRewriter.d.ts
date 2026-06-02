import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsItemRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsItemRewriter.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class EnchantmentRewriter extends Object {
    static ENCHANTMENT_LEVEL_TRANSLATION: string;
    static getRomanNumber(paramarg0: number): string;
    constructor(arg0: BackwardsItemRewriter<Object, Object, Object>)
    constructor(arg0: BackwardsItemRewriter<Object, Object, Object>, arg1: boolean)
    // private enchantmentMappings: { [key: string]: string };
    // private itemRewriter: BackwardsItemRewriter<Object, Object, Object>;
    // private jsonFormat: boolean;
    handleToClient(arg0: Item): void;
    handleToServer(arg0: Item): void;
    registerEnchantment(arg0: string, arg1: string): void;
    rewriteEnchantmentsToClient(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
    rewriteEnchantmentsToServer(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
}