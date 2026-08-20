import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { CombatSample } from '../../../../../../../../../net/ccbluex/liquidbounce/deeplearn/data/CombatSample.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ModuleDebugRecorder$DebugRecorderMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/ModuleDebugRecorder$DebugRecorderMode.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { TargetTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
/**
 * Records combat behavior
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatRecorder.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/DebugCombatRecorder.kt:60}
 */
export class DebugCombatRecorder extends ModuleDebugRecorder$DebugRecorderMode<CombatSample> {
    static Companion: Tagged$Companion;
    static INSTANCE: DebugCombatRecorder;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private /*not mapped: */ getDoNotTrack(): boolean;
    // private fightMap: JavaMap<any, any>;
    // private packetHandler: EventHook<PacketEvent>;
    // private previous: Rotation;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private targetEntityId: number | null;
    // private targetTracker: TargetTracker;
    // private tickHandler: EventHook<GameTickEvent>;
    // private trainingCollection: JavaMap<any, any>;
    disable(): void;
    // private reset(): void;
}