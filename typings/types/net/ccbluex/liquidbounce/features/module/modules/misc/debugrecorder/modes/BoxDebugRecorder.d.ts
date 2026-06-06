import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleDebugRecorder$DebugRecorderMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/ModuleDebugRecorder$DebugRecorderMode.d.ts'
export class BoxDebugRecorder extends ModuleDebugRecorder$DebugRecorderMode<JsonObject> {
    static Companion: Tagged$Companion;
    static INSTANCE: BoxDebugRecorder;
    // private RANGE: number;
    readonly repeatable: EventHook<GameTickEvent>;
}