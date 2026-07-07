import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { CombatSample } from '../../../../../../../../../net/ccbluex/liquidbounce/deeplearn/data/CombatSample.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ModuleDebugRecorder$DebugRecorderMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/ModuleDebugRecorder$DebugRecorderMode.d.ts'
import type { LivingEntity } from '../../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Simulates scenarios where the player is training to hit a target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt:49}
 */
export class DebugCombatTrainerRecorder extends ModuleDebugRecorder$DebugRecorderMode<CombatSample> {
    static Companion: Tagged$Companion;
    static INSTANCE: DebugCombatTrainerRecorder;
    // private isFirstRun: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private target: LivingEntity | null;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
    enable(): void;
    /**
     * Spawns a slime entity about 2.0 - 3.0 blocks away from the player,
     * in a random direction and at a different height.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt:129}
     */
    spawn(): LivingEntity;
}