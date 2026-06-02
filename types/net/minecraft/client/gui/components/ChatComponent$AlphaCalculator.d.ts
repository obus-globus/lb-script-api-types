import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiMessage$Line } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessage$Line.d.ts'
export interface ChatComponent$AlphaCalculator extends Object{
    calculate(message: GuiMessage$Line): number;
}