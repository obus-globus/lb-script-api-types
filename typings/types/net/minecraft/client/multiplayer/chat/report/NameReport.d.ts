import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Report } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
export class NameReport extends Report {
    private constructor(reportId: UUID, createdAt: Instant, reportedProfileId: UUID, reportedName: string)
    readonly reportedName: string;
    copy(): NameReport;
    createScreen(lastScreen: Screen, context: ReportingContext): Screen;
    getReportedName(): string;
}