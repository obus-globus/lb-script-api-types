import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { SprintEvent$Source } from '../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent$Source.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
/**
 * Fires when the player's sprint state is updated, exposing the directional input, the sprint flag and the source of the update.
 */
export class SprintEvent extends Event {
    constructor(directionalInput: DirectionalInput, sprint: boolean, source: SprintEvent$Source)
    readonly directionalInput: DirectionalInput;
    readonly source: SprintEvent$Source;
    sprint: boolean;
}