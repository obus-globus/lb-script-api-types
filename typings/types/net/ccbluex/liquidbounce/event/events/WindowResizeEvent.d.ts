import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the game window is resized, exposing the new width and height.
 */
export class WindowResizeEvent extends Event {
    constructor(width: number, height: number)
    readonly height: number;
    readonly width: number;
}