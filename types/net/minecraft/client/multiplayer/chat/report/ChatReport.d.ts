import type { AbuseReportLimits } from '../../../../../../com/mojang/authlib/minecraft/report/AbuseReportLimits.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Report } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
export class ChatReport extends Report {
    private constructor(reportId: UUID, createdAt: Instant, reportedProfileId: UUID)
    // private reportedMessages: (Object | null)[];
    copy(): ChatReport;
    createScreen(lastScreen: Screen, context: ReportingContext): Screen;
    toggleReported(id: number, limits: AbuseReportLimits): void;
}