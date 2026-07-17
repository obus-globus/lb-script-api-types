import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ITelemetry } from '../../../../com/microsoft/aad/msal4j/ITelemetry.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TelemetryHelper extends Object implements AutoCloseable {
    constructor(arg0: ITelemetry, arg1: string, arg2: string, arg3: JavaMap<any, any>, arg4: boolean)
    // private clientId: string;
    // private eventToEnd: JavaMap<any, any>;
    // private requestId: string;
    // private shouldFlush: boolean;
    // private telemetry: ITelemetry;
    close(): void;
}