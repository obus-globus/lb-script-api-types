import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsStructuredItemRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsStructuredItemRewriter.d.ts'
import type { StructuredEnchantmentRewriter$DescriptionSupplier } from '../../../../../com/viaversion/viabackwards/api/rewriters/StructuredEnchantmentRewriter$DescriptionSupplier.d.ts'
import type { StructuredDataContainer } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { StructuredDataKey } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Enchantments } from '../../../../../com/viaversion/viaversion/api/minecraft/item/data/Enchantments.d.ts'
import type { IdRewriteFunction } from '../../../../../com/viaversion/viaversion/rewriter/IdRewriteFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class StructuredEnchantmentRewriter extends Object {
    constructor(arg0: BackwardsStructuredItemRewriter<Object, Object, Object>)
    // private itemRewriter: BackwardsStructuredItemRewriter<Object, Object, Object>;
    readonly rewriteIds: boolean;
    // private asTag(arg0: Enchantments): Map$Entry<string, Tag>[][];
    // private customData(arg0: StructuredDataContainer): Map$Entry<string, Tag>[];
    handleToClient(arg0: Item): void;
    handleToServer(arg0: Item): void;
    rewriteEnchantmentsToClient(arg0: StructuredDataContainer, arg1: StructuredDataKey<Enchantments>, arg2: (param0: number) => number, arg3: (param0: number, param1: number) => Tag, arg4: boolean): void;
    rewriteEnchantmentsToServer(arg0: StructuredDataContainer, arg1: Map$Entry<string, Tag>[], arg2: StructuredDataKey<Enchantments>): void;
    setRewriteIds(arg0: boolean): void;
}