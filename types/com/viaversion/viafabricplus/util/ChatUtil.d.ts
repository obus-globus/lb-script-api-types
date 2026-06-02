import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatUtil extends Object {
    static PREFIX: string;
    static PREFIX_TEXT: Component;
    static prefixText(paramarg0: string): Component;
    static prefixText(paramarg0: Component): Component;
    static sendPrefixedMessage(paramarg0: Component): void;
    static uncoverTranslationKey(paramarg0: Component): string;
    constructor()
}