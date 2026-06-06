import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * A callable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:26}
 */
export abstract class Event extends Object {
    constructor()
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
}