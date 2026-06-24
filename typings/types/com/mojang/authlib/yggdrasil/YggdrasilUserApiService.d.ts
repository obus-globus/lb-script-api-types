import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { TelemetrySession } from '../../../../com/mojang/authlib/minecraft/TelemetrySession.d.ts'
import type { UserApiService } from '../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { UserApiService$UserProperties } from '../../../../com/mojang/authlib/minecraft/UserApiService$UserProperties.d.ts'
import type { MinecraftClient } from '../../../../com/mojang/authlib/minecraft/client/MinecraftClient.d.ts'
import type { AbuseReportLimits } from '../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { AbuseReportRequest } from '../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest.d.ts'
import type { KeyPairResponse } from '../../../../com/mojang/authlib/yggdrasil/response/KeyPairResponse.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilUserApiService extends Object implements UserApiService {
    static OFFLINE: UserApiService;
    static OFFLINE_PROPERTIES: UserApiService$UserProperties;
    constructor(arg0: string, arg1: Proxy, arg2: Environment)
    // private blockList: UUID[];
    // private environment: Environment;
    // private minecraftClient: MinecraftClient;
    // private nextAcceptableRequest: Instant;
    // private routeAbuseReport: URL;
    // private routeBlocklist: URL;
    // private routeKeyPair: URL;
    // private routePrivileges: URL;
    // private canMakeRequest(): boolean;
    canSendReports(): boolean;
    // private fetchBlockList(): UUID[];
    fetchProperties(): UserApiService$UserProperties;
    // private forceFetchBlockList(): UUID[];
    getAbuseReportLimits(): AbuseReportLimits;
    getKeyPair(): KeyPairResponse;
    isBlockedPlayer(arg0: UUID): boolean;
    newTelemetrySession(arg0: Executor): TelemetrySession;
    refreshBlockList(): void;
    reportAbuse(arg0: AbuseReportRequest): void;
}