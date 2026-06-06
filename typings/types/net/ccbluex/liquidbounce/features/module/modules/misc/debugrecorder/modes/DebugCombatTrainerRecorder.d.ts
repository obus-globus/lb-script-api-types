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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt:47}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt#L126 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatTrainerRecorder.kt:126}
     */
    spawn(): LivingEntity;
}