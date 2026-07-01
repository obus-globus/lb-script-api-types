import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the player's health, hunger or saturation changes, exposing the new and previous values.
 */
export class HealthUpdateEvent extends Event {
    constructor(health: number, food: number, saturation: number, previousHealth: number)
    readonly food: number;
    readonly health: number;
    readonly previousHealth: number;
    readonly saturation: number;
}