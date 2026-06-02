import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { CollectionEndEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/CollectionEndEvent.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
export class SequenceEndEvent extends CollectionEndEvent {
    constructor(arg0: Mark, arg1: Mark)
    getEventId(): Event$ID;
}