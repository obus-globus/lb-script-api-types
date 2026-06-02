import type { TitleEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent.d.ts'
export class TitleEvent$Fade extends TitleEvent {
    constructor(fadeInTicks: number, stayTicks: number, fadeOutTicks: number)
    fadeInTicks: number;
    fadeOutTicks: number;
    stayTicks: number;
}