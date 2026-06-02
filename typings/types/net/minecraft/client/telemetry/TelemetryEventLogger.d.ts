import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventInstance } from '../../../../net/minecraft/client/telemetry/TelemetryEventInstance.d.ts'
export interface TelemetryEventLogger extends Object{
    log(event: TelemetryEventInstance): void;
}