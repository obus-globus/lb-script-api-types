import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GuiMessage$Line } from '../../../../../../../net/minecraft/client/multiplayer/chat/GuiMessage$Line.d.ts'
export interface MixinChatComponentAccessor extends Object{
    getChatScrollbarPos(): number;
    getTrimmedMessages(): GuiMessage$Line[];
    invokeGetLineHeight(): number;
    invokeGetLinesPerPage(): number;
    invokeGetScale(): number;
    invokeGetWidth(): number;
}