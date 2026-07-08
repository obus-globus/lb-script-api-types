import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * TimerRange module
 *
 * Automatically speeds up when you are near an enemy.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTimerRange.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleTimerRange.kt:40}
 */
export class ModuleTimerRange extends ClientModule {
    static INSTANCE: ModuleTimerRange;
    // private balanceLimitSpeed: number;
    // private /*not mapped: */ getBalanceLimitSpeed(): number;
    // private balanceRecoveryIncrement: number;
    // private /*not mapped: */ getBalanceRecoveryIncrement(): number;
    // private balanceTimer: number;
    // private boostSpeed: number;
    // private /*not mapped: */ getBoostSpeed(): number;
    // private chance: number;
    // private /*not mapped: */ getChance(): number;
    // private distanceToPause: number;
    // private /*not mapped: */ getDistanceToPause(): number;
    // private distanceToSpeedUp: number;
    // private /*not mapped: */ getDistanceToSpeedUp(): number;
    // private distanceToStartWorking: number;
    // private /*not mapped: */ getDistanceToStartWorking(): number;
    // private inRangeSpeed: number;
    // private /*not mapped: */ getInRangeSpeed(): number;
    // private normalSpeed: number;
    // private /*not mapped: */ getNormalSpeed(): number;
    // private onlyOnGround: boolean;
    // private /*not mapped: */ getOnlyOnGround(): boolean;
    readonly packetHandler: EventHook<PacketEvent>;
    // private pauseOnFlag: boolean;
    // private /*not mapped: */ getPauseOnFlag(): boolean;
    // private reachedTheLimit: boolean;
    readonly repeatable: EventHook<GameTickEvent>;
    // private requiresKillAura: boolean;
    // private /*not mapped: */ getRequiresKillAura(): boolean;
    // private timerBalanceLimit: number;
    // private /*not mapped: */ getTimerBalanceLimit(): number;
    onEnabled(): void;
    // private updateTimerSpeed(): number | null;
}