import type { JsonDeserializer } from '../../../../../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { ConditionNode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ConditionNode.d.ts'
import type { ItemConditionNode$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ItemConditionNode$Companion.d.ts'
export class ItemConditionNode extends Object implements ConditionNode {
    static Companion: ItemConditionNode$Companion;
    static Deserializer: JsonDeserializer<ItemConditionNode>;
    constructor(id: string, min: number, max: number)
    readonly id: string;
    readonly max: number;
    readonly min: number;
    component1(): string;
    component2(): number;
    component3(): number;
    copy(id: string, min: number, max: number): ItemConditionNode;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}