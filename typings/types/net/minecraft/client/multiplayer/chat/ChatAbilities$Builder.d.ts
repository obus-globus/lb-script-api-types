import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatAbilities } from '../../../../../net/minecraft/client/multiplayer/chat/ChatAbilities.d.ts'
import type { ChatRestriction } from '../../../../../net/minecraft/client/multiplayer/chat/ChatRestriction.d.ts'
export class ChatAbilities$Builder extends Object {
    constructor()
    // private restrictions: ChatRestriction[];
    addRestriction(restriction: ChatRestriction): ChatAbilities$Builder;
    build(): ChatAbilities;
}