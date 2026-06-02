import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DebuggedOwner } from '../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export interface EventListener extends Object, DebuggedOwner{
    readonly debugDisplayName: Component;
    /**
     * Returns whether the listenable is running or not, this is based on the parent listenable
     * and if no parent is present, it will return the opposite of {@link isDestructed}.
     *
     * When destructed, the listenable will not handle any events. This is likely to be overridden by
     * the implementing class to provide a toggleable feature.
     *
     * This can be ignored by handlers when {@link ignoreNotRunning} is set to true on the {@link EventHook}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:41}
     */
    readonly running: boolean;
    /**
     * Children {@link EventListener}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:58}
     */
    children(): EventListener[];
    /**
     * Parent {@link EventListener}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:53}
     */
    parent(): EventListener | null;
    /**
     * Unregisters the event handler from the manager. This decision is FINAL!
     * After the class was unregistered we cannot restore the handlers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:63}
     */
    unregister(): void;
}