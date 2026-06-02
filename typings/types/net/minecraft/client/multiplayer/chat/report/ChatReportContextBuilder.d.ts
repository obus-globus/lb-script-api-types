import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChatLog } from '../../../../../../net/minecraft/client/multiplayer/chat/ChatLog.d.ts'
import type { ChatReportContextBuilder$Collector } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ChatReportContextBuilder$Collector.d.ts'
import type { ChatReportContextBuilder$Handler } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ChatReportContextBuilder$Handler.d.ts'
import type { PlayerChatMessage } from '../../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export class ChatReportContextBuilder extends Object {
    constructor(leadingCount: number)
    // private activeCollectors: ChatReportContextBuilder$Collector[];
    // private leadingCount: number;
    acceptContext(message: PlayerChatMessage): boolean;
    collectAllContext(chatLog: ChatLog, roots: (Object | null)[], handler: ChatReportContextBuilder$Handler): void;
    isActive(): boolean;
    trackContext(message: PlayerChatMessage): void;
}