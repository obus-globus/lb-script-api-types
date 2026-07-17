import type { MinecraftClientException } from '../../../../../../com/mojang/authlib/exceptions/MinecraftClientException.d.ts'
import type { MinecraftClientHttpException } from '../../../../../../com/mojang/authlib/exceptions/MinecraftClientHttpException.d.ts'
import type { UserApiService } from '../../../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { AbuseReport } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReport.d.ts'
import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { Unit } from '../../../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbuseReportSender } from '../../../../../../net/minecraft/client/multiplayer/chat/report/AbuseReportSender.d.ts'
import type { ReportEnvironment } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportEnvironment.d.ts'
import type { ReportType } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportType.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class AbuseReportSender$Services extends Record implements AbuseReportSender {
    constructor(environment: ReportEnvironment, userApiService: UserApiService)
    // private environment: ReportEnvironment;
    // private userApiService: UserApiService;
    environment(): ReportEnvironment;
    equals(o: Object | null): boolean;
    // private getErrorDescription(e: MinecraftClientException): Component;
    // private getHttpErrorDescription(e: MinecraftClientHttpException): Component;
    hashCode(): number;
    isEnabled(): boolean;
    reportLimits(): AbuseReportLimits;
    send(id: UUID, reportType: ReportType, report: AbuseReport): CompletableFuture<Unit>;
    toString(): string;
    userApiService(): UserApiService;
}