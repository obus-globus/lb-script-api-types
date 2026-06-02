import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class MouseScrollEvent extends Event {
    constructor(horizontal: number, vertical: number)
    readonly horizontal: number;
    readonly vertical: number;
}