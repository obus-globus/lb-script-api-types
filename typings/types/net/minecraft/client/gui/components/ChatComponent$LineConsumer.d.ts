import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiMessage$Line } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessage$Line.d.ts'
export interface ChatComponent$LineConsumer extends Object{
    accept(line: GuiMessage$Line, lineIndex: number, alpha: number): void;
}