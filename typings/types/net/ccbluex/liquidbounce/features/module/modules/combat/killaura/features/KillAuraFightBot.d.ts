import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { CombatContext } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/CombatContext.d.ts'
import type { CombatTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/CombatTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { NavigationBaseValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * A fight bot that handles combat and movement automatically
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt:63}
 */
export class KillAuraFightBot extends NavigationBaseValueGroup<CombatContext> {
    static INSTANCE: KillAuraFightBot;
    // private dangerousYawDiff: number;
    // private /*not mapped: */ getDangerousYawDiff(): number;
    // private opponentRange: number;
    // private /*not mapped: */ getOpponentRange(): number;
    // private runawayOnCooldown: boolean;
    // private /*not mapped: */ getRunawayOnCooldown(): boolean;
    // private calculateAttackPosition(context: CombatContext, combatTarget: CombatTarget): Vec3;
    /**
     * Calculates the desired position to move towards
     *
     * @returns Target position as Vec3d
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt#L135 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt:135}
     */
    protected calculateGoalPosition(context: CombatContext): Vec3 | null;
    // private calculateLeaderGoalPosition(leaderPosition: Vec3, playerPosition: Vec3): Vec3;
    // private calculateRunawayPosition(context: CombatContext, combatTarget: CombatTarget): Vec3;
    /**
     * Creates combat context
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt:109}
     */
    protected createNavigationContext(): CombatContext;
    /**
     * Gets rotation based on movement and target
     *
     * @returns Movement rotation or null if no target
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt#L176 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt:176}
     */
    getMovementRotation(): Rotation;
    /**
     * Handles additional movement mechanics like swimming and jumping
     *
     * @param event Movement input event to modify
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt#L158 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraFightBot.kt:158}
     */
    protected handleMovementAssist(event: MovementInputEvent, context: CombatContext): void;
    updateTarget(): void;
}