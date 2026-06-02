import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleItemTags$ClusteredEntitiesRenderState extends Object {
    constructor(entities: Entity[], stacks: ItemStack[], scale: number)
    entities: Entity[];
    scale: number;
    stacks: ItemStack[];
    interpolateCurrentCenterPosition(tickDelta: number): Vec3;
}