import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TrapPlayerSimulation$PredictedPlayerPos } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlayerSimulation$PredictedPlayerPos.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrapPlayerSimulation extends Object {
    static INSTANCE: TrapPlayerSimulation;
    // private SIMULATION_DISTANCE: number;
    // private predictedPlayerStatesCache: JavaMap<Player, TrapPlayerSimulation$PredictedPlayerPos[]>;
    /**
     * Searches for a position where a trap could be laid. Currently, that is just the landing position of
     * a jumping/falling player.
     *
     * @returns position for the trap. `null` if the trap should not be placed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlayerSimulation.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/TrapPlayerSimulation.kt:91}
     */
    findPosForTrap(target: LivingEntity, isTargetLocked: boolean): Vec3 | null;
    runSimulations(enemies: LivingEntity[]): void;
}