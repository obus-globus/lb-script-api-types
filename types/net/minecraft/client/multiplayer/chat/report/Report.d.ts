import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { ReportReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportReason.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
export abstract class Report extends Object {
    constructor(reportId: UUID, createdAt: Instant, reportedProfileId: UUID)
    // private attested: boolean;
    // private comments: string;
    // private createdAt: Instant;
    // private reason: ReportReason;
    // private reportId: UUID;
    // private reportedProfileId: UUID;
    copy(): Report;
    createScreen(lastScreen: Screen, context: ReportingContext): Screen;
    isReportedPlayer(playerId: UUID): boolean;
}