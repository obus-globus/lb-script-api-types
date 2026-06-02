import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChatSelectionLogFiller$Output } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionLogFiller$Output.d.ts'
import type { ChatLog } from '../../../../../../net/minecraft/client/multiplayer/chat/ChatLog.d.ts'
import type { LoggedChatMessage$Player } from '../../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage$Player.d.ts'
import type { ChatReportContextBuilder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ChatReportContextBuilder.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { PlayerChatMessage } from '../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { SignedMessageLink } from '../../../../../../net/minecraft/network/chat/SignedMessageLink.d.ts'
export class ChatSelectionLogFiller extends Object {
    constructor(reportingContext: ReportingContext, canReport: (param0: LoggedChatMessage$Player) => kotlin.Boolean)
    // private canReport: (param0: LoggedChatMessage$Player) => kotlin.Boolean;
    // private contextBuilder: ChatReportContextBuilder;
    // private eventId: number;
    // private lastMessage: PlayerChatMessage;
    // private log: ChatLog;
    // private missedCount: number;
    // private previousLink: SignedMessageLink;
    // private acceptMessage(output: ChatSelectionLogFiller$Output, event: LoggedChatMessage$Player): boolean;
    fillNextPage(pageSize: number, output: ChatSelectionLogFiller$Output): void;
}