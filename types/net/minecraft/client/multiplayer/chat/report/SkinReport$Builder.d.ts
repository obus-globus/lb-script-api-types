import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Report$Builder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Builder.d.ts'
import type { Report$CannotBuildReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$CannotBuildReason.d.ts'
import type { Report$Result } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Result.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { SkinReport } from '../../../../../../net/minecraft/client/multiplayer/chat/report/SkinReport.d.ts'
import type { PlayerSkin } from '../../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class SkinReport$Builder extends Report$Builder<SkinReport> {
    constructor(reportedProfileId: UUID, skin: () => PlayerSkin, limits: AbuseReportLimits)
    constructor(report: SkinReport, limits: AbuseReportLimits)
    build(reportingContext: ReportingContext): Either<Report$Result, Report$CannotBuildReason>;
    checkBuildable(): Report$CannotBuildReason;
    hasContent(): boolean;
}