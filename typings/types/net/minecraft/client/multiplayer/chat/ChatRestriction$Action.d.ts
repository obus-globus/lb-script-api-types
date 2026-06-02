import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatRestriction$Action extends Record {
    static GO_TO_ACCOUNT: ChatRestriction$Action;
    static GO_TO_CHAT_SETTINGS: ChatRestriction$Action;
    constructor(title: Component, runnable: (param0: Minecraft, param1: Screen) => void)
    // private runnable: (param0: Minecraft, param1: Screen) => void;
    // private title: Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    runnable(): (param0: Minecraft, param1: Screen) => void;
    title(): Component;
    toString(): string;
}