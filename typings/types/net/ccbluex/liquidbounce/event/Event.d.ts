import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * A callable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:29}
 */
export abstract class Event extends Object {
    constructor()
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
}