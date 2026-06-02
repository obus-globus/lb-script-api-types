import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { NameReport } from '../../../../../../net/minecraft/client/multiplayer/chat/report/NameReport.d.ts'
import type { Report$Builder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Builder.d.ts'
import type { Report$CannotBuildReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$CannotBuildReason.d.ts'
import type { Report$Result } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Result.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
export class NameReport$Builder extends Report$Builder<NameReport> {
    constructor(reportedProfileId: UUID, reportedName: string, limits: AbuseReportLimits)
    constructor(report: NameReport, limits: AbuseReportLimits)
    build(reportingContext: ReportingContext): Either<Report$Result, Report$CannotBuildReason>;
    checkBuildable(): Report$CannotBuildReason;
    hasContent(): boolean;
}