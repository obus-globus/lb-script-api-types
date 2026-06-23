import type { ITelemetry } from '../../../../com/microsoft/aad/msal4j/ITelemetry.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TelemetryHelper extends Object implements AutoCloseable {
    constructor(arg0: ITelemetry, arg1: string, arg2: string, arg3: { [key: string]: any }, arg4: boolean)
    // private clientId: string;
    // private eventToEnd: { [key: string]: any };
    // private requestId: string;
    // private shouldFlush: boolean;
    // private telemetry: ITelemetry;
    close(): void;
}