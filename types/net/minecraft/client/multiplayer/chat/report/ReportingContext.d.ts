import type { UserApiService } from '../../../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { ChatLog } from '../../../../../../net/minecraft/client/multiplayer/chat/ChatLog.d.ts'
import type { AbuseReportSender } from '../../../../../../net/minecraft/client/multiplayer/chat/report/AbuseReportSender.d.ts'
import type { Report } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report.d.ts'
import type { ReportEnvironment } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportEnvironment.d.ts'
export class ReportingContext extends Object {
    static create(paramenvironment: ReportEnvironment, paramuserApiService: UserApiService): ReportingContext;
    constructor(sender: AbuseReportSender, environment: ReportEnvironment, chatLog: ChatLog)
    // private chatLog: ChatLog;
    // private draftReport: Report;
    // private environment: ReportEnvironment;
    // private sender: AbuseReportSender;
    chatLog(): ChatLog;
    draftReportHandled(minecraft: Minecraft, lastScreen: Screen, onDiscard: () => void, quitToTitle: boolean): void;
    hasDraftReport(): boolean;
    hasDraftReportFor(playerId: UUID): boolean;
    matches(environment: ReportEnvironment): boolean;
    sender(): AbuseReportSender;
    setReportDraft(draftReport: Report): void;
}