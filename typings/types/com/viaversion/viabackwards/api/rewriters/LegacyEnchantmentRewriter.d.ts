import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class LegacyEnchantmentRewriter extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private dummyEnchantment: boolean;
    // private enchantmentMappings: { [key: number]: string };
    readonly hideLevelForEnchants: number[];
    // private nbtTagName: string;
    handleToClient(arg0: Item): void;
    handleToServer(arg0: Item): void;
    registerEnchantment(arg0: number, arg1: string): void;
    rewriteEnchantmentsToClient(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
    rewriteEnchantmentsToServer(arg0: Map$Entry<string, Tag>[], arg1: boolean): void;
    setHideLevelForEnchants(arg0: number[]): void;
}