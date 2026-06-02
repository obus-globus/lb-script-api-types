import type { TelemetrySession } from '../../../../com/mojang/authlib/minecraft/TelemetrySession.d.ts'
import type { UserApiService$UserProperties } from '../../../../com/mojang/authlib/minecraft/UserApiService$UserProperties.d.ts'
import type { AbuseReportLimits } from '../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { AbuseReportRequest } from '../../../../com/mojang/authlib/yggdrasil/request/AbuseReportRequest.d.ts'
import type { KeyPairResponse } from '../../../../com/mojang/authlib/yggdrasil/response/KeyPairResponse.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UserApiService extends Object{
    canSendReports(): boolean;
    fetchProperties(): UserApiService$UserProperties;
    getAbuseReportLimits(): AbuseReportLimits;
    getKeyPair(): KeyPairResponse;
    isBlockedPlayer(arg0: UUID): boolean;
    newTelemetrySession(arg0: Executor): TelemetrySession;
    refreshBlockList(): void;
    reportAbuse(arg0: AbuseReportRequest): void;
}