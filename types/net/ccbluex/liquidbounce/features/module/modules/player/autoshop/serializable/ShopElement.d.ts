import type { JsonDeserializer } from '../../../../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ItemInfo } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ItemInfo.d.ts'
import type { ShopElement$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ShopElement$Companion.d.ts'
import type { ConditionNode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ConditionNode.d.ts'
export class ShopElement extends Object {
    static Companion: ShopElement$Companion;
    static Deserializer: JsonDeserializer<ShopElement>;
    constructor(item: ItemInfo, amountPerClick: number, categorySlot: number, itemSlot: number, price: ItemInfo, purchaseConditions: ConditionNode | null)
    readonly amountPerClick: number;
    readonly categorySlot: number;
    readonly item: ItemInfo;
    readonly itemSlot: number;
    readonly price: ItemInfo;
    readonly purchaseConditions: ConditionNode | null;
    component1(): ItemInfo;
    component2(): number;
    component3(): number;
    component4(): number;
    component5(): ItemInfo;
    component6(): ConditionNode | null;
    copy(item: ItemInfo, amountPerClick: number, categorySlot: number, itemSlot: number, price: ItemInfo, purchaseConditions: ConditionNode | null): ShopElement;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}