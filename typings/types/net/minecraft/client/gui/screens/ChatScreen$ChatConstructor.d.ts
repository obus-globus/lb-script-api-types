import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatScreen } from '../../../../../net/minecraft/client/gui/screens/ChatScreen.d.ts'
export interface ChatScreen$ChatConstructor<T extends ChatScreen> extends Object{
    create(initial: string, isDraft: boolean): T;
}