import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class HealthUpdateEvent extends Event {
    constructor(health: number, food: number, saturation: number, previousHealth: number)
    readonly food: number;
    readonly health: number;
    readonly previousHealth: number;
    readonly saturation: number;
}