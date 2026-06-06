import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RequestHandler } from '../../../../../net/ccbluex/liquidbounce/utils/client/RequestHandler.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
/**
 * Global minecraft timer
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt:29}
 */
export class Timer extends Object implements EventListener {
    static INSTANCE: Timer;
    // private requestHandler: RequestHandler<number>;
    // private tickHandler: EventHook<GameTickEvent>;
    /**
     * You cannot set this manually. Use {@link requestTimerSpeed} instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt:33}
     */
    readonly timerSpeed: number;
    children(): EventListener[];
    parent(): EventListener | null;
    /**
     * Requests a timer speed change. If another module requests with a higher priority,
     * the other module is prioritized.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/Timer.kt:44}
     */
    requestTimerSpeed(timerSpeed: number, priority: Priority, provider: ClientModule, resetAfterTicks: number): void;
    unregister(): void;
}