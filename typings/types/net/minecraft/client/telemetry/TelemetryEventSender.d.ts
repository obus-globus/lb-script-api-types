import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventType } from '../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
export interface TelemetryEventSender extends Object {
    decorate(decorator: (param0: TelemetryPropertyMap$Builder) => void): (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void;
    send(type: TelemetryEventType, buildFunction: (param0: TelemetryPropertyMap$Builder) => void): void;
}