import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Production extends Object{
    produce(): Event;
}