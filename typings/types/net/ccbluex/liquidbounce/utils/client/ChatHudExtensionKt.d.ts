import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatComponent } from '../../../../../net/minecraft/client/gui/components/ChatComponent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatHudExtensionKt extends Object {
    /**
     * Adds a message and assigns the ID to it.
     *
     * @see ChatComponent.addMessage
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:45}
     */
    static addMessage(chatComponent: ChatComponent, message: Component, id: string, count: number): void;
    /**
     * Removes all messages with the given ID.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ChatHudExtension.kt:60}
     */
    static removeMessage(chatComponent: ChatComponent, id: string): void;
}