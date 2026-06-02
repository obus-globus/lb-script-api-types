import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { TelemetryEventSender } from '../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
import type { PerformanceMetricsEvent } from '../../../../net/minecraft/client/telemetry/events/PerformanceMetricsEvent.d.ts'
import type { WorldLoadEvent } from '../../../../net/minecraft/client/telemetry/events/WorldLoadEvent.d.ts'
import type { WorldLoadTimesEvent } from '../../../../net/minecraft/client/telemetry/events/WorldLoadTimesEvent.d.ts'
import type { WorldUnloadEvent } from '../../../../net/minecraft/client/telemetry/events/WorldUnloadEvent.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class WorldSessionTelemetryManager extends Object {
    constructor(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void, newWorld: boolean, worldLoadDuration: Duration, minigameName: string)
    // private eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void;
    // private performanceMetricsEvent: PerformanceMetricsEvent;
    // private worldLoadEvent: WorldLoadEvent;
    // private worldLoadTimesEvent: WorldLoadTimesEvent;
    // private worldSessionId: UUID;
    // private worldUnloadEvent: WorldUnloadEvent;
    onAdvancementDone(level: Level, holder: AdvancementHolder): void;
    onDisconnect(): void;
    onPlayerInfoReceived(type: GameType, hardcore: boolean): void;
    onServerBrandReceived(serverBrand: string): void;
    setTime(gameTime: number): void;
    tick(): void;
    worldSessionStart(): void;
}