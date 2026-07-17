import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { EventKey } from '../../../../com/microsoft/aad/msal4j/EventKey.d.ts'
import type { ITelemetry } from '../../../../com/microsoft/aad/msal4j/ITelemetry.d.ts'
import type { ITelemetryManager } from '../../../../com/microsoft/aad/msal4j/ITelemetryManager.d.ts'
import type { TelemetryHelper } from '../../../../com/microsoft/aad/msal4j/TelemetryHelper.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TelemetryManager extends Object implements ITelemetry, ITelemetryManager {
    constructor(arg0: (param0: JavaMap<string, string>[]) => void, arg1: boolean)
    // private completedEvents: JavaMap<string, JavaMap<any, any>[]>;
    // private eventCount: JavaMap<string, JavaMap<string, number>>;
    // private eventsInProgress: JavaMap<EventKey, JavaMap<any, any>>;
    // private onlySendFailureTelemetry: boolean;
    // private telemetryConsumer: (param0: JavaMap<string, string>[]) => void;
    // private collateOrphanedEvents(arg0: string): JavaMap<any, any>[];
    createTelemetryHelper(arg0: string, arg1: string, arg2: JavaMap<any, any>, arg3: boolean): TelemetryHelper;
    flush(arg0: string, arg1: string): void;
    generateRequestId(): string;
    // private hasConsumer(): boolean;
    // private incrementEventCount(arg0: string, arg1: JavaMap<any, any>): void;
    startEvent(arg0: string, arg1: JavaMap<any, any>): void;
    stopEvent(arg0: string, arg1: JavaMap<any, any>): void;
}