import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class WindowResizeEvent extends Event {
    constructor(width: number, height: number)
    readonly height: number;
    readonly width: number;
}