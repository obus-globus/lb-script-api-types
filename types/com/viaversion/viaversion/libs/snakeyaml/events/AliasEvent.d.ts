import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
import type { NodeEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/NodeEvent.d.ts'
export class AliasEvent extends NodeEvent {
    constructor(arg0: string, arg1: Mark, arg2: Mark)
    getEventId(): Event$ID;
}