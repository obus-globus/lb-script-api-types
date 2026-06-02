import type { DumperOptions$FlowStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { CollectionStartEvent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/CollectionStartEvent.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
export class SequenceStartEvent extends CollectionStartEvent {
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: Mark, arg4: Mark, arg5: DumperOptions$FlowStyle)
    getEventId(): Event$ID;
}