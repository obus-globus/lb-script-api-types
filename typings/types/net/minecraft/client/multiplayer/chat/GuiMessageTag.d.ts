import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiMessageTag$Icon } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag$Icon.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class GuiMessageTag extends Record {
    static chatError(): GuiMessageTag;
    static chatModified(paramoriginalContent: string): GuiMessageTag;
    static chatNotSecure(): GuiMessageTag;
    static system(): GuiMessageTag;
    static systemSinglePlayer(): GuiMessageTag;
    // private icon: GuiMessageTag$Icon;
    // private indicatorColor: number;
    // private logTag: string;
    // private text: Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    icon(): GuiMessageTag$Icon;
    indicatorColor(): number;
    logTag(): string;
    text(): Component;
    toString(): string;
}