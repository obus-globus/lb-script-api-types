import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RequestHandler } from '../../../../../net/ccbluex/liquidbounce/utils/client/RequestHandler.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Global minecraft timer
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt:30}
 */
export class Timer extends Object implements EventListener {
    static INSTANCE: Timer;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private requestHandler: RequestHandler<number>;
    readonly running: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    /**
     * You cannot set this manually. Use {@link requestTimerSpeed} instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt:36}
     */
    readonly timerSpeed: number;
    children(): EventListener[];
    parent(): EventListener | null;
    /**
     * Requests a timer speed change. If another module requests with a higher priority,
     * the other module is prioritized.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt:48}
     */
    requestTimerSpeed(timerSpeed: number, priority: Priority, provider: ClientModule, resetAfterTicks: number): void;
    unregister(): void;
}