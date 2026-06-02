import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
export class SelectHotbarSlotSilentlyEvent extends CancellableEvent {
    constructor(requester: Object | null, slot: number)
    readonly requester: Object | null;
    readonly slot: number;
}