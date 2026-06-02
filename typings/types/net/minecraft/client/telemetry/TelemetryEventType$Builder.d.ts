import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventType } from '../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryProperty } from '../../../../net/minecraft/client/telemetry/TelemetryProperty.d.ts'
export class TelemetryEventType$Builder extends Object {
    private constructor(id: string, exportKey: string)
    // private exportKey: string;
    // private id: string;
    // private isOptIn: boolean;
    // private properties: TelemetryProperty<Object>[];
    define(property: TelemetryProperty<T>): TelemetryEventType$Builder;
    defineAll(properties: TelemetryProperty<Object>[]): TelemetryEventType$Builder;
    optIn(): TelemetryEventType$Builder;
    register(): TelemetryEventType;
}