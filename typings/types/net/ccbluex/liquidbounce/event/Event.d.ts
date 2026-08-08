import type { Object } from '../../../../java/lang/Object.d.ts'
/**
 * A callable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:29}
 */
export abstract class Event extends Object {
    constructor()
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
}