import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AtomicRef } from '../../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EventHook } from '../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventHookRegistry$Companion } from '../../../../net/ccbluex/liquidbounce/event/EventHookRegistry$Companion.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * A special {@link java.util.concurrent.CopyOnWriteArrayList} that stores {@link EventHook}s.
 *
 * All elements are ordered descending by {@link EventHook.priority}.
 *
 * Equality of {@link EventHook}s is defined by reference equality.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/EventHookRegistry.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/event/EventHookRegistry.kt:33}
 */
export class EventHookRegistry<E extends Event> extends Object {
    static Companion: EventHookRegistry$Companion;
    constructor()
    // private array: AtomicRef<Object[]>;
    readonly snapshot: Object[];
    addIfAbsent(eventHook: EventHook<E>): void;
    clear(): void;
    remove(eventHook: EventHook<E>): void;
    remove(eventListener: EventListener): void;
}