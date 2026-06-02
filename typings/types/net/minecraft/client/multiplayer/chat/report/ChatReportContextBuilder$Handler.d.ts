import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggedChatMessage$Player } from '../../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage$Player.d.ts'
export interface ChatReportContextBuilder$Handler extends Object{
    accept(id: number, event: LoggedChatMessage$Player): void;
}