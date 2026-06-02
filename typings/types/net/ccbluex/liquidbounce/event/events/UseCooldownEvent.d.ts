import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class UseCooldownEvent extends Event {
    constructor(cooldown: number)
    cooldown: number;
}