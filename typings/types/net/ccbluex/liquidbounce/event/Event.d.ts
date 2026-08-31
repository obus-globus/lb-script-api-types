import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * A callable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:29}
 */
export abstract class Event extends Object {
    constructor()
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
}