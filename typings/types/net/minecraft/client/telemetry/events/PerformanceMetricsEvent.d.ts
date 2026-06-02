import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TelemetryEventSender } from '../../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
import type { AggregatedTelemetryEvent } from '../../../../../net/minecraft/client/telemetry/events/AggregatedTelemetryEvent.d.ts'
export class PerformanceMetricsEvent extends AggregatedTelemetryEvent {
    constructor()
    // private fpsSamples: (Object | null)[];
    // private frameTimeSamples: (Object | null)[];
    // private usedMemorySamples: (Object | null)[];
    // private resetValues(): void;
    sendEvent(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
    takeSample(): void;
    // private takeUsedMemorySample(): void;
    tick(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
}