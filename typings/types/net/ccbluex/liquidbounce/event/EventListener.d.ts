import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DebuggedOwner } from '../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export interface EventListener extends Object, DebuggedOwner{
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    /**
     * Returns whether the listenable is running or not, this is based on the parent listenable
     * and if no parent is present, it will return the opposite of {@link isDestructed}.
     *
     * When destructed, the listenable will not handle any events. This is likely to be overridden by
     * the implementing class to provide a toggleable feature.
     *
     * This can be ignored by handlers when {@link ignoreNotRunning} is set to true on the {@link EventHook}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:50}
     */
    readonly running: boolean;
    /**
     * Children {@link EventListener}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:61}
     */
    children(): EventListener[];
    /**
     * Parent {@link EventListener}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:56}
     */
    parent(): EventListener | null;
    /**
     * Unregisters the event handler from the manager. This decision is FINAL!
     * After the class was unregistered we cannot restore the handlers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventListener.kt:67}
     */
    unregister(): void;
}