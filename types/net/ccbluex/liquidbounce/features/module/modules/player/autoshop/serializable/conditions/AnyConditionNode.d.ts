import type { JsonDeserializer } from '../../../../../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { ConditionNode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ConditionNode.d.ts'
import type { ConditionNode$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ConditionNode$Companion.d.ts'
export class AnyConditionNode extends Object implements ConditionNode {
    static Companion: ConditionNode$Companion;
    static Deserializer: JsonDeserializer<ConditionNode>;
    constructor(any: ConditionNode[])
    readonly any: ConditionNode[];
    component1(): ConditionNode[];
    copy(any: ConditionNode[]): AnyConditionNode;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}