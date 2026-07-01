import type { TitleEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent.d.ts'
/**
 * Fires when the on-screen title is cleared, exposing whether the fade timings are reset. Cancellable.
 */
export class TitleEvent$Clear extends TitleEvent {
    constructor(reset: boolean)
    reset: boolean;
}