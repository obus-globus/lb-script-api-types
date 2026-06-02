import type { JsonDeserializer } from '../../../../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ItemInfo$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/ItemInfo$Companion.d.ts'
export class ItemInfo extends Object {
    static Companion: ItemInfo$Companion;
    static Deserializer: JsonDeserializer<ItemInfo>;
    constructor(id: string, minAmount: number)
    readonly id: string;
    readonly minAmount: number;
    component1(): string;
    component2(): number;
    copy(id: string, minAmount: number): ItemInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}