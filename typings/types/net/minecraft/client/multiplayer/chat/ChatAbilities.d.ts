import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatRestriction } from '../../../../../net/minecraft/client/multiplayer/chat/ChatRestriction.d.ts'
import type { GuiMessage } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessage.d.ts'
import type { PermissionSet } from '../../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export class ChatAbilities extends Object {
    static NO_RESTRICTIONS: ChatAbilities;
    private constructor(restrictionReasons: ChatRestriction[])
    // private permissions: PermissionSet;
    // private restrictionReasons: ChatRestriction[];
    // private visibleMessagesFilter: (param0: GuiMessage) => boolean;
    canReceivePlayerMessages(): boolean;
    canReceiveSystemMessages(): boolean;
    canSendCommands(): boolean;
    canSendMessages(): boolean;
    hasAnyRestrictions(): boolean;
    permissions(): PermissionSet;
    restrictions(): Stream<ChatRestriction>;
    visibleMessagesFilter(): (param0: GuiMessage) => boolean;
}