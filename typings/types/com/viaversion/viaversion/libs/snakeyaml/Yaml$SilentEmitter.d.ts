import type { Emitable } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/emitter/Emitable.d.ts'
import type { Event } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Yaml$SilentEmitter extends Object implements Emitable {
    constructor(arg0: Iterator<Object>)
    readonly events: Event[];
    emit(arg0: Event): void;
    getEvents(): Event[];
}