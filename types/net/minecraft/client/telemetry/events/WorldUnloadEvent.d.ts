import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TelemetryEventSender } from '../../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
export class WorldUnloadEvent extends Object {
    constructor()
    // private lastGameTime: number;
    // private totalTicks: number;
    // private worldLoadedTime: Optional<Instant>;
    // private getTimeInSecondsSinceLoad(loadedTime: Instant): number;
    onPlayerInfoReceived(): void;
    send(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
    setTime(gameTime: number): void;
}