import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TrajectoryDisplayResolver extends Object {
    static INSTANCE: TrajectoryDisplayResolver;
    static resolveEntityColor(entity: Entity): Color4b;
    static resolveEntityIcon(entity: Entity, activeArrows: boolean, activeOthers: boolean): ItemStack;
    resolveEntityColor(entity: Entity): Color4b;
    resolveEntityIcon(entity: Entity, activeArrows: boolean, activeOthers: boolean): ItemStack;
}