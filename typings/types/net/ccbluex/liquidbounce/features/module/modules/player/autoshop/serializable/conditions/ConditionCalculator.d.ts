import type { JavaMap } from '../../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../../../kotlin/Pair.d.ts'
import type { AllConditionNode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/AllConditionNode.d.ts'
import type { AnyConditionNode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/AnyConditionNode.d.ts'
import type { ConditionNode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ConditionNode.d.ts'
import type { ItemConditionNode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/serializable/conditions/ItemConditionNode.d.ts'
export class ConditionCalculator extends Object {
    constructor(items: JavaMap<any, any>)
    // private items: JavaMap<any, any>;
    // private results: JavaMap<ConditionNode, boolean>;
    // private stack: Pair<ConditionNode, boolean>[];
    process(currentItem: string, root: ConditionNode | null): boolean;
    // private processAllConditionNode(currentNode: AllConditionNode, isVisited: boolean): void;
    // private processAnyConditionNode(currentNode: AnyConditionNode, isVisited: boolean): void;
    // private processItemConditionNode(currentNode: ItemConditionNode): void;
}