import type { EventKey } from '../../../../com/microsoft/aad/msal4j/EventKey.d.ts'
import type { ITelemetry } from '../../../../com/microsoft/aad/msal4j/ITelemetry.d.ts'
import type { ITelemetryManager } from '../../../../com/microsoft/aad/msal4j/ITelemetryManager.d.ts'
import type { TelemetryHelper } from '../../../../com/microsoft/aad/msal4j/TelemetryHelper.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TelemetryManager extends Object implements ITelemetry, ITelemetryManager {
    constructor(arg0: (param0: { [key: string]: string }[]) => void, arg1: boolean)
    // private completedEvents: { [key: string]: Event[] };
    // private eventCount: { [key: string]: { [key: string]: number } };
    // private eventsInProgress: Map<EventKey, Event>;
    // private onlySendFailureTelemetry: boolean;
    // private telemetryConsumer: (param0: { [key: string]: string }[]) => void;
    // private collateOrphanedEvents(arg0: string): Event[];
    createTelemetryHelper(arg0: string, arg1: string, arg2: Event, arg3: boolean): TelemetryHelper;
    flush(arg0: string, arg1: string): void;
    generateRequestId(): string;
    // private hasConsumer(): boolean;
    // private incrementEventCount(arg0: string, arg1: Event): void;
    startEvent(arg0: string, arg1: Event): void;
    stopEvent(arg0: string, arg1: Event): void;
}