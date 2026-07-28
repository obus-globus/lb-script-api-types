import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatComponent } from '../../../../../net/minecraft/client/gui/components/ChatComponent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatHudExtensionKt extends Object {
    /**
     * Adds a message and assigns the ID to it.
     *
     * @see ChatComponent.addMessage
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:51}
     */
    static addMessage(self: ChatComponent, message: Component, id: string | null, count: number): void;
    /**
     * Removes all messages with the given ID.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:63}
     */
    static removeMessage(self: ChatComponent, id: string | null): void;
}