import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * The current mouse cursor position, exposing its x and y coordinates.
 */
export class MouseCursorEvent extends Event {
    constructor(x: number, y: number)
    readonly x: number;
    readonly y: number;
}