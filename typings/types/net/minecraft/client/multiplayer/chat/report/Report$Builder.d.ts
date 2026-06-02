import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Report } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report.d.ts'
import type { Report$CannotBuildReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$CannotBuildReason.d.ts'
import type { Report$Result } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Result.d.ts'
import type { ReportReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportReason.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
export abstract class Report$Builder<R extends Report> extends Object {
    constructor(report: R, limits: AbuseReportLimits)
    // private limits: AbuseReportLimits;
    // private report: R;
    attested(): boolean;
    build(reportingContext: ReportingContext): Either<Report$Result, Report$CannotBuildReason>;
    checkBuildable(): Report$CannotBuildReason;
    comments(): string;
    hasContent(): boolean;
    reason(): ReportReason;
    report(): R;
    reportedProfileId(): UUID;
    setAttested(attested: boolean): void;
    setComments(comments: string): void;
    setReason(reason: ReportReason): void;
}