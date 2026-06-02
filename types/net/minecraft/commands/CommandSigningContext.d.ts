import type { Object } from '../../../java/lang/Object.d.ts'
import type { PlayerChatMessage } from '../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
export interface CommandSigningContext extends Object{
    getArgument(name: string): PlayerChatMessage;
}