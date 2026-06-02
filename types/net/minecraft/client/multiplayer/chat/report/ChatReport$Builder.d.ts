import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { ReportChatMessage } from '../../../../../../com/mojang/authlib/minecraft/report/ReportChatMessage.d.ts'
import type { ReportEvidence } from '../../../../../../com/mojang/authlib/minecraft/report/ReportEvidence.d.ts'
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggedChatMessage$Player } from '../../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage$Player.d.ts'
import type { ChatReport } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ChatReport.d.ts'
import type { Report$Builder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Builder.d.ts'
import type { Report$CannotBuildReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$CannotBuildReason.d.ts'
import type { Report$Result } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Result.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
export class ChatReport$Builder extends Report$Builder<ChatReport> {
    constructor(reportedProfileId: UUID, limits: AbuseReportLimits)
    constructor(report: ChatReport, limits: AbuseReportLimits)
    build(reportingContext: ReportingContext): Either<Report$Result, Report$CannotBuildReason>;
    // private buildEvidence(reportingContext: ReportingContext): ReportEvidence;
    // private buildReportedChatMessage(chat: LoggedChatMessage$Player, reported: boolean): ReportChatMessage;
    checkBuildable(): Report$CannotBuildReason;
    copy(): ChatReport$Builder;
    hasContent(): boolean;
    isReported(id: number): boolean;
    reportedMessages(): (Object | null)[];
    toggleReported(id: number): void;
}