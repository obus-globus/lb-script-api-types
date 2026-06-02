import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
export class DocumentEndEvent extends Event {
    constructor(arg0: Mark, arg1: Mark, arg2: boolean)
    readonly explicit: boolean;
    getEventId(): Event$ID;
    getExplicit(): boolean;
}