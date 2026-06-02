import type { IHttpHelper } from '../../../../com/microsoft/aad/msal4j/IHttpHelper.d.ts'
import type { ServerSideTelemetry } from '../../../../com/microsoft/aad/msal4j/ServerSideTelemetry.d.ts'
import type { TelemetryManager } from '../../../../com/microsoft/aad/msal4j/TelemetryManager.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ServiceBundle extends Object {
    constructor(arg0: ExecutorService, arg1: TelemetryManager, arg2: IHttpHelper)
    // private executorService: ExecutorService;
    // private httpHelper: IHttpHelper;
    // private serverSideTelemetry: ServerSideTelemetry;
    // private telemetryManager: TelemetryManager;
    getExecutorService(): ExecutorService;
    getHttpHelper(): IHttpHelper;
    getServerSideTelemetry(): ServerSideTelemetry;
    getTelemetryManager(): TelemetryManager;
}