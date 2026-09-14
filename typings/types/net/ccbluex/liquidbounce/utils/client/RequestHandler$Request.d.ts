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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RequestHandler.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RequestHandler.kt:71}
 */
export class RequestHandler$Request<T extends unknown> extends Object {
    constructor(expiresIn: number, priority: number, provider: EventListener, value: T)
    expiresIn: number;
    readonly priority: number;
    readonly provider: EventListener;
    readonly value: T;
}