import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatComponent } from '../../../../../net/minecraft/client/gui/components/ChatComponent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatHudExtensionKt extends Object {
    /**
     * Adds a message and assigns the ID to it.
     *
     * @see ChatComponent.addMessage
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:45}
     */
    static addMessage(paramarg0: ChatComponent, paramarg1: Component, paramarg2: string, paramarg3: number): void;
    /**
     * Removes all messages with the given ID.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:60}
     */
    static removeMessage(paramarg0: ChatComponent, paramarg1: string): void;
}