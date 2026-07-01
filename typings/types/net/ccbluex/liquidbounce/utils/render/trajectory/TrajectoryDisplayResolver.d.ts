import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { TrajectoryType } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TrajectoryDisplayResolver extends Object {
    static INSTANCE: TrajectoryDisplayResolver;
    static resolveEntityIcon(entity: Entity, activeArrows: boolean, activeOthers: boolean): ItemStack;
    static resolveTrajectoryColor(trajectoryType: TrajectoryType, colorSource: DataComponentGetter, entity: Entity): Color4b;
    // private POTION_ARROW_COLOR_NONE: number;
    // private resolveArrowColor(colorSource: DataComponentGetter, entity: Entity | null): Color4b;
    resolveEntityIcon(entity: Entity, activeArrows: boolean, activeOthers: boolean): ItemStack;
    // private resolvePotionColor(colorSource: DataComponentGetter): Color4b;
    resolveTrajectoryColor(trajectoryType: TrajectoryType, colorSource: DataComponentGetter, entity: Entity | null): Color4b;
}