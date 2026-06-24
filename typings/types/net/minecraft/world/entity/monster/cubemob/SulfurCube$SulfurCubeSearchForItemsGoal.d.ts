import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { ItemEntity } from '../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { SulfurCube } from '../../../../../../net/minecraft/world/entity/monster/cubemob/SulfurCube.d.ts'
export class SulfurCube$SulfurCubeSearchForItemsGoal extends Goal {
    constructor(null_: SulfurCube, sulfurCube: SulfurCube)
    // private sulfurCube: SulfurCube;
    // private targetItem: ItemEntity;
    canUse(): boolean;
    tick(): void;
}