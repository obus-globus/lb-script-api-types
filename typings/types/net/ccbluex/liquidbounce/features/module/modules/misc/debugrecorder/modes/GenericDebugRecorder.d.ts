import type { JsonElement } from '../../../../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleDebugRecorder$DebugRecorderMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/ModuleDebugRecorder$DebugRecorderMode.d.ts'
import type { GenericDebugRecorder$ScheduledEntityDebug } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/modes/GenericDebugRecorder$ScheduledEntityDebug.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class GenericDebugRecorder extends ModuleDebugRecorder$DebugRecorderMode<JsonObject> {
    static Companion: Tagged$Companion;
    static INSTANCE: GenericDebugRecorder;
    readonly repeatable: EventHook<GameTickEvent>;
    // private waitingEntities: GenericDebugRecorder$ScheduledEntityDebug[];
    debugEntityIn(entity: Entity, ticks: number): void;
    debugObject(entity: Entity): JsonElement;
    recordDebugInfo(module: ClientModule, packetName: string, packet: JsonElement): void;
}