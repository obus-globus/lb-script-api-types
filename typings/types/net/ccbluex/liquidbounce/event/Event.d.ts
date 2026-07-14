import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * A callable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:29}
 */
export abstract class Event extends Object {
    constructor()
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
}