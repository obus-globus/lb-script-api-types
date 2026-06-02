import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
export class MovementInputEvent extends Event {
    constructor(directionalInput: DirectionalInput, jump: boolean, sneak: boolean)
    directionalInput: DirectionalInput;
    jump: boolean;
    sneak: boolean;
}