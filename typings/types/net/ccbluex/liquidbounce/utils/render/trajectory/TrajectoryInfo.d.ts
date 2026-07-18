import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrajectoryInfo$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo$Companion.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrajectoryInfo extends Record {
    static BOW_FULL_PULL: TrajectoryInfo;
    /**
     * Note: Player only
     *
     * @see net.minecraft.world.item.CrossbowItem.performShooting
     * @see net.minecraft.world.item.CrossbowItem.ARROW_POWER
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt:86}
     */
    static CROSSBOW_ARROW: TrajectoryInfo;
    static Companion: TrajectoryInfo$Companion;
    /**
     * @see net.minecraft.world.item.ExperienceBottleItem.use
     * @see net.minecraft.world.entity.projectile.throwableitemprojectile.ThrownExperienceBottle.getDefaultGravity
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt:69}
     */
    static EXP_BOTTLE: TrajectoryInfo;
    static FIREBALL: TrajectoryInfo;
    static FIREWORK_ROCKET: TrajectoryInfo;
    /**
     * @see net.minecraft.world.entity.projectile.FishingHook.tick
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt:74}
     */
    static FISHING_ROD: TrajectoryInfo;
    /**
     * @see net.minecraft.world.entity.projectile.ThrowableProjectile.getDefaultGravity
     * @see net.minecraft.world.entity.projectile.ThrowableProjectile.tick
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt:55}
     */
    static GENERIC: TrajectoryInfo;
    static PERSISTENT: TrajectoryInfo;
    static POTION: TrajectoryInfo;
    static TRIDENT: TrajectoryInfo;
    /**
     * @see net.minecraft.world.item.WindChargeItem.use
     * @see net.minecraft.world.entity.projectile.hurtingprojectile.windcharge.AbstractWindCharge.getInertia
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt:106}
     */
    static WIND_CHARGE: TrajectoryInfo;
    static bowWithUsageDuration(): TrajectoryInfo;
    static bowWithUsageDuration(usageDurationTicks: number): TrajectoryInfo | null;
    constructor(gravity: number, hitboxRadius: number, initialVelocity: number, drag: number, dragInWater: number, roll: number, copiesPlayerVelocity: boolean)
    // private copiesPlayerVelocity: boolean;
    /*not mapped: */ copiesPlayerVelocity(): boolean;
    // private drag: number;
    /*not mapped: */ drag(): number;
    // private dragInWater: number;
    /*not mapped: */ dragInWater(): number;
    // private gravity: number;
    /*not mapped: */ gravity(): number;
    // private hitboxRadius: number;
    /**
     * Radius (!!) of the projectile
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.kt:33}
     */
    /*not mapped: */ hitboxRadius(): number;
    // private initialVelocity: number;
    /*not mapped: */ initialVelocity(): number;
    // private roll: number;
    /*not mapped: */ roll(): number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): number;
    component5(): number;
    component6(): number;
    component7(): boolean;
    copy(gravity: number, hitboxRadius: number, initialVelocity: number, drag: number, dragInWater: number, roll: number, copiesPlayerVelocity: boolean): TrajectoryInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hitbox(center?: Vec3): AABB;
    toString(): string;
}