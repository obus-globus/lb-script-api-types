import type { TelemetryHelper } from '../../../../com/microsoft/aad/msal4j/TelemetryHelper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITelemetryManager extends Object{
    createTelemetryHelper(arg0: string, arg1: string, arg2: Event, arg3: boolean): TelemetryHelper;
    generateRequestId(): string;
}