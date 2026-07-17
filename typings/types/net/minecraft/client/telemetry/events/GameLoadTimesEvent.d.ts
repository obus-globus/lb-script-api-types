import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Stopwatch } from '../../../../../com/google/common/base/Stopwatch.d.ts'
import type { Ticker } from '../../../../../com/google/common/base/Ticker.d.ts'
import type { OptionalLong } from '../../../../../java/util/OptionalLong.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TelemetryEventSender } from '../../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryProperty } from '../../../../../net/minecraft/client/telemetry/TelemetryProperty.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
import type { GameLoadTimesEvent$Measurement } from '../../../../../net/minecraft/client/telemetry/events/GameLoadTimesEvent$Measurement.d.ts'
export class GameLoadTimesEvent extends Object {
    static INSTANCE: GameLoadTimesEvent;
    constructor(timeSource: Ticker)
    readonly bootstrapTime: OptionalLong;
    // private measurements: JavaMap<TelemetryProperty<GameLoadTimesEvent$Measurement>, Stopwatch>;
    // private timeSource: Ticker;
    beginStep(property: TelemetryProperty<GameLoadTimesEvent$Measurement>): void;
    beginStep(property: TelemetryProperty<GameLoadTimesEvent$Measurement>, measurement: Stopwatch): void;
    // private beginStep(property: TelemetryProperty<GameLoadTimesEvent$Measurement>, measurement: (param0: TelemetryProperty<GameLoadTimesEvent$Measurement>) => Stopwatch): void;
    endStep(property: TelemetryProperty<GameLoadTimesEvent$Measurement>): void;
    send(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
    setBootstrapTime(duration: number): void;
}