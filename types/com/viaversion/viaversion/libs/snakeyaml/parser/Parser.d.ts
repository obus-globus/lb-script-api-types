import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Event$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event$ID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Parser extends Object{
    checkEvent(arg0: Event$ID): boolean;
    getEvent(): Event;
    peekEvent(): Event;
}