import type { TitleEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent.d.ts'
/**
 * Fires when the title fade timing is set, exposing the fade-in, stay and fade-out ticks. Cancellable.
 */
export class TitleEvent$Fade extends TitleEvent {
    constructor(fadeInTicks: number, stayTicks: number, fadeOutTicks: number)
    fadeInTicks: number;
    fadeOutTicks: number;
    stayTicks: number;
}