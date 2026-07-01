import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrajectoryDescriptor } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryDescriptor.d.ts'
import type { TrajectoryShotDescriptor } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryShotDescriptor.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChargedProjectiles } from '../../../../../../net/minecraft/world/item/component/ChargedProjectiles.d.ts'
export class HeldItemTrajectoryResolver extends Object {
    static INSTANCE: HeldItemTrajectoryResolver;
    static resolveHeldItemPrimaryShot(player: Player, stack: ItemStack, alwaysShowBow: boolean): TrajectoryDescriptor;
    static resolveHeldItemShots(player: Player, stack: ItemStack, alwaysShowBow: boolean, includeMultiShot: boolean): TrajectoryShotDescriptor[];
    // private getShotYawOffsets(shotCount: number): number[];
    // private isCrossbowFirework(chargedProjectiles: ChargedProjectiles | null): boolean;
    resolveHeldItemPrimaryShot(player: Player, stack: ItemStack, alwaysShowBow: boolean): TrajectoryDescriptor | null;
    resolveHeldItemShots(player: Player, stack: ItemStack, alwaysShowBow: boolean, includeMultiShot: boolean): TrajectoryShotDescriptor[] | null;
    // private singleShot(icon: ItemStack, trajectoryDescriptor: TrajectoryDescriptor, colorSource: ItemStack): TrajectoryShotDescriptor[];
}