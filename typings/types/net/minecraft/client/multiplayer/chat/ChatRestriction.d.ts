import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ChatRestriction$Action } from '../../../../../net/minecraft/client/multiplayer/chat/ChatRestriction$Action.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Permission } from '../../../../../net/minecraft/server/permissions/Permission.d.ts'
export class ChatRestriction extends Enum<ChatRestriction> {
    static CHAT_AND_COMMANDS_DISABLED_BY_OPTIONS: ChatRestriction;
    static CHAT_DISABLED_BY_OPTIONS: ChatRestriction;
    static DISABLED_BY_LAUNCHER: ChatRestriction;
    static DISABLED_BY_PROFILE: ChatRestriction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChatRestriction;
    static values(): ChatRestriction[];
    private constructor(display: Component, action: Optional<ChatRestriction$Action>)
    // private action: Optional<ChatRestriction$Action>;
    // private display: Component;
    action(): Optional<ChatRestriction$Action>;
    display(): Component;
    modifyPermissions(permissionSet: Permission[]): void;
    name(): "CHAT_AND_COMMANDS_DISABLED_BY_OPTIONS" | "CHAT_DISABLED_BY_OPTIONS" | "DISABLED_BY_LAUNCHER" | "DISABLED_BY_PROFILE";
}