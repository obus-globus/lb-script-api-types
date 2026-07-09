import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatComponent } from '../../../../../net/minecraft/client/gui/components/ChatComponent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatHudExtensionKt extends Object {
    /**
     * Adds a message and assigns the ID to it.
     *
     * @see ChatComponent.addMessage
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:51}
     */
    static addMessage(chatComponent: ChatComponent, message: Component, id: string, count: number): void;
    /**
     * Removes all messages with the given ID.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:63}
     */
    static removeMessage(chatComponent: ChatComponent, id: string): void;
}