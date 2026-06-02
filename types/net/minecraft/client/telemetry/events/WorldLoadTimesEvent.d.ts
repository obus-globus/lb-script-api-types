import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TelemetryEventSender } from '../../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
export class WorldLoadTimesEvent extends Object {
    constructor(newWorld: boolean, worldLoadDuration: Duration)
    // private newWorld: boolean;
    // private worldLoadDuration: Duration;
    send(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
}