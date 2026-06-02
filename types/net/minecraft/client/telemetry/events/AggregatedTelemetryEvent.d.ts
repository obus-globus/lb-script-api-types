import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TelemetryEventSender } from '../../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
export abstract class AggregatedTelemetryEvent extends Object {
    constructor()
    // private lastSampleTime: Instant;
    // private sampleCount: number;
    // private ticking: boolean;
    getSampleCount(): number;
    sendEvent(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
    shouldSentEvent(): boolean;
    shouldTakeSample(): boolean;
    start(): void;
    stop(): void;
    takeSample(): void;
    tick(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void): void;
}