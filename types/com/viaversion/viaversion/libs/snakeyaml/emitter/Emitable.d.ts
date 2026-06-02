import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Emitable extends Object{
    emit(arg0: Event): void;
}