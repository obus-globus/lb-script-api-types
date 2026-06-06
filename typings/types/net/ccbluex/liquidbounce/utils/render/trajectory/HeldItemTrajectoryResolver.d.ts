import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrajectoryDescriptor } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryDescriptor.d.ts'
import type { TrajectoryShotDescriptor } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryShotDescriptor.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ChargedProjectiles } from '../../../../../../net/minecraft/world/item/component/ChargedProjectiles.d.ts'
export class HeldItemTrajectoryResolver extends Object {
    static INSTANCE: HeldItemTrajectoryResolver;
    static resolveHeldItemPrimaryShot(player: Player, stack: ItemStack, alwaysShowBow: boolean): TrajectoryDescriptor;
    /**
     * Resolves one or more rendered trajectory shots for held items.
     *
     * Crossbow behavior mirrors vanilla projectile loading/spread semantics:
     *
     * @see net.minecraft.core.component.DataComponents.CHARGED_PROJECTILES
     * @see net.minecraft.world.item.component.ChargedProjectiles.items
     * @see net.minecraft.world.item.ProjectileWeaponItem.draw
     * @see net.minecraft.world.item.ProjectileWeaponItem.shoot
     * @see net.minecraft.world.item.enchantment.EnchantmentHelper.processProjectileCount
     * @see net.minecraft.world.item.enchantment.EnchantmentHelper.processProjectileSpread
     * @see net.minecraft.world.item.CrossbowItem.createProjectile
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/HeldItemTrajectoryResolver.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/HeldItemTrajectoryResolver.kt:42}
     */
    static resolveHeldItemShots(player: Player, stack: ItemStack, alwaysShowBow: boolean, includeMultiShot: boolean): TrajectoryShotDescriptor[];
    // private getShotYawOffsets(shotCount: number): number[];
    // private isCrossbowFirework(chargedProjectiles: ChargedProjectiles | null): boolean;
    resolveHeldItemPrimaryShot(player: Player, stack: ItemStack, alwaysShowBow: boolean): TrajectoryDescriptor | null;
    resolveHeldItemShots(player: Player, stack: ItemStack, alwaysShowBow: boolean, includeMultiShot: boolean): TrajectoryShotDescriptor[] | null;
    // private singleShot(stack: ItemStack, trajectoryDescriptor: TrajectoryDescriptor): TrajectoryShotDescriptor[];
}