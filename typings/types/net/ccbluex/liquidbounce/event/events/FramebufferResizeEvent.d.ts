import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the render framebuffer is resized, exposing the new width and height.
 */
export class FramebufferResizeEvent extends Event {
    constructor(width: number, height: number)
    readonly height: number;
    readonly width: number;
}