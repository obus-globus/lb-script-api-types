import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * A requested state of the system.
 *
 * Note: A request is deleted when its corresponding module is disabled.
 *
 * @param expiresIn in how many ticks units should this request expire?
 * @param priority higher = higher priority
 * @param provider module which requested value
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RequestHandler.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RequestHandler.kt:57}
 */
export class RequestHandler$Request<T extends Object | number | string | boolean> extends Object {
    constructor(expiresIn: number, priority: number, provider: EventListener, value: T)
    expiresIn: number;
    readonly priority: number;
    readonly provider: EventListener;
    readonly value: T;
}