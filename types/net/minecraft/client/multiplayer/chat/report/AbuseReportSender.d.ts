import type { AbuseReport } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReport.d.ts'
import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { Unit } from '../../../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ReportType } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportType.d.ts'
export interface AbuseReportSender extends Object{
    isEnabled(): boolean;
    reportLimits(): AbuseReportLimits;
    send(id: UUID, reportType: ReportType, report: AbuseReport): CompletableFuture<Unit>;
}