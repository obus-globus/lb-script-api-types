import type { CurrentRequest } from '../../../../com/microsoft/aad/msal4j/CurrentRequest.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ServerSideTelemetry extends Object {
    constructor()
    // private currentRequest: CurrentRequest;
    // private previousRequestInProgress: { [key: string]: string[] };
    // private previousRequests: { [key: string]: string[] };
    // private silentSuccessfulCount: AtomicInteger;
    addFailedRequestTelemetry(arg0: string, arg1: string, arg2: string): void;
    // private buildCurrentRequestHeader(): string;
    // private buildLastRequestHeader(): string;
    getCurrentRequest(): CurrentRequest;
    getServerTelemetryHeaderMap(): { [key: string]: string };
    incrementSilentSuccessfulCount(): void;
    setCurrentRequest(arg0: CurrentRequest): void;
}