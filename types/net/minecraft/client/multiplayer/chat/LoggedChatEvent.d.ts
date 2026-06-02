import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggedChatEvent$Type } from '../../../../../net/minecraft/client/multiplayer/chat/LoggedChatEvent$Type.d.ts'
export interface LoggedChatEvent extends Object{
    type(): LoggedChatEvent$Type;
}