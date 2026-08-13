import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TrajectoryType$InitialTickBehavior } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType$InitialTickBehavior.d.ts'
/**
 * @see net.minecraft.world.entity.projectile.ThrowableProjectile.tick
 * @see net.minecraft.world.entity.projectile.arrow.AbstractArrow.tick
 * @see net.minecraft.world.entity.projectile.hurtingprojectile.AbstractHurtingProjectile.tick
 * @see net.minecraft.world.entity.projectile.FireworkRocketEntity.tick
 * @see net.minecraft.world.entity.projectile.FishingHook.tick
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.kt:31}
 */
export class TrajectoryType extends Enum<TrajectoryType> implements Tagged {
    static Arrow: TrajectoryType;
    static Companion: Tagged$Companion;
    static Egg: TrajectoryType;
    static EnderPearl: TrajectoryType;
    static ExpBottle: TrajectoryType;
    static Fireball: TrajectoryType;
    static FireworkRocket: TrajectoryType;
    static FishingBobber: TrajectoryType;
    static Potion: TrajectoryType;
    static Snowball: TrajectoryType;
    static Trident: TrajectoryType;
    static WindCharge: TrajectoryType;
    static getEntries(): TrajectoryType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TrajectoryType;
    static values(): TrajectoryType[];
    private constructor(tag: string, initialTickBehavior: TrajectoryType$InitialTickBehavior)
    readonly initialTickBehavior: TrajectoryType$InitialTickBehavior;
    readonly requiresInitialTickCorrection: boolean;
    readonly tag: string;
    name(): "Arrow" | "Potion" | "EnderPearl" | "FishingBobber" | "Trident" | "Snowball" | "Egg" | "ExpBottle" | "FireworkRocket" | "Fireball" | "WindCharge";
}