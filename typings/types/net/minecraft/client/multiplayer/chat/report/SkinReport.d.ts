import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Report } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { PlayerSkin } from '../../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class SkinReport extends Report {
    private constructor(reportId: UUID, createdAt: Instant, reportedProfileId: UUID, skinGetter: () => PlayerSkin)
    readonly skinGetter: () => PlayerSkin;
    copy(): SkinReport;
    createScreen(lastScreen: Screen, context: ReportingContext): Screen;
    getSkinGetter(): () => PlayerSkin;
}