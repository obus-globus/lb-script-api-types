import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ModuleDebugRecorder$DebugRecorderMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/ModuleDebugRecorder$DebugRecorderMode.d.ts'
export class DebugCPSRecorder extends ModuleDebugRecorder$DebugRecorderMode<JsonObject> {
    static Companion: Tagged$Companion;
    static INSTANCE: DebugCPSRecorder;
    readonly mouseHandler: EventHook<MouseButtonEvent>;
    readonly packetHandler: EventHook<PacketEvent>;
}