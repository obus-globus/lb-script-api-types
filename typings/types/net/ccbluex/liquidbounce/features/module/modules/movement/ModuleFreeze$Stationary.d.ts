import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ModuleFreeze$Stationary$FloatOffsetGenerator } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze$Stationary$FloatOffsetGenerator.d.ts'
/**
 * Stationary freeze - only cancel movement but keeps network communication intact
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L207 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:207}
 */
export class ModuleFreeze$Stationary extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFreeze$Stationary;
    // private cancelC0B: boolean;
    // private /*not mapped: */ getCancelC0B(): boolean;
    // private packetEventHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
    // private pitchOffset: ModuleFreeze$Stationary$FloatOffsetGenerator;
    // private yawOffset: ModuleFreeze$Stationary$FloatOffsetGenerator;
}