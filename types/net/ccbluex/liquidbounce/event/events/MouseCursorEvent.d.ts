import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class MouseCursorEvent extends Event {
    constructor(x: number, y: number)
    readonly x: number;
    readonly y: number;
}