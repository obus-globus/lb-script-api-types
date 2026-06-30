import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CriticalsJump extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: CriticalsJump;
    // private adjustNextJump: boolean;
    // private canBeSeen: boolean;
    // private /*not mapped: */ getCanBeSeen(): boolean;
    // private checkAutoClicker: boolean;
    // private /*not mapped: */ getCheckAutoClicker(): boolean;
    // private checkKillaura: boolean;
    // private /*not mapped: */ getCheckKillaura(): boolean;
    // private height: number;
    // private /*not mapped: */ getHeight(): number;
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    // private movementInputEvent: EventHook<MovementInputEvent>;
    // private optimizeForCooldown: boolean;
    // private /*not mapped: */ getOptimizeForCooldown(): boolean;
    readonly parent: ModeValueGroup<any>;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private calculateTicksUntilNextCrit(): number;
    // private getCooldownDamageFactor(player: Player, tickDelta: number): number;
    // private isActive(): boolean;
    // private predictPlayerPos(target: Player, ticks: number): Pair<Vec3, Vec3>;
    /**
     * Sometimes when the player is almost at the highest point of his jump, the KillAura
     * will try to attack the enemy anyway. To maximise damage, this function is used to determine
     * whether it is worth to wait for the fall.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsJump.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsJump.kt:115}
     */
    shouldWaitForCrit(target: Entity, ignoreState: boolean): boolean;
    shouldWaitForJump(initialMotion: number): boolean;
}